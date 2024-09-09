import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ avatar, name, quote, stars }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  return (
    <div className="bg-darkGray rounded-xl p-6 shadow-lg" data-aos="fade-up">
      <p className="text-anotherDark mb-6 text-left">{quote}</p>

      <div className="flex items-center mb-4" data-aos="zoom-in" data-aos-delay="200">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full mr-3" />
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <div className="flex text-yellow-400">
            {Array.from({ length: stars }, (_, i) => (
              <span className="text-2xl" key={i}>&#9733;</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
