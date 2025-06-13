
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from './LazyImage';

export interface Photo {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  src: string;
  thumbnail?: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handleImageError = (photoId: string) => {
    console.warn(`Image failed to load: ${photoId}`);
  };

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="photo-item rounded-md overflow-hidden shadow-md cursor-pointer"
            onClick={() => openLightbox(photo, index)}
          >
            <LazyImage
              src={photo.thumbnail || photo.src}
              alt={photo.title || `${photo.category} photo`}
              className="w-full h-full"
              onError={() => handleImageError(photo.id)}
            />
            <div className="category-badge">
              {photo.category}
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <LazyImage
              src={selectedPhoto.src}
              alt={selectedPhoto.title || `${selectedPhoto.category} photo`}
              className="lightbox-image"
              onError={() => handleImageError(selectedPhoto.id)}
            />
            <div className="lightbox-caption">
              <h3 className="text-xl font-serif mb-2">{selectedPhoto.title}</h3>
              <p className="text-sm mb-1">{selectedPhoto.description}</p>
              <p className="text-xs text-gray-300">{selectedPhoto.date}</p>
            </div>
            
            <button 
              className="lightbox-close absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="lightbox-nav">
              <button 
                onClick={goToPrev} 
                className="hover:bg-black/80 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={goToNext}
                className="hover:bg-black/80 focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGrid;
