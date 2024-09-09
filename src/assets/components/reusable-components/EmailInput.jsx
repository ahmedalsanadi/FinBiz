import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const EmailInput = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center mb-12 px-1 rounded-full max-w-[540px] mx-auto"
      data-aos="fade-up" 
    >
      <input
        type="email"
        placeholder="Enter your email address"
        className="py-3 px-6 mt-5 bg-cardDarkBackground text-gray-400 rounded-full outline-none w-72 md:w-96"
        data-aos="fade-right" 
        data-aos-delay="100"
      />
      <button
        className="bg-white w-[176px] h-[50px] px-2 mt-5 text-black rounded-full hover:text-green transform transition-transform duration-300 hover:scale-105"
        data-aos="fade-left" 
        data-aos-delay="200" 
      >
        Book a Demo
      </button>
    </div>
  );
};

export default EmailInput;
