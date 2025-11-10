interface FeaturedCollectionsProps {
  onCollectionClick: (category: string) => void;
}

export default function FeaturedCollections({ onCollectionClick }: FeaturedCollectionsProps) {
  const collections = [
    {
      title: 'Urban Classics',
      category: 'men',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Minimal Streetwear',
      category: 'unisex',
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Lounge Comfort Line',
      category: 'women',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Layered Fits',
      category: 'all',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection, index) => (
          <div
            key={index}
            onClick={() => onCollectionClick(collection.category)}
            className="group relative h-80 overflow-hidden cursor-pointer rounded-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${collection.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">{collection.title}</h3>
              <button className="px-6 py-2 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
