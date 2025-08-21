import axios from 'axios';
import { config, endpoints } from '../config/environment';

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API response interface
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: config.api.timeout,
});

// Retry logic for failed requests
const retryRequest = async (fn: () => Promise<any>, retries: number = config.contact.maxRetries): Promise<any> => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0 && axios.isAxiosError(error) && error.response && error.response.status >= 500) {
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, config.contact.retryDelay));
      return retryRequest(fn, retries - 1);
    }
    throw error;
  }
};

// Contact form submission with retry logic
export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  return retryRequest(async () => {
    try {
      const response = await apiClient.post(endpoints.contact.submit, formData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle axios errors
        if (error.response) {
          // Server responded with error status
          const errorMessage = error.response.data?.message || 
            `Server error: ${error.response.status} ${error.response.statusText}`;
          throw new Error(errorMessage);
        } else if (error.request) {
          // Network error
          throw new Error('Network error. Please check your connection and try again.');
        } else {
          // Other error
          throw new Error('An unexpected error occurred. Please try again.');
        }
      } else {
        // Non-axios error
        throw new Error('An unexpected error occurred. Please try again.');
      }
    }
  });
};

// Health check for API
export const checkApiHealth = async (): Promise<boolean> => {
  try {
    await apiClient.get(endpoints.health);
    return true;
  } catch (error) {
    return false;
  }
};

// Request interceptor for logging (development only)
if (import.meta.env.DEV) {
  apiClient.interceptors.request.use(
    (config) => {
      console.log('API Request:', config.method?.toUpperCase(), config.url, config.data);
      return config;
    },
    (error) => {
      console.error('API Request Error:', error);
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    (response) => {
      console.log('API Response:', response.status, response.data);
      return response;
    },
    (error) => {
      console.error('API Response Error:', error.response?.status, error.response?.data);
      return Promise.reject(error);
    }
  );
}
