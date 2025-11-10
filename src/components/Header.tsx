import { Search, Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onCategoryChange: (category: string) => void;
  currentCategory: string;
}

export default function Header({ onCategoryChange, currentCategory }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Home', value: 'all' },
    { name: 'Shop', value: 'all' },
    { name: 'Men', value: 'men' },
    { name: 'Women', value: 'women' },
    { name: 'Unisex', value: 'unisex' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex-1 flex justify-center md:justify-start">
            <h1
              onClick={() => onCategoryChange('all')}
              className="text-2xl font-bold tracking-tight cursor-pointer hover:opacity-70 transition-opacity"
            >
              EDDJOS
            </h1>
          </div>

          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`text-sm font-medium transition-colors ${
                  currentCategory === cat.value
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  onCategoryChange(cat.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentCategory === cat.value
                    ? 'bg-gray-50 font-medium'
                    : 'text-gray-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
