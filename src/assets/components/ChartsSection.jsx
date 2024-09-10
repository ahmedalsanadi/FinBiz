import LineChart from './LineChart';
import { graphB, graphG, graphR } from '../utils/constants';
import ProgressBar from './ProgressBar';

const ChartsSection = () => {
  return (
    <section className='bg-veryDarkGray container mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6'>

        {/* Card 1: Profit */}
        <div className='col-span-12 md:col-span-4 lg:col-span-4 p-8 bg-darkGray rounded-3xl' data-aos="fade-right"  data-aos-delay="200" data-aos-duration="800">
          <div className='flex flex-col justify-between'>
            <div className='flex justify-between mb-4'>
              <h2 className='text-anotherDark text-3xl'>Total Profit</h2>
              <p className='text-brightGreen text-lg mt-2'>+18.23</p>
            </div>
            <div className='flex justify-between mt-5'>
              <p className='text-white text-5xl font-medium'>$350.240</p>
              <img src={graphG} alt="Green graph" />
            </div>
          </div>
        </div>

        {/* Card 2: Revenue */}
        <div className='col-span-12 md:col-span-4 lg:col-span-4 p-8 bg-darkGray rounded-3xl' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800">
          <div className='flex flex-col justify-between'>
            <div className='flex justify-between mb-4'>
              <h2 className='text-anotherDark text-3xl'>Total Revenue</h2>
              <p className='text-brightRed text-lg mt-2'>-28.35</p>
            </div>
            <div className='flex justify-between mt-5'>
              <p className='text-white text-5xl font-medium'>$400.690</p>
              <img src={graphR} alt="Red graph" />
            </div>
          </div>
        </div>

        {/* Card 3: Product Sold */}
        <div className='col-span-12 md:col-span-4 lg:col-span-4 p-8 bg-darkGray rounded-3xl' data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
          <div className='flex flex-col justify-between'>
            <div className='flex justify-between mb-4'>
              <h2 className='text-anotherDark text-3xl'>Product Sold</h2>
              <p className='text-blue text-lg mt-2'>+28.35</p>
            </div>
            <div className='flex justify-between mt-5'>
              <p className='text-white text-5xl font-medium'>$200.000</p>
              <img src={graphB} alt="Blue graph" />
            </div>
          </div>
        </div>

        {/* Card 4: Total Balance Card */}
      {/* Card 4: Total Balance Card */}
      <div className='col-span-12 md:col-span-2 lg:col-span-2 p-6 bg-darkGray rounded-lg flex flex-col justify-between' data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
          <div className='flex flex-col border-b-2 border-mediumDark pb-4'>
            <h2 className='text-anotherDark text-lg mb-4'>Total Balance</h2>
            <p className='text-white text-4xl font-bold mb-4'>$350.0</p>
            <button className='bg-white text-darkGray py-2 px-6 rounded-lg font-semibold'>Transfer</button>
          </div>
          <div className='flex flex-col border-b-2 border-mediumDark pb-4'>
            <div className='flex justify-between mb-4'>
              <h2 className='text-anotherDark text-lg mb-4'>Total Balance</h2>
              <p className='text-gray-400 text-sm pt-1'>92%</p>
            </div>
            <p className='text-white text-4xl font-bold mb-4'>$350.0</p>
          </div>
          <div className='flex flex-col border-b-2 border-mediumDark pb-4'>
            <div className='flex justify-between mb-4'>
              <h2 className='text-anotherDark text-lg mb-4'>Total Expenses</h2>
              <p className='text-gray-400 text-sm pt-1'>92%</p>
            </div>
            <p className='text-white text-4xl font-bold mb-4'>$350.0</p>
          </div>
        </div>
        {/* Card 5: Spend Overview (Chart) */}
        <div className='col-span-12 md:col-span-8 lg:col-span-8 p-6 bg-darkGray rounded-lg' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800">
          <h2 className='text-white text-xl mb-4'>Spend Overview</h2>
          <div className='flex justify-between text-gray-400 mb-4'>
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
            <span>Yearly</span>
          </div>
          <LineChart />
        </div>

        {/* Card 6: Progress Bars */}
        <div className='col-span-12 md:col-span-2 lg:col-span-2 p-6 bg-darkGray rounded-lg flex flex-col justify-between' data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
          <ProgressBar label="Employee" progress={70} />
          <ProgressBar label="Independent Contractor" progress={50} />
          <ProgressBar label="Contracted Employee" progress={60} />
          <ProgressBar label="Stakeholders" progress={40} />
        </div>

      </div>
    </section>
  );
};

export default ChartsSection;
