import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Company',
      links: ['About', 'Contact', 'Lookbook'],
    },
    {
      title: 'Shop',
      links: ['Men', 'Women', 'Unisex', 'Accessories'],
    },
    {
      title: 'Support',
      links: ['Size Guide', 'Returns', 'FAQs'],
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">EDDJOS</h3>
            <p className="text-gray-400 text-sm mb-4">
              Redefining urban comfort with timeless, minimalist designs.
            </p>
            <p className="text-sm text-gray-400 mb-1">WhatsApp:</p>
            <a
              href="https://wa.me/254793832286"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              +254 793 832 286
            </a>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Eddjos Collections. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-400">Follow Us:</p>
            <a
              href="#"
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
