
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhotoGrid from '@/components/PhotoGrid';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { photos } from '@/data/photos';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Handle hash-based navigation to specific tabs
    const hash = window.location.hash.replace('#', '');
    if (hash && ['nature', 'portraits', 'events', 'random'].includes(hash)) {
      setActiveTab(hash);
    }
    
    console.log('Gallery loaded with', photos.length, 'photos');
    console.log('Photo categories:', [...new Set(photos.map(p => p.category))]);
  }, []);

  // Filter photos by category
  const naturePhotos = photos.filter(photo => photo.category === 'Nature');
  const portraitPhotos = photos.filter(photo => photo.category === 'Portraits');
  const eventPhotos = photos.filter(photo => photo.category === 'Events');
  const randomPhotos = photos.filter(photo => photo.category === 'Random');
  
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default Gallery;
