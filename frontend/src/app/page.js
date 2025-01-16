'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [scaleClass, setScaleClass] = useState('scale-100');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) setScaleClass('scale-50'); // 50% of the screen
      else if (width <= 700) setScaleClass('scale-75'); // 75% of the screen
      else if (width <= 767) setScaleClass('scale-80'); // 80% of the screen
      else if (width >= 992 && width <= 1600) setScaleClass('scale-90'); // 90% of the screen
      else setScaleClass('scale-100'); // Full screen
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <div className={`min-h-screen flex flex-col ${scaleClass}`}>
      {/* Fixed Navbar */}

      <nav className="fixed w-full top-0 left-0 right-0 bg-blue-600 text-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-blue-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              <span className="ml-4 text-xl font-bold">Assignment Task</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded">Home</a>
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded">About</a>
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}

      {/* The content in the Left Menu, Main Content, and Right Panel is purely for illustrative purposes 
      to fill the respective areas and is not interconnected. */}

      <div className="flex flex-1 pt-16">
        {/* Left Menu */}
        <aside className={`${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transform fixed lg:relative lg:translate-x-0 z-40 w-64 h-[calc(100vh-4rem)] bg-gray-50 border-r transition-transform duration-300 ease-in-out overflow-y-auto`}>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-black">Menu</h2>
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100 text-black">Dashboard</a>
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100 text-black">Analytics</a>
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100 text-black">Reports</a>
              <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100 text-black">Settings</a>
            </nav>
          </div>
        </aside>


        {/* Main Content */}

        <main className="flex-1 min-w-0">
          <div className="container mx-auto p-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold mb-4 text-center md:text-left text-gray-500">Welcome to the Dashboard</h1>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                This is the main content area of the application.
                The layout is fully responsive and includes all requested features:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 text-sm sm:text-base">
                <li>Fixed navbar that stays at the top</li>
                <li>Collapsible left menu</li>
                <li>Main content area</li>
                <li>Right-side panel</li>
                <li>Responsive scaling based on screen width</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-center sm:text-left text-blue-500">Card {item}</h3>
                    <p className="text-gray-600 text-sm">
                      This is a sample card that demonstrates the grid layout system.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>


        {/* Right Panel */}

        <aside className="hidden xl:block w-64 bg-gray-50 border-l p-4">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2 text-center sm:text-left text-gray-700 text-[20px]">Statistics</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-lg text-gray-600">Visitors</span>
                  <span className="block text-[17px] font-semibold text-gray-700">1,234</span>
                </div>
                <div>
                  <span className="text-lg text-gray-600">Revenue</span>
                  <span className="block text-[17px] font-semibold text-gray-700">$5,678</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2 text-center sm:text-left text-gray-500">Recent Activity</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className='text-gray-500'>New user registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className='text-gray-500'>Report generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className='text-gray-500'>System update</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>


      {/* Footer */}
      
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm sm:text-base">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">
                A brief description of your company or website goes here.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.09.637-1.342-2.22-.253-4.555-1.113-4.555-4.95 0-1.093.39-1.987 1.03-2.688-.103-.254-.447-1.276.098-2.656 0 0 .84-.27 2.75 1.026A9.575 9.575 0 0112 6.803a9.588 9.588 0 012.504.338c1.91-1.296 2.75-1.027 2.75-1.027.546 1.38.202 2.402.1 2.656.642.7 1.03 1.595 1.03 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.418-.012 2.746 0 .268.181.579.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

