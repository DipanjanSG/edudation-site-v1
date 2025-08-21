import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Play, Eye, Download, Calendar, User, Tag } from 'lucide-react';
import toast from 'react-hot-toast';
import { getMedia, getMediaUrl, MediaItem, MediaFilters } from '../services/mediaApi';

export default function Gallery() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<MediaFilters>({
    page: 1,
    limit: 12,
    sortBy: 'createdAt',
    sortOrder: 'desc'
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeSection, setActiveSection] = useState<'all' | 'images' | 'videos'>('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoRetryCount, setVideoRetryCount] = useState(0);
  const observer = useRef<IntersectionObserver>();

  // Categories for filtering
  const categories = [
    'all', 'portfolio', 'events', 'projects', 'team', 'office', 'products', 'services'
  ];

  // Last element ref for infinite scroll
  const lastElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreMedia();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Load media data
  const loadMedia = async (reset = false) => {
    try {
      setLoading(true);
             const currentFilters = {
         ...filters,
         page: reset ? 1 : currentPage,
         type: activeSection === 'all' ? undefined : (activeSection === 'images' ? 'image' : 'video') as 'image' | 'video',
         category: selectedCategory === 'all' ? undefined : selectedCategory
       };

      const response = await getMedia(currentFilters);
      
      if (response.success) {
        if (reset) {
          setMedia(response.data.media);
          setCurrentPage(1);
        } else {
          setMedia(prev => [...prev, ...response.data.media]);
        }
        
        setHasMore(response.data.pagination.currentPage < response.data.pagination.totalPages);
        setCurrentPage(response.data.pagination.currentPage + 1);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load media';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };

  // Load more media for infinite scroll
  const loadMoreMedia = () => {
    if (!loading && hasMore) {
      loadMedia(false);
    }
  };

  // Handle section change
  const handleSectionChange = useCallback(() => {
    setCurrentPage(1);
    setHasMore(true);
    loadMedia(true);
  }, [activeSection, selectedCategory]);

  // Effect for section and category changes
  useEffect(() => {
    if (activeSection !== 'all' || selectedCategory !== 'all') {
      handleSectionChange();
    }
  }, [activeSection, selectedCategory, handleSectionChange]);

  // Initial load
  useEffect(() => {
    loadMedia(true);
  }, []);

  // Handle media click for modal
  const handleMediaClick = (item: MediaItem) => {
    setSelectedMedia(item);
    setVideoLoading(false);
    setVideoError(null);
    setVideoRetryCount(0);
  };

  // Close modal
  const closeModal = () => {
    setSelectedMedia(null);
    setVideoLoading(false);
    setVideoError(null);
    setVideoRetryCount(0);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Media card component
  const MediaCard = ({ item, isLast = false }: { item: MediaItem; isLast?: boolean }) => (
    <motion.div
      ref={isLast ? lastElementRef : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
        viewMode === 'grid' ? 'bg-white' : 'bg-white flex'
      }`}
      onClick={() => handleMediaClick(item)}
    >
      {viewMode === 'grid' ? (
        <>
          <div className="relative overflow-hidden aspect-square">
            {item.type === 'image' ? (
              <img
                src={getMediaUrl(item.fileUrl)}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
                             <div className="relative w-full h-full bg-gray-900">
                 <video
                   src={getMediaUrl(item.fileUrl)}
                   className="w-full h-full object-cover"
                   muted
                   preload="metadata"
                   onError={(e) => {
                     console.error('Video thumbnail loading error:', e);
                   }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <Play className="h-16 w-16 text-white opacity-80" />
                 </div>
               </div>
            )}
            <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium">
              {item.type.toUpperCase()}
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="bg-white/90 backdrop-blur-sm rounded-full p-3"
              >
                <Eye className="h-6 w-6 text-gray-800" />
              </motion.div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>{item.viewCount}</span>
                <Download className="h-4 w-4" />
                <span>{item.downloadCount}</span>
              </div>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative w-48 h-32 flex-shrink-0">
            {item.type === 'image' ? (
              <img
                src={getMediaUrl(item.fileUrl)}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
                             <div className="relative w-full h-full bg-gray-900">
                 <video
                   src={getMediaUrl(item.fileUrl)}
                   className="w-full h-full object-cover"
                   muted
                   preload="metadata"
                   onError={(e) => {
                     console.error('Video thumbnail loading error:', e);
                   }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <Play className="h-8 w-8 text-white opacity-80" />
                 </div>
               </div>
            )}
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
              {item.type.toUpperCase()}
            </div>
          </div>
          <div className="flex-1 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{item.uploadedBy.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(item.createdAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{item.viewCount}</span>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {item.category}
              </span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );

  return (
    <div className="pt-24 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
                     <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900 mb-4">
             {activeSection === 'all' ? 'Our Gallery' : activeSection === 'images' ? 'Image Gallery' : 'Video Gallery'}
           </h1>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             {activeSection === 'all' 
               ? 'Explore our collection of images and videos showcasing our projects, events, and achievements'
               : activeSection === 'images'
               ? 'Browse through our collection of high-quality images from various projects and events'
               : 'Watch our curated collection of videos showcasing our work and achievements'
             }
           </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
                     <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
             {/* Section Tabs */}
             <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => setActiveSection('all')}
                 className={`px-4 py-2 rounded-md transition-colors ${
                   activeSection === 'all' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                 }`}
               >
                 All Media
               </motion.button>
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => setActiveSection('images')}
                 className={`px-4 py-2 rounded-md transition-colors ${
                   activeSection === 'images' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                 }`}
               >
                 Images
               </motion.button>
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => setActiveSection('videos')}
                 className={`px-4 py-2 rounded-md transition-colors ${
                   activeSection === 'videos' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                 }`}
               >
                 Videos
               </motion.button>
             </div>

            {/* Filter Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </motion.button>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                <Grid className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                <List className="h-5 w-5" />
              </motion.button>
            </div>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   

                  {/* Sort Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <select
                      value={`${filters.sortBy}-${filters.sortOrder}`}
                      onChange={(e) => {
                        const [sortBy, sortOrder] = e.target.value.split('-');
                        setFilters(prev => ({ ...prev, sortBy, sortOrder: sortOrder as 'asc' | 'desc' }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="createdAt-desc">Newest First</option>
                      <option value="createdAt-asc">Oldest First</option>
                      <option value="title-asc">Title A-Z</option>
                      <option value="title-desc">Title Z-A</option>
                      <option value="viewCount-desc">Most Viewed</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Media Grid/List */}
        {initialLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : media.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
                         <h3 className="text-xl font-medium text-gray-900 mb-2">
               {activeSection === 'all' ? 'No media found' : activeSection === 'images' ? 'No images found' : 'No videos found'}
             </h3>
             <p className="text-gray-600">
               {activeSection === 'all' 
                 ? 'Try adjusting your filter criteria'
                 : activeSection === 'images'
                 ? 'No images available in this category'
                 : 'No videos available in this category'
               }
             </p>
          </motion.div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
            {media.map((item, index) => (
              <MediaCard
                key={item._id}
                item={item}
                isLast={index === media.length - 1}
              />
            ))}
          </div>
        )}

        {/* Loading More Indicator */}
        {loading && !initialLoading && (
          <motion.div
            className="flex items-center justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading more...</span>
          </motion.div>
        )}

                 {/* No More Content */}
         {!hasMore && media.length > 0 && (
           <motion.div
             className="text-center py-8"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
           >
             <p className="text-gray-500">You've reached the end of the gallery</p>
           </motion.div>
         )}


      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={getMediaUrl(selectedMedia.fileUrl)}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                                 ) : (
                   <div className="relative">
                     {videoLoading && (
                       <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                       </div>
                     )}
                     {videoError && (
                       <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                         <div className="text-center text-white">
                           <div className="text-red-400 mb-2">⚠️</div>
                           <p className="text-sm">Failed to load video</p>
                           <a
                             href={getMediaUrl(selectedMedia.fileUrl)}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-blue-400 hover:text-blue-300 text-xs block mt-1"
                           >
                             Open video in new tab
                           </a>
                           <button
                             onClick={() => {
                               setVideoError(null);
                               setVideoLoading(true);
                               setVideoRetryCount(prev => prev + 1);
                               // Force video reload
                               const video = document.querySelector('video') as HTMLVideoElement;
                               if (video) {
                                 video.load();
                               }
                             }}
                             className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                           >
                             Retry ({videoRetryCount + 1})
                           </button>
                         </div>
                       </div>
                     )}
                     <video
                       src={getMediaUrl(selectedMedia.fileUrl)}
                       controls
                       className="w-full h-auto max-h-[70vh]"
                       preload="metadata"
                       onLoadStart={() => {
                         console.log('Video loading started:', getMediaUrl(selectedMedia.fileUrl));
                         setVideoLoading(true);
                       }}
                       onCanPlay={() => {
                         console.log('Video can play');
                         setVideoLoading(false);
                         setVideoError(null);
                       }}
                       onLoadedMetadata={() => {
                         console.log('Video metadata loaded');
                       }}
                       onError={(e) => {
                         const video = e.target as HTMLVideoElement;
                         console.error('Video loading error:', {
                           error: video.error,
                           networkState: video.networkState,
                           readyState: video.readyState,
                           src: video.src
                         });
                         setVideoLoading(false);
                         setVideoError('Failed to load video');
                         toast.error('Failed to load video. Please try again.');
                       }}
                     />
                   </div>
                 )}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedMedia.title}</h2>
                <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{selectedMedia.uploadedBy.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(selectedMedia.createdAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{selectedMedia.viewCount} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{selectedMedia.downloadCount} downloads</span>
                  </div>
                </div>
                {selectedMedia.tags.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Tag className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedMedia.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
