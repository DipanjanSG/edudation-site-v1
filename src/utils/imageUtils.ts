// Image utility functions for handling CORS and loading issues

/**
 * Creates a safe image URL that works in both development and production
 * @param imagePath - The image path from the API
 * @param baseUrl - The base URL for the API
 * @returns A properly formatted image URL
 */
export const createSafeImageUrl = (imagePath: string, baseUrl: string): string => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // In development, use relative URLs to avoid CORS issues
  if (import.meta.env.DEV) {
    return imagePath;
  }
  
  // Parse the API base URL to get the server domain
  const apiUrl = new URL(baseUrl);
  const serverBase = `${apiUrl.protocol}//${apiUrl.host}`;
  
  // Ensure proper URL construction
  return `${serverBase}${imagePath}`;
};

/**
 * Handles image loading errors gracefully (React-safe version)
 * @param event - The error event from the image (React SyntheticEvent or native Event)
 * @param fallbackSrc - Optional fallback image source
 * @returns void
 */
export const handleImageError = (event: Event | React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc?: string): void => {
  const target = (event.target || event.currentTarget) as HTMLImageElement;
  
  console.error('Image failed to load:', {
    src: target.src,
    naturalWidth: target.naturalWidth,
    naturalHeight: target.naturalHeight
  });
  
  // If a fallback is provided, try to use it
  if (fallbackSrc && target.src !== fallbackSrc) {
    target.src = fallbackSrc;
  }
  // Note: For React components, use state management instead of direct DOM manipulation
};

/**
 * Preloads an image to check if it's accessible
 * @param src - The image source URL
 * @returns Promise<boolean> - True if image loads successfully
 */
export const preloadImage = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};
