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
    <div className="relative flex flex-col items-center py-16 bg-gray-50">
      {/* Timeline line */}
      <div className="absolute w-1 bg-blue-500 h-full top-0 left-1/2 transform -translate-x-1/2"></div>

      {/* Timeline steps */}
      <div className="flex flex-col space-y-24">
        {/* Step 1 */}
        <div className="flex items-center" ref={el => stepsRef.current[0] = el}>
          <div className="w-1/2 flex justify-center pr-6">
            <img src={empathy} alt="Empatizamos con tus clientes" className="w-40 h-40 object-cover"/>
          </div>
          <div className="w-1/2 pl-10">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-8 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800">Empatizamos con tus clientes</h2>
              <p className="mt-4 text-lg text-gray-600">Comprendemos a fondo las necesidades y deseos de tus clientes para ofrecer soluciones que realmente importan.</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center" ref={el => stepsRef.current[1] = el}>
          <div className="w-1/2 flex justify-center pl-10 order-2">
            <img src={kpi} alt="Entendemos tus KPI’s importantes" className="w-40 h-40 object-cover "/>
          </div>
          <div className="w-1/2 pr-10 order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg border-r-8 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800">Entendemos tus KPI’s importantes</h2>
              <p className="mt-4 text-lg text-gray-600">Nos enfocamos en los indicadores clave que impulsan el éxito de tu negocio.</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center" ref={el => stepsRef.current[2] = el}>
          <div className="w-1/2 flex justify-center pr-6">
            <img src={exp} alt="Experimentar para encontrar el producto ganador" className="w-40 h-40 object-cover "/>
          </div>
          <div className="w-1/2 pl-10">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-8 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-800">Experimentar para encontrar el producto ganador</h2>
              <p className="mt-4 text-lg text-gray-600">Probamos y refinamos constantemente para descubrir la mejor versión de tu producto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
