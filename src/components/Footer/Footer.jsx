import React from 'react';

const Footer = () => {
  return (
    <div className='relative flex flex-col items-center bg-[#f2f2f2]'>
      <img src='./images/website/footer.png' width={'80%'} height={'80%'} className='w-full h-auto'/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl absolute bottom-[49rem]'>Enviar</button>
    </div>
  );
}

export default Footer;
