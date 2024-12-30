import React from 'react';
import { Link } from 'react-router-dom';

export default function Fet() {
  return (
    <>
      <hr />
      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-24 sm:py-32">
        {/* Optional Pattern Overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl tracking-tight text-blue-900 sm:text-5xl lg:text-balance uppercase font-bold">
              Registration Your Set
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
            <Link to={"/Login"}>
            <button className="px-8 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-900 transition duration-300 text-sm uppercase">
              Be with us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
