import React from 'react';
import { clearNoticeDisplayHistory, getLastDisplayedNoticeId } from '../utils/noticeUtils';
import { getNoticeImageUrl } from '../services/noticeApi';

export default function NoticeTest() {
  const handleClearHistory = () => {
    clearNoticeDisplayHistory();
    alert('Notice display history cleared! Refresh the page to see the notice again.');
  };

  const handleCheckLastNotice = () => {
    const lastNoticeId = getLastDisplayedNoticeId();
    if (lastNoticeId) {
      alert(`Last displayed notice ID: ${lastNoticeId}`);
    } else {
      alert('No notice has been displayed yet.');
    }
  };

  const handleTestImageUrl = () => {
    const testImagePath = '/uploads/notices/notice-1755769578035-494726328.png';
    const constructedUrl = getNoticeImageUrl(testImagePath);
    alert(`Test Image URL Construction:\n\nOriginal: ${testImagePath}\nConstructed: ${constructedUrl}`);
  };

  const handleTestImageFetch = async () => {
    const testImagePath = '/uploads/notices/notice-1755769578035-494726328.png';
    const constructedUrl = getNoticeImageUrl(testImagePath);
    
    try {
      const response = await fetch(constructedUrl);
      const result = {
        url: constructedUrl,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        ok: response.ok
      };
      
      alert(`Image Fetch Test:\n\nURL: ${result.url}\nStatus: ${result.status} ${result.statusText}\nOK: ${result.ok}\n\nCheck console for full details.`);
      console.log('Image fetch test result:', result);
    } catch (error) {
      alert(`Image Fetch Error:\n\nURL: ${constructedUrl}\nError: ${error}\n\nCheck console for full details.`);
      console.error('Image fetch test error:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200 z-40">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">Notice Test (Dev Only)</h3>
      <div className="space-y-2">
        <button
          onClick={handleClearHistory}
          className="block w-full px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Clear Notice History
        </button>
                 <button
           onClick={handleCheckLastNotice}
           className="block w-full px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
         >
           Check Last Notice
         </button>
         <button
           onClick={handleTestImageUrl}
           className="block w-full px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
         >
           Test Image URL
         </button>
         <button
           onClick={handleTestImageFetch}
           className="block w-full px-3 py-1 text-xs bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
         >
           Test Image Fetch
         </button>
      </div>
    </div>
  );
}
