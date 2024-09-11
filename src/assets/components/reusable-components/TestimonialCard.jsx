

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ avatar, name, quote, stars }) => {


  return (
    <div className="bg-darkGray rounded-xl p-12 md:p-6 shadow-lg" data-aos="fade-up">
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
