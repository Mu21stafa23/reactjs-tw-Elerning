import React from 'react';
import Heroimg from '../../assets/Hero.png';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-1 pb-6"> 
      <div className="container pb-8 sm:pb-0">
        
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img src={Heroimg} alt="Hero" className="w-screen max-w-screen-lg" />
          <hr />
          
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
