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

  const imageUrls = [
    dulas,
    gg,
    hkp,
    sanea,
    unicorn,
    whisper,
  ];

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
          // const radius = gsap.utils.random(150, 250);
          const radius = gsap.utils.random(250, 400);
          newPos = {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
          };
        } while (positions.some(pos => 
          Math.sqrt(Math.pow(pos.x - newPos.x, 2) + Math.pow(pos.y - newPos.y, 2)) < minDistance
        ));
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
    tl.to(items, { 
      opacity: 1, 
      scale: 1, 
      stagger: 0.1,
      x: () => gsap.utils.random(-30, 30),
      y: () => gsap.utils.random(-30, 30),
    }, "-=0.5");

    tl.add("preExplosion", "+=0.5");

    tl.to(items, {
      duration: 1.5,
      scale: () => gsap.utils.random(0.8, 1.2),
      x: (index) => finalPositions[index].x,
      y: (index) => finalPositions[index].y,
      rotation: () => gsap.utils.random(-350, 30),
      ease: "power2.out",
      stagger: {
        from: "center",
        amount: 0.5
      }
    }, "preExplosion");

    return () => tl.kill();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden p-8 pt-48">
      <div className="z-40">
      <h1 ref={titleRef} className="text-4xl font-bold text-[#5e17eb] mb-4">
        Explota tu startup <span role="img" aria-label="explosion">💥</span>
      </h1>
      <p ref={subtitleRef} className="text-lg text-center text-[#5e17eb] mb-6">
        Encuentra a tu cliente ideal y recibe insights para <span className="font-bold">crecer 4x</span>
      </p>
      <button ref={buttonRef} className="bg-[#5e17eb] text-white text-lg font-semibold px-6 py-3 rounded-full mb-8">
        Consultoría Gratis
      </button>
      <div className="text-xl font-bold text-[#5e17eb] mt-12">
       +70 Startups creciendo con Guander
      </div>
      </div>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          ref={el => itemRefs.current[index] = el}
          src={url}
          alt={`Item ${index + 1}`}
          className="absolute w-12 h-12 object-cover rounded-md"
        />
      ))}
    </div>
  );
};

export default ExplosionAnimation;