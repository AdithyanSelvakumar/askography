
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhotoGrid, { Photo } from '@/components/PhotoGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample photo data
const photos: Photo[] = [
  // Nature category
  {
    id: 'n1',
    title: 'Mountain Vista',
    category: 'Nature',
    description: 'Scenic mountain range at sunrise with dramatic clouds',
    date: 'January 15, 2023',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n2',
    title: 'Forest Path',
    category: 'Nature',
    description: 'Sunlight filtering through dense forest canopy',
    date: 'February 28, 2023',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n3',
    title: 'Coastal Dreams',
    category: 'Nature',
    description: 'Waves crashing against rocky shoreline at sunset',
    date: 'March 12, 2023',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'n4',
    title: 'Desert Solitude',
    category: 'Nature',
    description: 'Vast desert landscape with rippled sand dunes',
    date: 'April 5, 2023',
    src: 'https://images.unsplash.com/photo-1682685797366-715d29e33f9d?auto=format&fit=crop&w=1200&q=80',
  },
  
  // Portraits category
  {
    id: 'p1',
    title: 'Golden Hour Portrait',
    category: 'Portraits',
    description: 'Natural light portrait in golden hour lighting',
    date: 'May 20, 2023',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p2',
    title: 'Urban Character',
    category: 'Portraits',
    description: 'Expressive portrait against urban backdrop',
    date: 'June 14, 2023',
    src: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p3',
    title: 'Studio Elegance',
    category: 'Portraits',
    description: 'Professional studio portrait with controlled lighting',
    date: 'July 3, 2023',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p4',
    title: 'Candid Moment',
    category: 'Portraits',
    description: 'Natural candid expression captured in the moment',
    date: 'August 22, 2023',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
  },
  
  // Events category
  {
    id: 'e1',
    title: 'Wedding Celebration',
    category: 'Events',
    description: 'Joyful moment from wedding reception celebration',
    date: 'September 8, 2023',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'e2',
    title: 'Corporate Gathering',
    category: 'Events',
    description: 'Professional networking event at downtown venue',
    date: 'October 15, 2023',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'e3',
    title: 'Music Festival',
    category: 'Events',
    description: 'Live concert with dramatic stage lighting',
    date: 'November 22, 2023',
    src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'e4',
    title: 'Graduation Day',
    category: 'Events',
    description: 'University graduation ceremony with proud graduates',
    date: 'December 5, 2023',
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80',
  },
  
  // Random category
  {
    id: 'r1',
    title: 'Creative Workspace',
    category: 'Random',
    description: 'Modern laptop setup with creative workspace vibes',
    date: 'January 10, 2024',
    src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'r2',
    title: 'Tech Minimalism',
    category: 'Random',
    description: 'Clean and minimal laptop on white background',
    date: 'February 5, 2024',
    src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'r3',
    title: 'Digital Circuits',
    category: 'Random',
    description: 'Macro photography of intricate circuit board patterns',
    date: 'March 18, 2024',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'r4',
    title: 'Code & Coffee',
    category: 'Random',
    description: 'Programming session with Java code on monitor',
    date: 'April 25, 2024',
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  },
];

const Gallery: React.FC = () => {
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
          
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="nature">Nature</TabsTrigger>
                <TabsTrigger value="portraits">Portraits</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="random">Random</TabsTrigger>
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
