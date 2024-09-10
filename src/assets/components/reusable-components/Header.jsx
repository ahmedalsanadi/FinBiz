


// eslint-disable-next-line react/prop-types
const Header = ({ headline, description }) => {
  
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
