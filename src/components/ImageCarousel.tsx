import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
  images: { url: string; alt: string }[];
  autoplay?: boolean;
  delayMs?: number;
}

export default function ImageCarousel({ images, autoplay = true, delayMs = 3000 }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, delayMs);

    return () => clearInterval(intervalId);
  }, [emblaApi, autoplay, delayMs]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative flex-[0_0_100%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6 text-green-600" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6 text-green-600" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-green-600' : 'bg-white/60'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}