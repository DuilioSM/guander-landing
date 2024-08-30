import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import empathy from "../assets/img/empatia-logo.png";
import exp from "../assets/img/exp-logo.png";
import kpi from "../assets/img/kpi-logo.png";

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((step) => {
      gsap.fromTo(step, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        }
      });
    });
  }, []);

  return (
    <div className='bg-gray-50'>
      <h2 className="text-2xl md:text-3xl font-bold my-8 md:my-12 bg-yellow-200 inline-block px-4 py-2 rounded-lg">
        Nuestra salsa secreta
      </h2>
      <div className="relative flex flex-col items-center py-12 md:py-16">
       
        {/* Timeline line */}
        <div className="absolute hidden md:block w-1 bg-[#5e17eb] h-full top-0 left-1/2 transform -translate-x-1/2"></div>

        {/* Timeline steps */}
        <div className="flex flex-col space-y-16 md:space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mx-5" ref={el => stepsRef.current[0] = el}>
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img src={empathy} alt="Empatizamos con tus clientes" className="w-32 md:w-40 h-auto object-cover"/>
            </div>
            <div className="w-full">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 md:border-l-8 border-[#5e17eb]">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800">Empatizamos con tus clientes</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600">Comprendemos a fondo las necesidades y deseos de tus clientes para ofrecer soluciones que realmente importan.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center mx-5" ref={el => stepsRef.current[1] = el}>
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 md:pl-10 order-2">
              <img src={kpi} alt="Entendemos tus KPI’s importantes" className="w-32 md:w-40 h-auto object-cover"/>
            </div>
            <div className="w-full md:pr-10 order-1">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-r-4 md:border-r-8 border-[#5e17eb]">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800">Entendemos tus KPI’s importantes</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600">Nos enfocamos en los indicadores clave que impulsan el éxito de tu negocio.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center mx-5" ref={el => stepsRef.current[2] = el}>
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img src={exp} alt="Experimentar para encontrar el producto ganador" className="w-32 md:w-40 h-auto object-cover"/>
            </div>
            <div className="w-full">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 md:border-l-8 border-[#5e17eb]">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800">Experimentar para encontrar el producto ganador</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600">Probamos y refinamos constantemente para descubrir la mejor versión de tu producto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
