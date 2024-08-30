import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ValueCard = ({ title, logoUrl, backgroundColor, borderColor, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isHovered]);

  useEffect(() => {
    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top center',
        end: '+=500', // Ajusta el valor según tu diseño
        scrub: true,
        pin: true, // Esto "fija" la tarjeta en su lugar mientras se hace scroll
      },
      y: (index) => index * 50, // Ajusta el desplazamiento vertical para la animación
      stagger: 0.1, // Añade un pequeño retraso entre las tarjetas si hay varias
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="value-card w-full transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ maxWidth: '300px' }} // Ajuste de tamaño máximo
    >
      <div
        className={`rounded-xl overflow-hidden shadow-lg border-4 ${borderColor} bg-white`}
      >
        <div
          className={`aspect-w-16 aspect-h-9 flex items-center justify-center transition-all duration-300 ${backgroundColor}`}
        >
          <div
            ref={contentRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-60 p-4 rounded-xl opacity-0"
          >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <ul className="space-y-2 text-sm font-medium">
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {!isHovered && (
            <div className="flex flex-col justify-center items-center w-full h-full">
              <img
                src={logoUrl}
                alt={title}
                className="w-16 h-16 object-contain"
              />
              <div className="w-full h-16 bg-white p-2">
                <h3 className="text-lg font-bold text-center">{title}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
