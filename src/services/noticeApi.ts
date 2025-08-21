import axios from 'axios';
import { config, endpoints } from '../config/environment';

// Notice interfaces
export interface NoticeCreator {
  _id: string;
  name: string;
  fullName: string;
  id: string;
}

export interface Notice {
  _id: string;
  title: string;
  content: string;
  image: string;
  isActive: boolean;
  priority: 'urgent' | 'normal' | 'low';
  expiresAt: string;
  createdBy: NoticeCreator;
  createdAt: string;
  updatedAt: string;
  isExpired: boolean;
  isCurrentlyActive: boolean;
  id: string;
}

export interface NoticeResponse {
  success: boolean;
  data: {
    notice: Notice;
  };
}

// Create axios instance for notice API
const noticeApiClient = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: config.api.timeout,
});

// Get full notice image URL
export const getNoticeImageUrl = (imageUrl: string): string => {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  // In development, use relative URLs to avoid CORS issues
  if (import.meta.env.DEV) {
    return imageUrl;
  }
  
  // Parse the API base URL to get the server domain
  const apiUrl = new URL(config.api.baseURL);
  const serverBase = `${apiUrl.protocol}//${apiUrl.host}`;
  
  // Ensure proper URL construction
  const fullUrl = `${serverBase}${imageUrl}`;
  
  // Debug logging in development
  if (import.meta.env.DEV) {
    console.log('Notice Image URL constructed:', {
      original: imageUrl,
      serverBase,
      full: fullUrl,
      baseURL: config.api.baseURL
    });
  }
  
  return fullUrl;
};

// Get public notice
export const getPublicNotice = async (): Promise<NoticeResponse> => {
  try {
    const response = await noticeApiClient.get(endpoints.notice.public);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data?.message || 'Failed to fetch notice');
      } else if (error.request) {
        throw new Error('Network error. Please check your connection and try again.');
      } else {
        throw new Error('An unexpected error occurred. Please try again.');
      }
    } else {
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};

// Development logging
if (import.meta.env.DEV) {
  noticeApiClient.interceptors.request.use(
    (config) => {
      console.log('Notice API Request:', config.method?.toUpperCase(), config.url);
      return config;
    },
    (error) => {
      console.error('Notice API Request Error:', error);
      return Promise.reject(error);
    }
  );

  noticeApiClient.interceptors.response.use(
    (response) => {
      console.log('Notice API Response:', response.status, response.data);
      return response;
    },
    (error) => {
      console.error('Notice API Response Error:', error.response?.status, error.response?.data);
      return Promise.reject(error);
    }
  );
}
