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
  className="bg-veryDarkGray container mx-auto pl-12 pr-12 md:pl-16 md:pr-4 py-4 flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-md overflow-hidden"
  data-aos="fade-up" 
>
  <div
    className="flex-1 md:pr-8 mb-8 md:mb-0"
    data-aos="fade-right"
  >
    <h2 className="text-4xl md:text-6xl text-left font-semibold text-white leading-snug md:leading-[65px] ">
      Let’s Upgrade your finances experience by using FinBiz
    </h2>
    <div className="flex space-x-4 mt-8 mx-auto">
      <Button text="Request Demo" variant="demo"  />
      <Button text="Watch Video" variant="video" />
    </div>
  </div>

  {/* Image Section */}
  <div
    className="flex-1 mb-8 md:mb-0 flex justify-end"
    data-aos="fade-left" 
  >
    <img
      src={human} 
      alt="FinBiz Demo"
      className="rounded-lg w-full max-w-[500px] object-cover"
    />
  </div>
</div>
  );
};

export default PreFooterSection;
