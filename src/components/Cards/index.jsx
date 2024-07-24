import { HiOutlineStar } from "react-icons/hi";

const skillsData = [
  {
    icon: "/images/website/star.png",
    id: 1,
    image: "/images/website/teclado.png",
    description:
      "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
      price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 2,
    image: "/images/website/panela.png",
    description:
      "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
      price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 3,
    image: "/images/website/air-fryer-2.png",
    description:
      "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
      price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 4,
    image: "/images/plano-box.jpg",
    description:
      "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
      price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 5,
    image: "/images/plano-yoga.jpg",
    description:
      "A PARTIR DE R$ 9,90* no 1º mês, depois R$ 139,90/mês 12 meses de fidelidade",
      price: "R$ 200,00",
      
  },
  {
    icon: "/images/website/star.png",
    id: 6,
    image: "/images/website/ventilador.png",
    description: "Ventilador",
    price: "R$ 200,00",
  },
];

const Skills = () => {
  return (
    <>
      <span id="about"></span>

      <div className="pt-20">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold text-center">
          Prêmios em destaque
        </h1>
        <div className="px-20">
          <div className="py-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="relative overflow-hidden rounded-md shadow-md bg-white"
              >
                <div className="flex pt-10 pl-15 relative h-52 itens-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-50 h-40 object-cover"
                  />
                  <div className="absolute top-5 left-5 w-5 h-5">
                    <img src={skill.icon}/>
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-lg font-bold mb-2">{skill.name}</h1>
                  <p className="text-sm text-gray-600 mb-4">
                    {skill.description}
                  </p>
                  {skill.price && (
                    <button className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                      {skill.price}
                    </button>
                  )}
                </div>
                
              </div>
            ))}
          
          </div>
          <div className="w-full flex justify-center">
            <button className=" w-20 bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded">Ver mais</button>
            </div>
          
        </div>
        
      </div>
      
    </>
  );
};

export default Skills;
