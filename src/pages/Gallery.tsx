
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
    title: 'Mountain Vista',
    category: 'Nature',
    description: 'Scenic mountain range at sunrise with dramatic clouds',
    date: 'January 15, 2023',
    src: '/images/nature/nIMG20240630165238 (1).jpg',
  },
  {
    id: 'n2',
    title: 'Forest Path',
    category: 'Nature',
    description: 'Sunlight filtering through dense forest canopy',
    date: 'February 28, 2023',
    src: '/images/nature/nIMG20240630181040 (1).jpg',
  },
  {
    id: 'n3',
    title: 'Coastal Dreams',
    category: 'Nature',
    description: 'Waves crashing against rocky shoreline at sunset',
    date: 'March 12, 2023',
    src: '/images/nature/nIMG20240809182201 (2).jpg',
  },
  {
    id: 'n4',
    title: 'Desert Solitude',
    category: 'Nature',
    description: 'Vast desert landscape with rippled sand dunes',
    date: 'April 5, 2023',
    src: '/images/nature/nIMG20240906140844.jpg',
  },
  {
    id: 'n5',
    title: 'Evening Serenity',
    category: 'Nature',
    description: 'Peaceful evening scene in natural surroundings',
    date: 'May 18, 2023',
    src: '/images/nature/nIMG20240918205704.jpg',
  },
  {
    id: 'n6',
    title: 'Morning Light',
    category: 'Nature',
    description: 'Beautiful morning lighting through nature',
    date: 'June 22, 2023',
    src: '/images/nature/nIMG20240928071714.jpg',
  },
  {
    id: 'n7',
    title: 'Natural Beauty',
    category: 'Nature',
    description: 'Capturing the essence of natural beauty',
    date: 'July 14, 2023',
    src: '/images/nature/nIMG20240930120845 (1).jpg',
  },
  {
    id: 'n8',
    title: 'Sunset Glory',
    category: 'Nature',
    description: 'Magnificent sunset view in nature',
    date: 'August 8, 2023',
    src: '/images/nature/nIMG20240930160904 (1).jpg',
  },
  {
    id: 'n9',
    title: 'Nature\'s Canvas',
    category: 'Nature',
    description: 'Nature painted in perfect harmony',
    date: 'September 12, 2023',
    src: '/images/nature/nIMG20240930164334 (1).jpg',
  },
  {
    id: 'n10',
    title: 'Winter Wonder',
    category: 'Nature',
    description: 'Winter landscape in all its glory',
    date: 'December 26, 2023',
    src: '/images/nature/nIMG20241226173207 (2).jpg',
  },
  {
    id: 'n11',
    title: 'Fresh Perspective',
    category: 'Nature',
    description: 'A fresh take on natural photography',
    date: 'January 3, 2024',
    src: '/images/nature/nIMG20250103144236 (1).jpg',
  },
  {
    id: 'n12',
    title: 'Golden Hour',
    category: 'Nature',
    description: 'Perfect golden hour lighting in nature',
    date: 'January 3, 2024',
    src: '/images/nature/nIMG20250103154019 (1).jpg',
  },
  {
    id: 'n13',
    title: 'Wildlife Moment',
    category: 'Nature',
    description: 'Capturing wildlife in their natural habitat',
    date: 'February 15, 2024',
    src: '/images/nature/nIMG_8880 (2).jpg',
  },
  {
    id: 'n14',
    title: 'Nature\'s Detail',
    category: 'Nature',
    description: 'Intricate details found in nature',
    date: 'March 20, 2024',
    src: '/images/nature/nIMG_9105 (2).jpg',
  },
  {
    id: 'n15',
    title: 'Scenic Vista',
    category: 'Nature',
    description: 'Breathtaking scenic view',
    date: 'April 10, 2024',
    src: '/images/nature/nwIMG_8209.jpg',
  },
  {
    id: 'n16',
    title: 'Natural Wonder',
    category: 'Nature',
    description: 'One of nature\'s many wonders',
    date: 'May 5, 2024',
    src: '/images/nature/nwIMG_8565.jpg',
  },
  {
    id: 'n17',
    title: 'Peaceful Scene',
    category: 'Nature',
    description: 'A moment of peace in nature',
    date: 'June 18, 2024',
    src: '/images/nature/nwIMG_8580.jpg',
  },
  {
    id: 'n18',
    title: 'Natural Harmony',
    category: 'Nature',
    description: 'Perfect harmony in the natural world',
    date: 'July 25, 2024',
    src: '/images/nature/nwIMG_8599.jpg',
  },
  {
    id: 'n19',
    title: 'Nature\'s Artistry',
    category: 'Nature',
    description: 'Nature\'s own artistic creation',
    date: 'August 12, 2024',
    src: '/images/nature/nwIMG_9092.jpg',
  },
  
  // Portraits category - Updated to use your local images
  {
    id: 'p1',
    title: 'Golden Hour Portrait',
    category: 'Portraits',
    description: 'Natural light portrait in golden hour lighting',
    date: 'May 20, 2023',
    src: '/images/portraits/pIMG_1102 (1).jpg',
  },
  {
    id: 'p2',
    title: 'Urban Character',
    category: 'Portraits',
    description: 'Expressive portrait against urban backdrop',
    date: 'June 14, 2023',
    src: '/images/portraits/pxIMG_0091 (1).jpg',
  },
  {
    id: 'p3',
    title: 'Studio Elegance',
    category: 'Portraits',
    description: 'Professional studio portrait with controlled lighting',
    date: 'July 3, 2023',
    src: '/images/portraits/pxIMG_0092 (1).jpg',
  },
  {
    id: 'p4',
    title: 'Candid Moment',
    category: 'Portraits',
    description: 'Natural candid expression captured in the moment',
    date: 'August 22, 2023',
    src: '/images/portraits/pxIMG_0441 (4).jpg',
  },
  {
    id: 'p5',
    title: 'Classic Portrait',
    category: 'Portraits',
    description: 'Timeless portrait with classic composition',
    date: 'September 10, 2023',
    src: '/images/portraits/pxIMG_9495 (2).jpg',
  },
  {
    id: 'p6',
    title: 'Natural Expression',
    category: 'Portraits',
    description: 'Authentic expression in natural lighting',
    date: 'October 5, 2023',
    src: '/images/portraits/pxIMG_9501 (1).jpg',
  },
  {
    id: 'p7',
    title: 'Artistic Portrait',
    category: 'Portraits',
    description: 'Creative artistic approach to portraiture',
    date: 'November 18, 2023',
    src: '/images/portraits/pxIMG_9504 (1).jpg',
  },
  {
    id: 'p8',
    title: 'Elegant Pose',
    category: 'Portraits',
    description: 'Elegant portrait with beautiful composition',
    date: 'December 12, 2023',
    src: '/images/portraits/pxIMG_9525 (1).jpg',
  },
  {
    id: 'p9',
    title: 'Dynamic Portrait',
    category: 'Portraits',
    description: 'Dynamic and engaging portrait style',
    date: 'January 8, 2024',
    src: '/images/portraits/pxIMG_9542x (2).jpg',
  },
  {
    id: 'p10',
    title: 'Professional Shot',
    category: 'Portraits',
    description: 'Professional portrait with excellent lighting',
    date: 'February 20, 2024',
    src: '/images/portraits/pxIMG_9555x (1).jpg',
  },
  {
    id: 'p11',
    title: 'Character Study',
    category: 'Portraits',
    description: 'In-depth character portrait study',
    date: 'March 15, 2024',
    src: '/images/portraits/qIMG_8375 (1).jpg',
  },
  
  // Events category - Already updated to use your local images
  {
    id: 'e1',
    title: 'Wedding Celebration',
    category: 'Events',
    description: 'Joyful moment from wedding reception celebration',
    date: 'September 8, 2023',
    src: '/images/events/eIMG20241018182300 (1).jpg',
  },
  {
    id: 'e2',
    title: 'Corporate Gathering',
    category: 'Events',
    description: 'Professional networking event at downtown venue',
    date: 'October 15, 2023',
    src: '/images/events/eIMG_3253 (2).jpg',
  },
  {
    id: 'e3',
    title: 'Music Festival',
    category: 'Events',
    description: 'Live concert with dramatic stage lighting',
    date: 'November 22, 2023',
    src: '/images/events/eIMG_3360 (4).jpg',
  },
  {
    id: 'e4',
    title: 'Graduation Day',
    category: 'Events',
    description: 'University graduation ceremony with proud graduates',
    date: 'December 5, 2023',
    src: '/images/events/eIMG_8263x.jpg',
  },
  {
    id: 'e5',
    title: 'Special Event',
    category: 'Events',
    description: 'Memorable moments captured during special occasion',
    date: 'January 10, 2024',
    src: '/images/events/eIMG_8303x.jpg',
  },
  {
    id: 'e6',
    title: 'Community Gathering',
    category: 'Events',
    description: 'Local community event with great atmosphere',
    date: 'February 14, 2024',
    src: '/images/events/eIMG_8317x.jpg',
  },
  {
    id: 'e7',
    title: 'Cultural Festival',
    category: 'Events',
    description: 'Vibrant cultural celebration with traditional elements',
    date: 'March 20, 2024',
    src: '/images/events/eIMG_8386x.jpg',
  },
  {
    id: 'e8',
    title: 'Awards Ceremony',
    category: 'Events',
    description: 'Recognition ceremony celebrating achievements',
    date: 'April 12, 2024',
    src: '/images/events/eIMG_8432x.jpg',
  },
  {
    id: 'e9',
    title: 'Exhibition Opening',
    category: 'Events',
    description: 'Art exhibition opening with distinguished guests',
    date: 'May 8, 2024',
    src: '/images/events/exIMG_0708 (1).jpg',
  },
  {
    id: 'e10',
    title: 'Conference Day',
    category: 'Events',
    description: 'Professional conference with industry leaders',
    date: 'June 15, 2024',
    src: '/images/events/exIMG_0765 (2).jpg',
  },
  {
    id: 'e11',
    title: 'Charity Gala',
    category: 'Events',
    description: 'Elegant charity fundraising event',
    date: 'July 22, 2024',
    src: '/images/events/exIMG_3992.jpg',
  },
  {
    id: 'e12',
    title: 'Product Launch',
    category: 'Events',
    description: 'Exciting product launch presentation',
    date: 'August 30, 2024',
    src: '/images/events/exIMG_4149 (1).jpg',
  },
  {
    id: 'e13',
    title: 'Team Building',
    category: 'Events',
    description: 'Corporate team building activities',
    date: 'September 18, 2024',
    src: '/images/events/exIMG_4178.jpg',
  },
  {
    id: 'e14',
    title: 'Holiday Celebration',
    category: 'Events',
    description: 'Festive holiday gathering with decorations',
    date: 'October 25, 2024',
    src: '/images/events/exIMG_4253.jpg',
  },
  {
    id: 'e15',
    title: 'Anniversary Event',
    category: 'Events',
    description: 'Milestone anniversary celebration',
    date: 'November 12, 2024',
    src: '/images/events/exIMG_4306.jpg',
  },
  
  // Random category - Updated to use your local images
  {
    id: 'r1',
    title: 'Creative Workspace',
    category: 'Random',
    description: 'Modern laptop setup with creative workspace vibes',
    date: 'January 10, 2024',
    src: '/images/random/rIMG20240804122125 (1).jpg',
  },
  {
    id: 'r2',
    title: 'Tech Minimalism',
    category: 'Random',
    description: 'Clean and minimal laptop on white background',
    date: 'February 5, 2024',
    src: '/images/random/rIMG20240925195115.jpg',
  },
  {
    id: 'r3',
    title: 'Digital Circuits',
    category: 'Random',
    description: 'Macro photography of intricate circuit board patterns',
    date: 'March 18, 2024',
    src: '/images/random/rIMG20240929122927 (1).jpg',
  },
  {
    id: 'r4',
    title: 'Code & Coffee',
    category: 'Random',
    description: 'Programming session with Java code on monitor',
    date: 'April 25, 2024',
    src: '/images/random/rIMG20240929131858 (1).jpg',
  },
  {
    id: 'r5',
    title: 'Abstract Art',
    category: 'Random',
    description: 'Artistic abstract composition',
    date: 'May 12, 2024',
    src: '/images/random/rIMG20241001160053 (1).jpg',
  },
  {
    id: 'r6',
    title: 'Urban Details',
    category: 'Random',
    description: 'Interesting urban architectural details',
    date: 'June 8, 2024',
    src: '/images/random/rIMG20241002154315 (1).jpg',
  },
  {
    id: 'r7',
    title: 'Street Photography',
    category: 'Random',
    description: 'Candid street photography moment',
    date: 'July 20, 2024',
    src: '/images/random/rIMG_1525 (1).jpg',
  },
  {
    id: 'r8',
    title: 'Modern Life',
    category: 'Random',
    description: 'Capturing moments of modern life',
    date: 'August 15, 2024',
    src: '/images/random/rIMG_20250415_130119283 (1).jpg',
  },
  {
    id: 'r9',
    title: 'Still Life',
    category: 'Random',
    description: 'Beautiful still life composition',
    date: 'September 22, 2024',
    src: '/images/random/rIMG_2170 (1).jpg',
  },
  {
    id: 'r10',
    title: 'Artistic Expression',
    category: 'Random',
    description: 'Creative artistic expression through photography',
    date: 'October 18, 2024',
    src: '/images/random/rIMG_8055 (2).jpg',
  },
  {
    id: 'r11',
    title: 'Contemporary Art',
    category: 'Random',
    description: 'Contemporary artistic photography',
    date: 'November 5, 2024',
    src: '/images/random/rwIMG_8495.jpg',
  },
  {
    id: 'r12',
    title: 'Visual Story',
    category: 'Random',
    description: 'Photography that tells a visual story',
    date: 'December 2, 2024',
    src: '/images/random/rwIMG_8506.jpg',
  },
  {
    id: 'r13',
    title: 'Creative Vision',
    category: 'Random',
    description: 'Unique creative vision captured in photo',
    date: 'December 15, 2024',
    src: '/images/random/rwIMG_9644.jpg',
  },
  {
    id: 'r14',
    title: 'Artistic Moment',
    category: 'Random',
    description: 'Perfect artistic moment frozen in time',
    date: 'January 8, 2025',
    src: '/images/random/rwIMG_9652.jpg',
  },
  {
    id: 'r15',
    title: 'Creative Composition',
    category: 'Random',
    description: 'Thoughtful creative composition',
    date: 'January 20, 2025',
    src: '/images/random/rwIMG_9929.jpg',
  },
  {
    id: 'r16',
    title: 'Modern Perspective',
    category: 'Random',
    description: 'Modern perspective on everyday subjects',
    date: 'February 5, 2025',
    src: '/images/random/rxIMG_3498 (1).jpg',
  },
  {
    id: 'r17',
    title: 'Experimental Shot',
    category: 'Random',
    description: 'Experimental photography technique',
    date: 'February 18, 2025',
    src: '/images/random/rxIMG_3523 (1).jpg',
  },
  {
    id: 'r18',
    title: 'Unique Angle',
    category: 'Random',
    description: 'Photography from a unique angle',
    date: 'March 8, 2025',
    src: '/images/random/rxIMG_3586.jpg',
  },
  {
    id: 'r19',
    title: 'Creative Light',
    category: 'Random',
    description: 'Creative use of light in photography',
    date: 'March 22, 2025',
    src: '/images/random/rxIMG_3681 (1).jpg',
  },
  {
    id: 'r20',
    title: 'Artistic Detail',
    category: 'Random',
    description: 'Focus on artistic details',
    date: 'April 5, 2025',
    src: '/images/random/rxIMG_3686.jpg',
  },
  {
    id: 'r21',
    title: 'Visual Poetry',
    category: 'Random',
    description: 'Photography as visual poetry',
    date: 'April 18, 2025',
    src: '/images/random/rxIMG_3691.jpg',
  },
  {
    id: 'r22',
    title: 'Contemporary View',
    category: 'Random',
    description: 'Contemporary view of modern subjects',
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
