import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import empathy from "../assets/img/empatia.png";
import structure from "../assets/img/estructura.png";
import experiments from "../assets/img/experimentos.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Empatía",
    logoUrl: empathy,
    backgroundColor: "bg-blue-200",
    borderColor: "border-blue-200",
    items: [
      "🧐 Conocemos a tus clientes ",
      "😰 Entendemos que les preocupa ",
      "😁 Te decimos como hacerlos felices ",
    ],
  },
  {
    title: "Estructura",
    logoUrl: structure,
    backgroundColor: "bg-yellow-200",
    borderColor: "border-yellow-200",
    items: [
      "📊 ¿Cuántos clientes vamos a conquistar?",
      "💰 ¿Cómo vamos a ser rentables?",
    ],
  },
  {
    title: "Experimentos",
    logoUrl: experiments,
    backgroundColor: "bg-pink-200",
    borderColor: "border-pink-200",
    items: [
      "🤔 ¿Cuál es el mejor producto?",
      "📈 ¿Cuál es el mejor marketing?",
      "❓ NO SÉ.",
      "🚀 Descubrámoslo probando ",
    ],
  },
];

const StackedCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            end: "top+=200 center",
            scrub: true,
            onEnter: () => gsap.to(card, { opacity: 1, scale: 1 }),
            onLeaveBack: () => gsap.to(card, { opacity: 0, scale: 0.8 }),
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center flex-col space-y-8 p-6">
      <h2 className="text-3xl font-bold mb-8 bg-yellow-200 inline-block px-4 py-2 rounded-lg">
        Creemos que el valor se crea con:
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className={`w-full max-w-4xl p-6 rounded-lg shadow-lg flex flex-col ${project.backgroundColor} ${project.borderColor} border-2`}
        >
          <div className="flex items-center justify-center">
            <img
              src={project.logoUrl}
              alt={project.title}
              className="w-24 h-24 object-contain rounded-full border-2 border-gray-300 mr-4"
            />
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-left">
                {project.items.map((item, idx) => (
                  <p key={idx} className="text-lg">
                    {item}
                  </p>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
