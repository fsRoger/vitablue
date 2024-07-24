import React from 'react';

const Treinamentos = () => {
  return (
    <div className='bg-gray-100 flex flex-col items-center text-[#00254f]'>
      <h1 className='text-5xl font-bold py-20'>Painel de treinamentos</h1>

      <div className='grid grid-cols-2 gap-8 px-20'>
        <div className='flex items-center'>
          <img src='./images/website/video.png' className='w-full' alt='Video 1' />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-2xl'>Treinamento de fidelização de clientes</h3>
          <h5>Duração: 08:41</h5>
          <span>Recompensa 500 Incentive Coins</span>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-8 px-20 mt-8'>
        <div className='flex items-center'>
          <img src='./images/website/video-2.png' className='w-full' alt='Video 2' />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-2xl'>Conheça a linha de produtos Vita Blue</h3>
          <h5>Duração: 08:41</h5>
          <span>Recompensa 500 Incentive Coins</span>
        </div>
      </div>
    </div>
  );
};

export default Treinamentos;
