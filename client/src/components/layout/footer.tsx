import { Leaf } from "lucide-react";
import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container px-4 max-w-[var(--page-container-max-w)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
              <Leaf className="mr-2 h-5 w-5" /> Mooropan
            </h3>
            <p className="mb-4 text-gray-300 max-w-lg">
              Premium cattle feed solutions based on science, not tradition. Improving animal health and farm profitability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">MastiSense<sup>TM</sup></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SiloRopan<sup>TM</sup></a></li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Feeding Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nutritional Information</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div> */}
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-center text-sm text-gray-300">
          <p className="mb-2">© {new Date().getFullYear()} Mooropan, Inc. All rights reserved.</p>
          {/* <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
