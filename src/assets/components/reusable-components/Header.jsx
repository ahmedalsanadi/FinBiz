
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// eslint-disable-next-line react/prop-types
const Header = ({ headline, description }) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100, 
      once: true, 
    });
  }, []);

  return (
    <header>
    
      <div className="heading max-w-[600px] mx-auto my-10" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          {headline}
        </h1>
      </div>

     
      <article className="max-w-[880px] mx-auto p-2" data-aos="fade-up" data-aos-delay="200">
        <p className="text-gray text-p mb-8">
          {description}
        </p>
      </article>
    </header>
  );
};

export default Header;
