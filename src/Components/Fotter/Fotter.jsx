import { useEffect, useState } from 'react';

const stats = [
  { id: 1, name: 'Academic', value: 'E-Learning' },
  { id: 2, name: 'About Us', value: 'Online University' },
  { id: 3, name: 'Contact Us', value: 'info@inf.edu.sd' },
  { id: 4, name: 'Locations', value: 'Khartoum, Sudan' },
];

const links = [
  { name: 'About Us', href: '#About' },
  { name: 'Contact', href: '#Contact' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
];

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Function to initialize the counter
  const initializeVisitorCounter = () => {
    // Check if the count already exists in localStorage
    const savedCount = localStorage.getItem('visitorCount');
    if (savedCount) {
      setVisitorCount(parseInt(savedCount, 10));
    } else {
      setVisitorCount(0);
    }
  };

  // Function to increment the visitor count
  const incrementVisitorCount = () => {
    setVisitorCount((prevCount) => {
      const newCount = prevCount + 1;
      // Store the updated count in localStorage
      localStorage.setItem('visitorCount', newCount);
      return newCount;
    });
  };

  // Initialize visitor counter on page load
  useEffect(() => {
    initializeVisitorCounter();
    incrementVisitorCount();
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats Section */}
        <div className="border-b border-gray-700 pb-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center gap-y-2">
                <dt className="text-lg font-medium text-gray-300">{stat.name}</dt>
                <dd className="text-sm font-light text-gray-400">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visitor Counter Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 uppercase font-bold">Visitor Count: {visitorCount}</p>
        </div>

        {/* Links Section */}
        <div className="mt-8 sm:mt-12">
          <nav aria-label="Footer Links" className="text-center">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
