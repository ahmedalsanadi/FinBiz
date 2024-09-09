
import Badge from './reusable-components/Badge'
import Header from './reusable-components/Header'
import arrow from '../images/arrow.svg'
import PricingSection from './PricingSection'


const PlanSection = () => {

  return (
      <section className="bg-customGray-800 text-white py-8 px-8">
        <div className="max-w-[1088px] mx-auto text-center ">
          <Badge isDarkMode={true} width={'80px'}>

              <img src={arrow} alt="arrow" className="py-1" />
              <span className="text-green font-semibold ">Pricing</span>
            </Badge>

            <Header 
            headline="Find the right plan" 
            description="Invest in your company's future with our comprehensive fnancial solution. Contact us for pricing details and see how we can help you streamline your fnances and reach your business goals."
          />

        </div>
        <PricingSection />
  </section>
  )
}

export default PlanSection

