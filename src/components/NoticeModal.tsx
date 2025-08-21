import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Info, Clock, User } from 'lucide-react';
import { Notice, getNoticeImageUrl } from '../services/noticeApi';
import { handleImageError } from '../utils/imageUtils';

interface NoticeModalProps {
  notice: Notice;
  isOpen: boolean;
  onClose: () => void;
}

export default function NoticeModal({ notice, isOpen, onClose }: NoticeModalProps) {
  const [imageLoading, setImageLoading] = React.useState(true);
  const [imageError, setImageError] = React.useState(false);
  const [retryCount, setRetryCount] = React.useState(0);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const showFallback = (target: HTMLImageElement, imagePath: string) => {
    // Hide the image and show a fallback
    target.style.display = 'none';
    const container = target.parentElement;
    if (container) {
      container.innerHTML = `
        <div class="w-full h-64 bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
          <div class="text-center text-gray-500">
            <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p class="text-sm">Image not available</p>
            <p class="text-xs mt-1">${imagePath}</p>
            <button onclick="window.open('${target.src}', '_blank')" class="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
              Open Image in New Tab
            </button>
          </div>
        </div>
      `;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'normal':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'low':
        return <Info className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'normal':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'Urgent';
      case 'normal':
        return 'Normal';
      case 'low':
        return 'Low Priority';
      default:
        return 'Normal';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getPriorityIcon(notice.priority)}
                  <h2 className="text-2xl font-bold">{notice.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Priority Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(notice.priority)}`}>
                {getPriorityText(notice.priority)}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
                                            {/* Image */}
               {notice.image && (
                 <div className="mb-6">
                   {imageLoading && (
                     <div className="w-full h-64 bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
                       <div className="text-center">
                         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                         <p className="text-sm text-gray-500">Loading image...</p>
                       </div>
                     </div>
                   )}
                   
                   {imageError && !imageLoading && (
                     <div className="w-full h-64 bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
                       <div className="text-center text-gray-500">
                         <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                         </svg>
                         <p className="text-sm">Image not available</p>
                         <p className="text-xs mt-1">{notice.image}</p>
                         <button 
                           onClick={() => {
                             setImageLoading(true);
                             setImageError(false);
                             setRetryCount(prev => prev + 1);
                           }}
                           className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                         >
                           Retry Loading
                         </button>
                       </div>
                     </div>
                   )}
                   
                   <img
                     src={getNoticeImageUrl(notice.image)}
                     alt={notice.title}
                     className={`w-full h-64 object-cover rounded-lg shadow-md ${imageLoading || imageError ? 'hidden' : ''}`}
                     onError={(e) => {
                        handleImageError(e);
                        setImageLoading(false);
                        setImageError(true);
                      }}
                                           onLoad={() => {
                        setImageLoading(false);
                        setImageError(false);
                        if (import.meta.env.DEV) {
                          console.log('Notice image loaded successfully:', {
                            originalImage: notice.image,
                            constructedUrl: getNoticeImageUrl(notice.image)
                          });
                        }
                      }}
                     onLoadStart={() => {
                       if (import.meta.env.DEV) {
                         console.log('Notice image loading started:', {
                           originalImage: notice.image,
                           constructedUrl: getNoticeImageUrl(notice.image)
                         });
                       }
                     }}
                     onAbort={() => {
                       if (import.meta.env.DEV) {
                         console.log('Notice image loading aborted:', {
                           originalImage: notice.image,
                           constructedUrl: getNoticeImageUrl(notice.image)
                         });
                       }
                     }}
                   />
                 </div>
               )}

              {/* Notice Content */}
              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                  {notice.content}
                </p>
              </div>

              {/* Metadata */}
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Posted by: {notice.createdBy.fullName || notice.createdBy.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Posted: {formatDate(notice.createdAt)}</span>
                  </div>
                  {notice.expiresAt && (
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Expires: {formatDate(notice.expiresAt)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  This notice will appear once per day
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Got it
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
