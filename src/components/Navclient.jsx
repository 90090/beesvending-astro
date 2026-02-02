import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavClient({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVendingDropdownOpen, setIsVendingDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleVendingDropdown = () => {
    setIsVendingDropdownOpen(!isVendingDropdownOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-40 h-40 rounded-lg flex items-center justify-center">
                <a href="/">
                  <img className="font-bold text-sm" alt="Bee's Vending Logo" src="/logo.webp" />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="/" className="text-lg text-black hover:text-red-600 px-3 py-2 font-medium transition-colors">
                Home
              </a>

              <a href="/about" className="text-lg text-black hover:text-red-600 px-3 py-2 font-medium transition-colors">
                About
              </a>

            {/* Vending Dropdown - Fixed Hover */}
            <div className="relative group">
            {/* Trigger Button */}
            <a 
                href="/vending#beverages" className="text-lg text-black hover:text-red-600 px-3 py-2 font-medium transition-colors flex items-center"
            >
                Vending
                <ChevronDown className="ml-1 h-5 w-5 transition-transform duration-200 group-hover:rotate-180" />
            </a>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 
                        opacity-0 translate-y-1 pointer-events-none transition-all duration-200 
                        group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
              <div className="py-1">
                <a
                    href="/vending#beverages"
                    className="block px-4 py-2 text-md text-black hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                    Beverages
                </a>
                <a
                    href="/vending#snacks"
                    className="block px-4 py-2 text-md text-black hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                    Snacks
                </a>
                <a
                    href="/vending#food"
                    className="block px-4 py-2 text-md text-black hover:bg-gray-50 hover:text-red-600 transition-colors"
                >
                    Food
                </a>
              </div>
            </div>
          </div>
              <a href="/micromarket" className="text-lg text-black hover:text-red-600 px-3 py-2 font-medium transition-colors">
                Micromarkets
              </a>
            </div>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-lg font-medium transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-white rounded-md transition-colors">
              Home
            </a>

            <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-white rounded-md transition-colors">
              About
            </a>

            {/* Mobile Vending Menu */}
            <div className="space-y-1">
              <button 
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-white rounded-md transition-colors flex items-center justify-between"
                onClick={toggleVendingDropdown}
              >
                Vending
                <ChevronDown className={`h-4 w-4 transform transition-transform ${
                  isVendingDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`transition-all duration-200 ${
                isVendingDropdownOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <a href="/vending#beverages" className="block px-6 py-2 text-sm text-black hover:text-red-600 hover:bg-white rounded-md ml-3 transition-colors">
                  Beverages
                </a>
                <a href="/vending#snacks" className="block px-6 py-2 text-sm text-black hover:text-red-600 hover:bg-white rounded-md ml-3 transition-colors">
                  Snacks
                </a>
                <a href="/vending#food" className="block px-6 py-2 text-sm text-black hover:text-red-600 hover:bg-white rounded-md ml-3 transition-colors">
                  Food
                </a>
              </div>
            </div>

            <a href="/micromarket" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-white rounded-md transition-colors">
              Micromarkets
            </a>

            <div className="flex justify-center mt-4">
                <a
                    href="/contact"
                    className="w-full text-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-md font-medium transition-colors"
                >
                    Contact Us
                </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};