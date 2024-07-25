import React from 'react';

const SubHero = () => {
  return (
    <div className=" bg-[#f5f5f5] flex items-center justify-center sm:py-[100px]">
       <img
          src="./images/website/incentivecoin.png"
          alt="moeda"
          className="w-12 h-12 relative top-10 left-5"
        />
        <img
          src="./images/website/incentivecoin.png"
          alt="moeda"
          className="w-9 h-9 relative right-10 bottom-5"
        />
      <div className="text-center text-[#00254f]">
      <p className="text-md md:text-base">Inscreva-se e ganhe</p>
        <p className="text-6xl md:text-7xl xl:text-9xl  font-extrabold">2000</p>
        <p className="text-sm md:text-base font-bold">pontos</p>
        <p className="text-sm md:text-base">Agora mesmo!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-4">
          Quero me inscrever!
        </button>
      </div>
       
        <img
          src="./images/website/incentivecoin.png"
          alt="moeda"
          className="w-14 h-14 relative bottom-20 left-5"
        />
        <img
          src="./images/website/incentivecoin.png"
          alt="moeda"
          className="w-8 h-8 relative "
        />
   
    </div>
  );
};

export default SubHero;
