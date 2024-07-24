import Image from 'next/image';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 place-items-center">
      <div className="relative">
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
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-white text-left md:left-8 md:text-center max-w-screen-md mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Show de <br></br>Prêmios</h1>
          <h5 className="text-lg md:text-2xl font-semibold mb-2">Nome da empresa</h5>
          <h5 className="text-sm md:text-base">Venda, jogue, participe e ganhe pontos <br/>
            para trocar por inúmeros prêmios e descontos!</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
