
import { library, mail, phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <library className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Learning Institute</h3>
                <p className="text-gray-400 text-sm">& Library</p>
              </div>
            </div>
            <p className="text-gray-400">
              Empowering minds through knowledge and learning. 
              Your trusted partner in education and personal growth.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">dnissh419@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">+91 9917715406</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="h-4 w-4 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Islamnagar, Saharanpur, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Learning Institute and Library. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
