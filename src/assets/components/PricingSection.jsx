import AnotherCard from './reusable-components/AnotherCard';

const PricingSection = () => {
    const plans = [
      {
        title: 'Basic',
        price: '499',
        features: ['Get a fully designed Website', 'Webflow Development', 'Limited Support'],
        buttonText: 'Get started',
        buttonVariant: 'default',
      },
      {
        title: 'Pro',
        price: '499',
        features: ['Get a fully designed Website', 'Webflow Development', 'Limited Support', 'Standard integrations', 'Email support'],
        buttonText: 'Get started',
        buttonVariant: 'white',
        isPopular: true,
      },
      {
        title: 'Enterprise',
        price: '999',
        features: ['Get a fully designed Website', 'Webflow Development', 'Limited Support', 'Standard integrations', 'Email support'],
        buttonText: 'Contact Us',
        buttonVariant: 'contact',
      },
    ];
  
    return (
      <section className="py-4">
        <div className="  px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <AnotherCard key={index} {...plan} />
          ))}
        </div>
      </section>
    );
  };

export default PricingSection;
