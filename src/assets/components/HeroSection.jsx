import EmailInput from './reusable-components/EmailInput';
import Reviews from './reusable-components/Reviews';
import arrow from '../images/arrow.svg';
import Badge from './reusable-components/Badge';
import Header from './reusable-components/Header';

const HeroSection = () => {
  const isDarkMode = true;
  return (
    <section className=" container mx-auto text-white py-16 px-8">
      <div className="text-center ">

            {/* Badge */}
            <Badge isDarkMode={true} width={'280px'}>
              <button className={`font-semibold rounded-[64px] w-[54px] h-[25px] ${isDarkMode ? 'bg-green' : ''}`}>
                    New
              </button>

              <span className="text-green font-semibold py-1">
                    Introducing AI Automation
                </span>
              <img src={arrow} alt="arrow" className="py-1" />
            </Badge>
          <Header 
            headline="The Finance Solutions For Your Business" 
            description="Empower your finance team. The one-stop platform for all financial management of small and medium-sized businesses."
          />
          <EmailInput />
          <Reviews />
      </div>
    </section>
  );
};

export default HeroSection;
