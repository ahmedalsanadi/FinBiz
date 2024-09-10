import TestimonialCard from './reusable-components/TestimonialCard';
import {user1, user2,user3,} from '../utils/constants'; // avater images
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Badge from './reusable-components/Badge';
import arrow from '../images/arrow.svg';

const TestimonialSection = () => (
  <section className=" container mx-auto text-white px-4 my-12 ">
      <div className=" text-center mb-10">

      <Badge isDarkMode={true} width = {'160px'} justify='center gap-2'>
            <img src={arrow} alt="arrow" className="py-1" />
            <span className="text-green font-semibold ">
            Testimonials
              </span>
          </Badge>


        <p className="text-lime-400 uppercase mb-2"></p>
        <h2 className="text-4xl font-semibold mb-4">What are people saying</h2>
        <p className=" text-anotherDark max-w-2xl mx-auto ">
          Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.
        </p>
      </div>
    {/* Testimonial Cards */}

    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
     
      <TestimonialCard
        avatar={user2}
        name="Alfredo Lubin"
        quote="I really like the system at this management,i love recommending this software to you guys."
        stars={5}
      />
     
      <TestimonialCard
        avatar={user1}
        name="Randy Levin"
        quote="We alighn our succeess with the success of our customers which is why our offering transcends our software."
        stars={5}
      />

       
      <TestimonialCard
        avatar={user3}
        name="Angel Mango"
        quote="I absolutely love this service.The team is fantastic, and I can't recommend them enough"
        stars={5}
      />
      

      {/* Add more TestimonialCard here */}

    </div>

    {/* Arrow Navigation */}

    <div className="flex justify-center items-center mt-8">
        <button className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full text-gray-400 hover:text-white mx-2">
          <FaArrowLeft />
        </button>
        <button className="bg-lime-500 hover:bg-lime-600 p-4 rounded-full text-black mx-2">
          <FaArrowRight />
        </button>
      </div>

  </section>
);

export default TestimonialSection;
