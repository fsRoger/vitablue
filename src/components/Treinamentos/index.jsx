import React from 'react';

const Treinamentos = () => {
  return (
    <div className='bg-gray-100 flex flex-col items-center text-[#00254f]'>
      <h1 className='text-xl sm:text-3xl md:text-5xl font-extrabold py-20'>Painel de treinamentos</h1>

      <div className='grid grid-cols-2 gap-8 px-10 md:px-20'>
        <div className='flex items-center'>
          <img src='./images/website/video.png' className='w-full' alt='Video 1' />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-sm md:text-2xl font-semibold'>Treinamento de fidelização de clientes</h3>
          <h5 className='text-xs sm:text-sm md:text-xl'>Duração: 08:41</h5>
          <span className='text-xs sm:text-sm md:text-xl'>Recompensa <b>500</b> Incentive Coins</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  w-20 rounded-3xl mt-2">
          Assistir
        </button>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-8 px-10 md:px-20 mt-8'>
        <div className='flex items-center'>
          <img src='./images/website/video-2.png' className='w-full' alt='Video 2' />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-sm md:text-2xl font-semibold'>Conheça a linha de produtos Vita Blue</h3>
          <h5 className='text-xs sm:text-sm md:text-xl'>Duração: 08:41</h5>
          <span className='text-xs sm:text-sm md:text-xl'>Recompensa <b>700</b> Incentive Coins</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20  rounded-3xl mt-2">
          Assistir
        </button>
        </div>
      </div>
    </div>
  );
};

export default Treinamentos;
