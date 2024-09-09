import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './reusable-components/Button';
import { human } from '../utils/constants';

const PreFooterSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  return (
    <div
      className="bg-veryDarkGray max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-md overflow-hidden"
      data-aos="fade-up" 
    >
      <div
        className="flex-1 md:pr-8 mb-8 md:mb-0"
        data-aos="fade-right"
      >
        <h2 className="text-6xl font-semibold text-white leading-tight">
          Let’s Upgrade your finances experience by using FinBiz
        </h2>
        <div className="flex space-x-4 mt-8 mx-auto">
          <Button text="Request Demo" variant="contact" />
          <Button text="Watch Video" variant="white" />
        </div>
      </div>

      {/* Image Section */}
      <div
        className="flex-1"
        data-aos="fade-left" 
      >
        <img
          src={human} 
          alt="FinBiz Demo"
          className="rounded-lg w-full max-w-[550px] max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default PreFooterSection;
