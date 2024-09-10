/* eslint-disable react/prop-types */
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Button from './Button';

const AnotherCard = ({
  title,
  price,
  features,
  isPopular,
  buttonText,
  buttonVariant,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  return (
    <div
      className="bg-customGray-900 flex flex-col justify-between relative  pt-10 md:pt-20 pb-8 px-8 rounded-3xl shadow-md "
      data-aos="fade-up"
    >
      {isPopular && (
        <span
          className="absolute top-4 right-4 bg-customGreen-600 text-sm px-2 py-1 rounded-full"
          data-aos="zoom-in"
        >
          Popular
        </span>
      )}
      <div>
      <h2 className={`${title === "Basic" ? "text-white" : "text-green"} text-3xl font-semibold text-center`} data-aos="fade-up">
  {title}
</h2>
        <p className="text-customGray-400 mt-8 text-gray  text-center " data-aos="fade-up" data-aos-delay="200">
          Get a professional website designed according to your needs.
        </p>
        <p className="text-4xl font-medium my-10 md:my-14 text-center" data-aos="fade-up" data-aos-delay="300">
          ${price}
          <span className="text-sm font-normal">/month</span>
        </p>
        <hr className="border-gray-600" />
        <ul className="mt-10 space-y-4" data-aos="fade-up" data-aos-delay="400">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-customGreen-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414-1.414l-7.293 7.293L5.707 8.707a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10" data-aos="zoom-in" data-aos-delay="500">
        <Button text={buttonText} variant={buttonVariant} />
      </div>
    </div>
  );
};

export default AnotherCard;
