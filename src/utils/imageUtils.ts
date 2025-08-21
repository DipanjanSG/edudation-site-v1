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
 * Handles image loading errors gracefully
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
  } else {
    // Hide the image and show a placeholder
    target.style.display = 'none';
    const container = target.parentElement;
    if (container) {
      container.innerHTML = `
        <div class="w-full h-full bg-gray-100 flex items-center justify-center">
          <div class="text-center text-gray-500">
            <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p class="text-sm">Image not available</p>
          </div>
        </div>
      `;
    }
  }
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
