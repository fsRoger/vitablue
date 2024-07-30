import { HiOutlineStar } from "react-icons/hi";

const skillsData = [
  {
    icon: "/images/website/star.png",
    id: 1,
    image: "/images/website/tecla.jpeg",
    description:
      "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 2,
    image: "/images/website/panel.jpeg",
    description:
      "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 3,
    image: "/images/website/air.jpeg",
    description:
      "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 4,
    image: "/images/website/guarda.jpeg",
    description:
      "A PARTIR DE R$ 9, 90* no 1º mês, depois R$ 139, 90/mês 12 meses de fidelidade",
    price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 5,
    image: "/images/website/camisa.jpeg",
    description:
      "A PARTIR DE R$ 9,90* no 1º mês, depois R$ 139,90/mês 12 meses de fidelidade",
    price: "R$ 200,00",
  },
  {
    icon: "/images/website/star.png",
    id: 6,
    image: "/images/website/ventilado.jpeg",
    description: "A PARTIR DE R$ 9,90* no 1º mês, depois R$ 139,90/mês 12 meses de fidelidade",
    price: "R$ 200,00",
  },
];

const Skills = () => {
  return (
    <>
      <span id="about"></span>

      <div className="bg-[#f5f5f5] pt-20 md:px-20">
        <h1 className=" text-[#00254f] text-xl sm:text-3xl md:text-5xl  font-extrabold text-center">
          Prêmios em destaque
        </h1>
        <div className="px-20">
          <div className="py-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="relative overflow-hidden rounded-md shadow-md bg-white"
              >
                <div className="flex justify-center items-center h-52">
                  <img
                    src={skill.image}
                    alt="Imagem do prêmio"
                    className="w-full h-[160px] md:h-[220px] object-fill"
                  />
                  <div className="absolute top-5 left-5 w-5 h-5">
                    <img src={skill.icon} alt="Ícone de estrela" />
                  </div>
                </div>
                <div className="p-4">
                  
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
          <div className="w-full flex justify-center pb-20">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-3xl mt-4">
              Ver mais
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
