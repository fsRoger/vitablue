import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-[#f5f5f5] grid grid-cols-1 place-items-center md:pb-20 pt-4" >
      <div className="relative mt-[-50px] md:mt-[-60px] xl:mt-[-110px]">
        {/* Imagem com Tailwind */}
        <div className="relative w-full h-96 md:h-auto md:w-auto">
          <Image
            src="/images/website/banner.png"
            width={1920}
            height={1080}
            alt="hero"
            objectFit="cover" // Mantém proporção da imagem
            className="rounded-lg"
          />
        </div>

        {/* Conteúdo sobre a imagem */}
        <div className="absolute top-[50%] left-[20px] sm:left-[40px] md:left-[80px] xl:left-[120px] transform -translate-y-1/2 text-white text-left   max-w-screen-md mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-6xl xl:text-8xl  font-bold mb-4">Show de<br/>Prêmios</h1>
          {/* <h5 className="text-md md:text-2xl font-semibold mb-2">Nome da empresa</h5> */}
          <p className="text-xs md:text-base pb-[8rem] sm:pb-0">Venda, jogue, participe <br/>e ganhe pontos 
            para trocar<br/> por inúmeros prêmios<br/> e descontos!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
