import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dulas from "../assets/img/dulas.png";
import gg from "../assets/img/gg.png";
import hkp from "../assets/img/hkp.png";
import sanea from "../assets/img/sanea.png";
import unicorn from "../assets/img/unicorn.png";
import whisper from "../assets/img/whisper.png";

const ExplosionAnimation = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  const imageUrls = [dulas, gg, hkp, sanea, unicorn, whisper];

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const items = itemRefs.current;
    const numItems = items.length;

    const generatePositions = () => {
      const positions = [];
      const itemSize = 48;
      const minDistance = itemSize * 1.5;

      for (let i = 0; i < numItems; i++) {
        let newPos;
        do {
          const angle = Math.random() * Math.PI * 2;
          const radius = gsap.utils.random(250, 400);
          newPos = {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
          };
        } while (
          positions.some(
            (pos) =>
              Math.sqrt(
                Math.pow(pos.x - newPos.x, 2) + Math.pow(pos.y - newPos.y, 2)
              ) < minDistance
          )
        );
        positions.push(newPos);
      }
      return positions;
    };

    const finalPositions = generatePositions();

    gsap.set([title, subtitle, button], { opacity: 0, scale: 0 });
    gsap.set(items, { scale: 0.5, opacity: 0, x: 0, y: 0 });

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animación del título y subtítulo
    tl.to(title, { opacity: 1, scale: 1 })
      .to(subtitle, { opacity: 1, scale: 1 }, "-=0.5")
      .to(button, { opacity: 1, scale: 1 }, "-=0.5");

    // Aparición de las imágenes alrededor del título
    tl.to(
      items,
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        x: () => gsap.utils.random(-30, 30),
        y: () => gsap.utils.random(-30, 30),
      },
      "-=0.5"
    );

    tl.add("preExplosion", "+=0.5");

    tl.to(
      items,
      {
        duration: 1.5,
        scale: () => gsap.utils.random(0.8, 1.2),
        x: (index) => finalPositions[index].x,
        y: (index) => finalPositions[index].y,
        rotation: () => gsap.utils.random(-350, 30),
        ease: "power2.out",
        stagger: {
          from: "center",
          amount: 0.5,
        },
      },
      "preExplosion"
    );

    // Organizar en una fila centrada
    const rowWidth = numItems * 120;
    const startX = -(rowWidth / 2 - 60);

    tl.to(
      items,
      {
        duration: 1,
        x: (index) => startX + index * 120,
        y: 250,
        scale: 1,
        rotation: 0,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      "+=0.5"
    );

    // Iniciar el scroll infinito con efecto de desvanecimiento
    tl.to(items, {
      x: `+=${120 * numItems}`, // Mueve los elementos hacia la derecha
      repeat: -1,
      duration: 20,
      ease: "linear",
      modifiers: {
        x: gsap.utils.unitize(
          (x) => (parseFloat(x) % (120 * numItems)) - rowWidth / 2
        ),
      },
      onUpdate: () => {
        items.forEach((item, i) => {
          const xPosition = parseFloat(gsap.getProperty(item, "x"));
          const distanceFromCenter = Math.abs(xPosition);
          const fadeDistance = 200; // Distancia en la que comienza a desvanecerse
          if (distanceFromCenter > rowWidth / 2 - fadeDistance) {
            const opacity = gsap.utils.mapRange(
              rowWidth / 2 - fadeDistance,
              rowWidth / 2,
              1,
              0,
              distanceFromCenter
            );
            gsap.set(item, { opacity });
          } else {
            gsap.set(item, { opacity: 1 });
          }
        });
      },
    });

    return () => tl.kill();
  }, []);

  const textRef = useRef(null);

  useEffect(() => {
    const words = ["Startups", "PyMES", "Empresas"];
    let wordIndex = 0;

    const changeWord = () => {
      wordIndex = (wordIndex + 1) % words.length;

      gsap.to(textRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          textRef.current.innerText = words[wordIndex];
          gsap.to(textRef.current, { y: 30, opacity: 0, duration: 0 });
          gsap.to(textRef.current, { y: 0, opacity: 1, duration: 0.5 });
        },
      });
    };

    const interval = setInterval(changeWord, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden p-8 pt-40"
    >
      <div className="z-40">
        <h1 ref={titleRef} className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#5e17eb] mb-12">
          Explota tu startup
          <span role="img" aria-label="explosion">
            💥
          </span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-3xl text-center text-[#5e17eb] mb-12"
        >
          El co-piloto que <span className="font-bold">crece</span> tu{" "}
          <span className="font-bold">startup</span>
        </p>
        <a
          ref={buttonRef}
          href="https://calendly.com/elias-guander"
          className="bg-[#5e17eb] text-white text-xl font-semibold px-6 py-3 rounded-full mb-8"
        >
          Consultoría Gratis
        </a>
        <div className="z-40 text-xl font-light text-[#5e17eb] mt-12">
          +10 <span className="font-bold" ref={textRef}>Startups</span> creciendo con Guander
        </div>
      </div>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          src={url}
          alt={`Item ${index + 1}`}
          className="absolute w-20 h-20 object-cover rounded-md"
        />
      ))}
    </div>
  );
};

export default ExplosionAnimation;
