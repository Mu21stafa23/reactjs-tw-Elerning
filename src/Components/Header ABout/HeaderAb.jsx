import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Academic Programs', to: '#programs' },
  { name: 'Contact', to: '/Contact' },
  { name: 'Research Opportunities', to: '#research' },
  { name: 'About Us', to: '/About' },
];

export default function HeaderAb() {
  return (
    <div className="bg-gray-900 relative isolate overflow-hidden py-24 sm:py-6 text-center flex items-center justify-center min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-blue-500 sm:text-7xl uppercase">
          About Our University
        </h2>
        <p className="mt-8 text-blue-100 text-lg font-medium sm:text-xl">
          We are committed to excellence in education, research, and community engagement.
        </p>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-blue-100 sm:grid-cols-2 md:flex lg:gap-x-10 justify-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-center text-blue-100 hover:text-blue-900 transition-colors duration-300"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
  