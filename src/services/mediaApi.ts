import axios from 'axios';
import { config, endpoints } from '../config/environment';
import { createSafeImageUrl } from '../utils/imageUtils';

// Media item interface
export interface MediaItem {
  _id: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  fileUrl: string;
  category: string;
  tags: string[];
  viewCount: number;
  downloadCount: number;
  uploadedBy: {
    _id: string;
    name: string;
  };
  createdAt: string;
}

// Pagination interface
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  total: number;
  limit: number;
}

// Media response interface
export interface MediaResponse {
  success: boolean;
  data: {
    media: MediaItem[];
    pagination: PaginationInfo;
  };
}

// Media filter options
export interface MediaFilters {
  page?: number;
  limit?: number;
  type?: 'image' | 'video';
  category?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Create axios instance for media API
const mediaApiClient = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: config.api.timeout,
});

// Get full media URL
export const getMediaUrl = (fileUrl: string): string => {
  return createSafeImageUrl(fileUrl, config.api.baseURL);
};

// Get all media with pagination and filters
export const getMedia = async (filters: MediaFilters = {}): Promise<MediaResponse> => {
  try {
    const params = new URLSearchParams();
    
    // Add filter parameters
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());
    if (filters.type) params.append('type', filters.type);
    if (filters.category) params.append('category', filters.category);
    if (filters.search) params.append('search', filters.search);
    if (filters.sortBy) params.append('sortBy', filters.sortBy);
    if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);

    const response = await mediaApiClient.get(`/media?${params.toString()}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data?.message || 'Failed to fetch media');
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

// Get media by category
export const getMediaByCategory = async (category: string, filters: Omit<MediaFilters, 'category'> = {}): Promise<MediaResponse> => {
  return getMedia({ ...filters, category });
};

// Get media by type
export const getMediaByType = async (type: 'image' | 'video', filters: Omit<MediaFilters, 'type'> = {}): Promise<MediaResponse> => {
  return getMedia({ ...filters, type });
};

// Search media
export const searchMedia = async (searchTerm: string, filters: Omit<MediaFilters, 'search'> = {}): Promise<MediaResponse> => {
  return getMedia({ ...filters, search: searchTerm });
};

// Development logging
if (import.meta.env.DEV) {
  mediaApiClient.interceptors.request.use(
    (config) => {
      console.log('Media API Request:', config.method?.toUpperCase(), config.url);
      return config;
    },
    (error) => {
      console.error('Media API Request Error:', error);
      return Promise.reject(error);
    }
  );

  mediaApiClient.interceptors.response.use(
    (response) => {
      console.log('Media API Response:', response.status, response.data);
      return response;
    },
    (error) => {
      console.error('Media API Response Error:', error.response?.status, error.response?.data);
      return Promise.reject(error);
    }
  );
}
