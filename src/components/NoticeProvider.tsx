import React, { useState, useEffect } from 'react';
import { getPublicNotice, Notice } from '../services/noticeApi';
import { shouldDisplayNotice, markNoticeAsDisplayed, isNoticeActive } from '../utils/noticeUtils';
import NoticeModal from './NoticeModal';
import toast from 'react-hot-toast';

interface NoticeProviderProps {
  children: React.ReactNode;
}

export default function NoticeProvider({ children }: NoticeProviderProps) {
  const [notice, setNotice] = useState<Notice | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch notice on component mount
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        setLoading(true);
        const response = await getPublicNotice();
        
        if (response.success && response.data.notice) {
          const noticeData = response.data.notice;
          
          // Check if notice is active and should be displayed
          if (isNoticeActive(noticeData.isActive, noticeData.isCurrentlyActive, noticeData.expiresAt)) {
            if (shouldDisplayNotice(noticeData._id)) {
              setNotice(noticeData);
              setShowModal(true);
              markNoticeAsDisplayed(noticeData._id);
            }
          }
        }
      } catch (error) {
        // Silently handle errors - don't show toast for notice fetch failures
        console.error('Failed to fetch notice:', error);
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to ensure the page loads first
    const timer = setTimeout(fetchNotice, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {children}
      {notice && (
        <NoticeModal
          notice={notice}
          isOpen={showModal}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
