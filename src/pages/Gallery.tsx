import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhotoGrid, { Photo } from '@/components/PhotoGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample photo data
const photos: Photo[] = [
  // Nature category - Updated to use your local images
  {
    id: 'n1',
    title: '',
    category: 'Nature',
    description: '',
    date: 'January 15, 2023',
    src: '/images/nature/nIMG20240630165238 (1).jpg',
  },
  {
    id: 'n2',
    title: '',
    category: 'Nature',
    description: '',
    date: 'February 28, 2023',
    src: '/images/nature/nIMG20240630181040 (1).jpg',
  },
  {
    id: 'n3',
    title: '',
    category: 'Nature',
    description: '',
    date: 'March 12, 2023',
    src: '/images/nature/nIMG20240809182201 (2).jpg',
  },
  {
    id: 'n4',
    title: '',
    category: 'Nature',
    description: '',
    date: 'April 5, 2023',
    src: '/images/nature/nIMG20240906140844.jpg',
  },
  {
    id: 'n5',
    title: '',
    category: 'Nature',
    description: '',
    date: 'May 18, 2023',
    src: '/images/nature/nIMG20240918205704.jpg',
  },
  {
    id: 'n6',
    title: '',
    category: 'Nature',
    description: '',
    date: 'June 22, 2023',
    src: '/images/nature/nIMG20240928071714.jpg',
  },
  {
    id: 'n7',
    title: '',
    category: 'Nature',
    description: '',
    date: 'July 14, 2023',
    src: '/images/nature/nIMG20240930120845 (1).jpg',
  },
  {
    id: 'n8',
    title: '',
    category: 'Nature',
    description: '',
    date: 'August 8, 2023',
    src: '/images/nature/nIMG20240930160904 (1).jpg',
  },
  {
    id: 'n9',
    title: '',
    category: 'Nature',
    description: '',
    date: 'September 12, 2023',
    src: '/images/nature/nIMG20240930164334 (1).jpg',
  },
  {
    id: 'n10',
    title: '',
    category: 'Nature',
    description: '',
    date: 'December 26, 2023',
    src: '/images/nature/nIMG20241226173207 (2).jpg',
  },
  {
    id: 'n11',
    title: '',
    category: 'Nature',
    description: '',
    date: 'January 3, 2024',
    src: '/images/nature/nIMG20250103144236 (1).jpg',
  },
  {
    id: 'n12',
    title: '',
    category: 'Nature',
    description: '',
    date: 'January 3, 2024',
    src: '/images/nature/nIMG20250103154019 (1).jpg',
  },
  {
    id: 'n13',
    title: '',
    category: 'Nature',
    description: '',
    date: 'February 15, 2024',
    src: '/images/nature/nIMG_8880 (2).jpg',
  },
  {
    id: 'n14',
    title: '',
    category: 'Nature',
    description: '',
    date: 'March 20, 2024',
    src: '/images/nature/nIMG_9105 (2).jpg',
  },
  {
    id: 'n15',
    title: '',
    category: 'Nature',
    description: '',
    date: 'April 10, 2024',
    src: '/images/nature/nwIMG_8209.jpg',
  },
  {
    id: 'n16',
    title: '',
    category: 'Nature',
    description: '',
    date: 'May 5, 2024',
    src: '/images/nature/nwIMG_8565.jpg',
  },
  {
    id: 'n17',
    title: '',
    category: 'Nature',
    description: '',
    date: 'June 18, 2024',
    src: '/images/nature/nwIMG_8580.jpg',
  },
  {
    id: 'n18',
    title: '',
    category: 'Nature',
    description: '',
    date: 'July 25, 2024',
    src: '/images/nature/nwIMG_8599.jpg',
  },
  {
    id: 'n19',
    title: '',
    category: 'Nature',
    description: '',
    date: 'August 12, 2024',
    src: '/images/nature/nwIMG_9092.jpg',
  },
  
  // Portraits category - Updated to use your local images
  {
    id: 'p1',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'May 20, 2023',
    src: '/images/portraits/pIMG_1102 (1).jpg',
  },
  {
    id: 'p2',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'June 14, 2023',
    src: '/images/portraits/pxIMG_0091 (1).jpg',
  },
  {
    id: 'p3',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'July 3, 2023',
    src: '/images/portraits/pxIMG_0092 (1).jpg',
  },
  {
    id: 'p4',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'August 22, 2023',
    src: '/images/portraits/pxIMG_0441 (4).jpg',
  },
  {
    id: 'p5',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'September 10, 2023',
    src: '/images/portraits/pxIMG_9495 (2).jpg',
  },
  {
    id: 'p6',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'October 5, 2023',
    src: '/images/portraits/pxIMG_9501 (1).jpg',
  },
  {
    id: 'p7',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'November 18, 2023',
    src: '/images/portraits/pxIMG_9504 (1).jpg',
  },
  {
    id: 'p8',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'December 12, 2023',
    src: '/images/portraits/pxIMG_9525 (1).jpg',
  },
  {
    id: 'p9',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'January 8, 2024',
    src: '/images/portraits/pxIMG_9542x (2).jpg',
  },
  {
    id: 'p10',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'February 20, 2024',
    src: '/images/portraits/pxIMG_9555x (1).jpg',
  },
  {
    id: 'p11',
    title: '',
    category: 'Portraits',
    description: '',
    date: 'March 15, 2024',
    src: '/images/portraits/qIMG_8375 (1).jpg',
  },
  
  // Events category - Already updated to use your local images
  {
    id: 'e1',
    title: '',
    category: 'Events',
    description: '',
    date: 'September 8, 2023',
    src: '/images/events/eIMG20241018182300 (1).jpg',
  },
  {
    id: 'e2',
    title: '',
    category: 'Events',
    description: '',
    date: 'October 15, 2023',
    src: '/images/events/eIMG_3253 (2).jpg',
  },
  {
    id: 'e3',
    title: '',
    category: 'Events',
    description: '',
    date: 'November 22, 2023',
    src: '/images/events/eIMG_3360 (4).jpg',
  },
  {
    id: 'e4',
    title: '',
    category: 'Events',
    description: '',
    date: 'December 5, 2023',
    src: '/images/events/eIMG_8263x.jpg',
  },
  {
    id: 'e5',
    title: '',
    category: 'Events',
    description: '',
    date: 'January 10, 2024',
    src: '/images/events/eIMG_8303x.jpg',
  },
  {
    id: 'e6',
    title: '',
    category: 'Events',
    description: '',
    date: 'February 14, 2024',
    src: '/images/events/eIMG_8317x.jpg',
  },
  {
    id: 'e7',
    title: '',
    category: 'Events',
    description: '',
    date: 'March 20, 2024',
    src: '/images/events/eIMG_8386x.jpg',
  },
  {
    id: 'e8',
    title: '',
    category: 'Events',
    description: '',
    date: 'April 12, 2024',
    src: '/images/events/eIMG_8432x.jpg',
  },
  {
    id: 'e9',
    title: '',
    category: 'Events',
    description: '',
    date: 'May 8, 2024',
    src: '/images/events/exIMG_0708 (1).jpg',
  },
  {
    id: 'e10',
    title: '',
    category: 'Events',
    description: '',
    date: 'June 15, 2024',
    src: '/images/events/exIMG_0765 (2).jpg',
  },
  {
    id: 'e11',
    title: '',
    category: 'Events',
    description: '',
    date: 'July 22, 2024',
    src: '/images/events/exIMG_3992.jpg',
  },
  {
    id: 'e12',
    title: '',
    category: 'Events',
    description: '',
    date: 'August 30, 2024',
    src: '/images/events/exIMG_4149 (1).jpg',
  },
  {
    id: 'e13',
    title: '',
    category: 'Events',
    description: '',
    date: 'September 18, 2024',
    src: '/images/events/exIMG_4178.jpg',
  },
  {
    id: 'e14',
    title: '',
    category: 'Events',
    description: '',
    date: 'October 25, 2024',
    src: '/images/events/exIMG_4253.jpg',
  },
  {
    id: 'e15',
    title: '',
    category: 'Events',
    description: '',
    date: 'November 12, 2024',
    src: '/images/events/exIMG_4306.jpg',
  },
  
  // Random category - Updated to use your local images
  {
    id: 'r1',
    title: '',
    category: 'Random',
    description: '',
    date: 'January 10, 2024',
    src: '/images/random/rIMG20240804122125 (1).jpg',
  },
  {
    id: 'r2',
    title: '',
    category: 'Random',
    description: '',
    date: 'February 5, 2024',
    src: '/images/random/rIMG20240925195115.jpg',
  },
  {
    id: 'r3',
    title: '',
    category: 'Random',
    description: '',
    date: 'March 18, 2024',
    src: '/images/random/rIMG20240929122927 (1).jpg',
  },
  {
    id: 'r4',
    title: '',
    category: 'Random',
    description: '',
    date: 'April 25, 2024',
    src: '/images/random/rIMG20240929131858 (1).jpg',
  },
  {
    id: 'r5',
    title: '',
    category: 'Random',
    description: '',
    date: 'May 12, 2024',
    src: '/images/random/rIMG20241001160053 (1).jpg',
  },
  {
    id: 'r6',
    title: '',
    category: 'Random',
    description: '',
    date: 'June 8, 2024',
    src: '/images/random/rIMG20241002154315 (1).jpg',
  },
  {
    id: 'r7',
    title: '',
    category: 'Random',
    description: '',
    date: 'July 20, 2024',
    src: '/images/random/rIMG_1525 (1).jpg',
  },
  {
    id: 'r8',
    title: '',
    category: 'Random',
    description: '',
    date: 'August 15, 2024',
    src: '/images/random/rIMG_20250415_130119283 (1).jpg',
  },
  {
    id: 'r9',
    title: '',
    category: 'Random',
    description: '',
    date: 'September 22, 2024',
    src: '/images/random/rIMG_2170 (1).jpg',
  },
  {
    id: 'r10',
    title: '',
    category: 'Random',
    description: '',
    date: 'October 18, 2024',
    src: '/images/random/rIMG_8055 (2).jpg',
  },
  {
    id: 'r11',
    title: '',
    category: 'Random',
    description: '',
    date: 'November 5, 2024',
    src: '/images/random/rwIMG_8495.jpg',
  },
  {
    id: 'r12',
    title: '',
    category: 'Random',
    description: '',
    date: 'December 2, 2024',
    src: '/images/random/rwIMG_8506.jpg',
  },
  {
    id: 'r13',
    title: '',
    category: 'Random',
    description: '',
    date: 'December 15, 2024',
    src: '/images/random/rwIMG_9644.jpg',
  },
  {
    id: 'r14',
    title: '',
    category: 'Random',
    description: '',
    date: 'January 8, 2025',
    src: '/images/random/rwIMG_9652.jpg',
  },
  {
    id: 'r15',
    title: '',
    category: 'Random',
    description: '',
    date: 'January 20, 2025',
    src: '/images/random/rwIMG_9929.jpg',
  },
  {
    id: 'r16',
    title: '',
    category: 'Random',
    description: '',
    date: 'February 5, 2025',
    src: '/images/random/rxIMG_3498 (1).jpg',
  },
  {
    id: 'r17',
    title: '',
    category: 'Random',
    description: '',
    date: 'February 18, 2025',
    src: '/images/random/rxIMG_3523 (1).jpg',
  },
  {
    id: 'r18',
    title: '',
    category: 'Random',
    description: '',
    date: 'March 8, 2025',
    src: '/images/random/rxIMG_3586.jpg',
  },
  {
    id: 'r19',
    title: '',
    category: 'Random',
    description: '',
    date: 'March 22, 2025',
    src: '/images/random/rxIMG_3681 (1).jpg',
  },
  {
    id: 'r20',
    title: '',
    category: 'Random',
    description: '',
    date: 'April 5, 2025',
    src: '/images/random/rxIMG_3686.jpg',
  },
  {
    id: 'r21',
    title: '',
    category: 'Random',
    description: '',
    date: 'April 18, 2025',
    src: '/images/random/rxIMG_3691.jpg',
  },
  {
    id: 'r22',
    title: '',
    category: 'Random',
    description: '',
    date: 'May 2, 2025',
    src: '/images/random/rxIMG_3837.jpg',
  },
];

const Gallery: React.FC = () => {
  const [loadingErrors, setLoadingErrors] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Handle hash-based navigation to specific tabs
    const hash = window.location.hash.replace('#', '');
    if (hash && ['nature', 'portraits', 'events', 'random'].includes(hash)) {
      setActiveTab(hash);
    }
    
    // Verify all image paths are accessible
    console.log('Gallery loaded with', photos.length, 'photos');
    console.log('Photo categories:', [...new Set(photos.map(p => p.category))]);
  }, []);

  // Filter photos by category
  const naturePhotos = photos.filter(photo => photo.category === 'Nature');
  const portraitPhotos = photos.filter(photo => photo.category === 'Portraits');
  const eventPhotos = photos.filter(photo => photo.category === 'Events');
  const randomPhotos = photos.filter(photo => photo.category === 'Random');
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Gallery</h1>
            <p className="max-w-2xl mx-auto text-gray-700">
              Browse through my collection of photography across different categories,
              each enhanced with careful color grading and composition.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary">
                <TabsTrigger value="all">All ({photos.length})</TabsTrigger>
                <TabsTrigger value="nature">Nature ({naturePhotos.length})</TabsTrigger>
                <TabsTrigger value="portraits">Portraits ({portraitPhotos.length})</TabsTrigger>
                <TabsTrigger value="events">Events ({eventPhotos.length})</TabsTrigger>
                <TabsTrigger value="random">Random ({randomPhotos.length})</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <PhotoGrid photos={photos} />
            </TabsContent>
            
            <TabsContent value="nature" className="mt-8">
              <PhotoGrid photos={naturePhotos} />
            </TabsContent>
            
            <TabsContent value="portraits" className="mt-8">
              <PhotoGrid photos={portraitPhotos} />
            </TabsContent>
            
            <TabsContent value="events" className="mt-8">
              <PhotoGrid photos={eventPhotos} />
            </TabsContent>
            
            <TabsContent value="random" className="mt-8">
              <PhotoGrid photos={randomPhotos} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Gallery;
