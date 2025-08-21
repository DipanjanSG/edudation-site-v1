// Notice utility functions for managing display logic

const NOTICE_DISPLAY_KEY = 'mahasamvit_notice_displayed';
const NOTICE_ID_KEY = 'mahasamvit_notice_id';

export interface NoticeDisplayInfo {
  noticeId: string;
  displayedDate: string;
}

/**
 * Check if a notice should be displayed today
 * @param noticeId - The ID of the notice
 * @returns boolean - true if notice should be displayed, false otherwise
 */
export const shouldDisplayNotice = (noticeId: string): boolean => {
  try {
    const stored = localStorage.getItem(NOTICE_DISPLAY_KEY);
    if (!stored) return true;

    const displayInfo: NoticeDisplayInfo = JSON.parse(stored);
    const today = new Date().toDateString();
    const lastDisplayed = new Date(displayInfo.displayedDate).toDateString();

    // Show if it's a different day or a different notice
    return today !== lastDisplayed || displayInfo.noticeId !== noticeId;
  } catch (error) {
    console.error('Error checking notice display status:', error);
    return true; // Show notice if there's an error
  }
};

/**
 * Mark a notice as displayed for today
 * @param noticeId - The ID of the notice that was displayed
 */
export const markNoticeAsDisplayed = (noticeId: string): void => {
  try {
    const displayInfo: NoticeDisplayInfo = {
      noticeId,
      displayedDate: new Date().toISOString()
    };
    localStorage.setItem(NOTICE_DISPLAY_KEY, JSON.stringify(displayInfo));
  } catch (error) {
    console.error('Error marking notice as displayed:', error);
  }
};

/**
 * Clear notice display history (useful for testing)
 */
export const clearNoticeDisplayHistory = (): void => {
  try {
    localStorage.removeItem(NOTICE_DISPLAY_KEY);
    localStorage.removeItem(NOTICE_ID_KEY);
  } catch (error) {
    console.error('Error clearing notice display history:', error);
  }
};

/**
 * Get the last displayed notice ID
 * @returns string | null - The last displayed notice ID or null
 */
export const getLastDisplayedNoticeId = (): string | null => {
  try {
    const stored = localStorage.getItem(NOTICE_DISPLAY_KEY);
    if (!stored) return null;

    const displayInfo: NoticeDisplayInfo = JSON.parse(stored);
    return displayInfo.noticeId;
  } catch (error) {
    console.error('Error getting last displayed notice ID:', error);
    return null;
  }
};

/**
 * Check if a notice is expired
 * @param expiresAt - The expiration date string
 * @returns boolean - true if notice is expired, false otherwise
 */
export const isNoticeExpired = (expiresAt: string): boolean => {
  try {
    const expirationDate = new Date(expiresAt);
    const now = new Date();
    return now > expirationDate;
  } catch (error) {
    console.error('Error checking notice expiration:', error);
    return false; // Don't expire if there's an error
  }
};

/**
 * Check if a notice is currently active
 * @param isActive - Whether the notice is marked as active
 * @param isCurrentlyActive - Whether the notice is currently active
 * @param expiresAt - The expiration date string
 * @returns boolean - true if notice should be shown, false otherwise
 */
export const isNoticeActive = (
  isActive: boolean,
  isCurrentlyActive: boolean,
  expiresAt: string
): boolean => {
  return isActive && isCurrentlyActive && !isNoticeExpired(expiresAt);
};
