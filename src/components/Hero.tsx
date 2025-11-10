interface HeroProps {
  onShopClick: (category: string) => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          Redefining Urban Comfort.
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 font-light">
          Eddjos Collections — where simplicity meets statement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onShopClick('men')}
            className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Shop Men
          </button>
          <button
            onClick={() => onShopClick('women')}
            className="px-8 py-4 bg-white text-black font-medium border-2 border-black hover:bg-gray-50 transition-colors"
          >
            Shop Women
          </button>
        </div>
      </div>
    </section>
  );
}
