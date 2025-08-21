// Environment configuration
export const config = {
  // API Configuration
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.mahasamvit.com/api',
    timeout: 10000, // 10 seconds
  },
  
  // App Configuration
  app: {
    name: 'Mahasamvit Portfolio',
    version: '1.0.0',
  },
  
  // Contact Form Configuration
  contact: {
    maxRetries: 3,
    retryDelay: 1000, // 1 second
  },
};

// Environment type checking
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// API endpoints
export const endpoints = {
  contact: {
    submit: '/contact/submit',
  },
  media: {
    getAll: '/media',
  },
  notice: {
    public: '/notice/public',
  },
  health: '/health',
} as const;
