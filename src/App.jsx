
import './App.css';
import Navbar from './assets/components/Navbar';
import HeroSection from './assets/components/HeroSection';
import MiddleNav from './assets/components/MiddleNav';
import TestimonialSection from './assets/components/TestimonialSection';
import CardSection from './assets/components/CardSection';
import PlanSection from './assets/components/PlanSection';
import PreFooterSection from './assets/components/PreFooterSection';
import Footer from './assets/components/Footer';
import ChartsSection from './assets/components/ChartsSection';






function App() {

  return (
    <main className="bg-navBackground text-white min-h-screen">

      <header className='bg-navBackground'>
         <Navbar />
      </header>
     
      <section className="hero bg-heroBackground">
        <HeroSection />
        <ChartsSection />
      </section>

      <section className='relative bg-navBackground  after:content-[url("/greenCircleEffect.svg")] after:absolute after:top-12 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-75 lg:after:scale-75 md:after:scale-50 sm:after:scale-25 overflow-hidden'>
      <MiddleNav />
      <CardSection />
      </section>
      
      <TestimonialSection />

      <section className="hero bg-customGray-800">
        <PlanSection />
      </section>
      <section className="hero bg-customGray-800 px-10 py-10">
        <PreFooterSection />
      </section>

      <Footer />
    </main>
  );
}

export default App;
