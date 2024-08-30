import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ValueCard from "./ValueCard";
import empathy from "../assets/img/empatia.png";
import structure from "../assets/img/estructura.png";
import experiments from "../assets/img/experimentos.png";

gsap.registerPlugin(ScrollTrigger);

const ValuesContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".value-card");

    gsap.set(cards, { opacity: 0, scale: 0.8 }); // Comenzar con las tarjetas pequeñas y transparentes

    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        y: index * -40, // Apilar las tarjetas una sobre otra
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${index * 200} top`,
          end: "+=200",
          scrub: true,
        },
      });
    });
  }, []);

  const projects = [
    {
      title: "Empatía",
      logoUrl: empathy,
      backgroundColor: "bg-blue-200",
      borderColor: "border-blue-200",
      items: [
        "Conocemos a tus clientes 🧐",
        "Entendemos que les preocupa 😰",
        "Te decimos como hacerlos felices 😁",
      ],
    },
    {
      title: "Estructura",
      logoUrl: structure,
      backgroundColor: "bg-yellow-200",
      borderColor: "border-yellow-200",
      items: [
        "¿Cuántos clientes vamos a conquistar?",
        "¿Cómo vamos a ser rentables?",
      ],
    },
    {
      title: "Experimentos",
      logoUrl: experiments,
      backgroundColor: "bg-pink-200",
      borderColor: "border-pink-200",
      items: [
        "¿Cuál es el mejor producto?",
        "¿Cuál es el mejor marketing?",
        "NO SÉ.",
        "Descubrámoslo probando 🚀",
      ],
    },
  ];

  return (
    <div ref={containerRef} className="w-full mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 bg-yellow-200 inline-block px-4 py-2 rounded-lg">
        Creemos que el valor se crea con:
      </h2>
      <div className="">
      {projects.map((project, index) => (
        <ValueCard
          key={index}
          index={index}
          {...project}
        />
      ))}
    </div>
    </div>
  );
};

export default ValuesContainer;

