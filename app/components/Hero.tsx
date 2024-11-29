import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap items-center justify-center py-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
  

      {/* Red Div */}
      <div className="w-full md:w-full lg:w-1/3 h-40 bg-gray-600 flex items-center justify-center text-white text-3xl font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
  Hi
</div>


      {/* Green and Yellow Div */}
      <div className="w-1/2 md:w-1/2 h-40 bg-gray-700 lg:w-1/3 flex items-center justify-center text-white text-3xl font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">I am</div>
      <div className="w-1/2 md:w-1/2 h-40 bg-gray-800 lg:w-1/3 flex items-center justify-center text-white text-3xl font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">Saman Siddiqui</div>
    </div>
  );
};

export default Hero;
