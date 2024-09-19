
import React from 'react';

const AboutPage = () => {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen  ">
      <div>

      <h1 className="text-2xl font-semibold dark:bg-slate-600">This is the About page</h1>
      </div>
      
      <div>
      <a href="/">
      <button className='bg-pink-600 rounded-lg p-2 mt-5 '>goBack</button>
      </a>
      </div>
    
    </div>
  );
};

export default AboutPage;
