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

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
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
    <div ref={containerRef} className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 bg-yellow-200 inline-block px-4 py-2 rounded-lg">
        ¿Cómo lo hacemos?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ValueCard key={index} className="value-card" {...project} />
        ))}
      </div>
    </div>
  );
};

export default ValuesContainer;
