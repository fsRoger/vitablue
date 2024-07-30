import React from 'react';

const Footer = () => {
  return (
    <div className='relative flex flex-col items-center bg-[#f2f2f2]'>
      <img src='./images/website/footer.png' className='w-full h-auto'/>
      <div className='relative w-full flex justify-center'>
        <button className='text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 px-4 rounded-3xl absolute bottom-[220px] sm:bottom-[24rem] md:bottom-[30rem] lg:bottom-[40rem] xl:bottom-[49rem]'>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Footer;
