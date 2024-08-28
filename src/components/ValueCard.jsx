import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

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

  return (
    <div
      ref={cardRef}
      className="value-card transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`rounded-2xl overflow-hidden shadow-lg border-4 ${borderColor} bg-white`}
      >
        <div
          className={`aspect-video flex items-center justify-center transition-all duration-300 ${backgroundColor}`}
        >
          <div
            ref={contentRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black p-4 rounded-2xl opacity-0"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
            <ul className="space-y-2 font-medium">
            {items.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {!isHovered && (
            <div className="flex flex-col justify-end content-center items-center w-full h-full">
              <img
                src={logoUrl}
                alt={title}
                className="w-24 h-24 object-contain"
              />
              <div className="w-full h-20 bg-white p-4">
                <h3 className="text-2xl font-bold text-center">{title}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
