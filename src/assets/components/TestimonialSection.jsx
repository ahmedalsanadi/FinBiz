import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import TestimonialCard from './reusable-components/TestimonialCard';
import { user1, user2, user3 } from '../utils/constants';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Badge from './reusable-components/Badge';
import arrow from '../images/arrow.svg';

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="container mx-auto text-white px-4 my-12">
      {/* Title Section */}
      <div className="text-center mb-10">
        <Badge isDarkMode={true} width={'160px'} justify="center gap-2">
          <img src={arrow} alt="arrow" className="py-1" />
          <span className="text-green font-semibold">Testimonials</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">What are people saying</h2>
        <p className="text-anotherDark max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          Thank you for your trust in Crypt Land! We are committed to providing the best [products/services offered]. Read what our clients have to say.
        </p>
      </div>

      {/* Swiper Section */}
      <div className="container  mx-auto relative py-6 sm:py-10">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          spaceBetween={10}
          slidesPerView={1} // Default to 1 slide
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 }, // Small screens (mobile)
            768: { slidesPerView: 2, spaceBetween: 15 }, 
            1024: { slidesPerView: 3, spaceBetween: 30 }, 
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="py-10"
        >
          {[
            {
              avatar: user2,
              name: "Alfredo Lubin",
              quote: "I'm impressed by the management system. Highly recommended!",
              stars: 5,
            },
            {
              avatar: user1,
              name: "Randy Levin",
              quote:
                "Our success is intertwined with our customers'. This software truly transcends expectations.",
              stars: 5,
            },
            {
              avatar: user3,
              name: "Angel Mango",
              quote: "Exceptional service! The team's dedication is unparalleled.",
              stars: 5,
            },
            {
              avatar: user2,
              name: "Xavi Mango",
              quote: "Exceptional service! The team's dedication is unparalleled.",
              stars: 5,
            },
            {
              avatar: user1,
              name: "Andrias Inesta",
              quote: "Exceptional service! The team's dedication is unparalleled.",
              stars: 4,
            },
          ].map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="testimonial-card transform transition-all duration-300 hover:scale-105">
                <TestimonialCard {...testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-8">
        <button
          ref={prevRef}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full text-gray-400 hover:text-white mx-2"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="bg-lime-500 hover:bg-lime-600 p-4 rounded-full text-black mx-2"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
