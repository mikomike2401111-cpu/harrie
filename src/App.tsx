import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import ProductGrid from './components/ProductGrid';
import BrandStory from './components/BrandStory';
import WhatsAppCTA from './components/WhatsAppCTA';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

function App() {
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [showHero, setShowHero] = useState(true);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setShowHero(category === 'all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
      />

      {showHero && (
        <>
          <Hero onShopClick={handleCategoryChange} />
          <FeaturedCollections onCollectionClick={handleCategoryChange} />
          <BrandStory />
        </>
      )}

      <ProductGrid category={currentCategory} />

      {showHero && (
        <>
          <WhatsAppCTA />
          <Newsletter />
        </>
      )}

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default App;
