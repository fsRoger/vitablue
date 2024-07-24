import React from 'react';

const SubHero = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center text-[#00254f]">
      <p className="text-md md:text-base">Inscreva-se e ganhe</p>
        <p className="text-6xl md:text-7xl xl:text-9xl  font-bold">2000</p>
        <p className="text-sm md:text-base">pontos</p>
        <p className="text-sm md:text-base">Agora mesmo!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-4">
          Quero me inscrever!
        </button>
      </div>
      <div className="relative ml-8">
        <img
          src="./images/website/incentivecoin.png"
          alt="moeda"
          className="w-20 h-20 relative "
        />
        <img
          src="./images/website/incentivecoin.png"
          alt="moeda"
          className="w-12 h-12 relative bottom-[-90px] right-[-60px]"
        />
        <img
          src="./images/website/incentivecoin.png"
          alt="moeda"
          className="w-16 h-16 relative bottom-10 right-[460px]"
        />
        <img
          src="./images/website/incentivecoin.png"
          alt="moeda"
          className="w-24 h-24 relative top-0 left-[-500px]"
        />
      </div>
    </div>
  );
};

export default SubHero;
