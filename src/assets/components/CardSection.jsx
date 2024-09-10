import 'aos/dist/aos.css'; // Import AOS styles
import Card from './reusable-components/Card';
import Button from './reusable-components/Button';
import {
	simpleAnalysis,
	boostingBusiness,
	easyColl1,
	easyColl2,
	easyColl3,
	easyColl4,
	monthlyInvoice,
	money,
} from '../utils/constants';

const CardSection = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 mt-32 container mx-auto  ">
			{/* Card 1: Simple Analytics */}
			<Card
				title="Simple analytics"
				description="Make informed decisions backed by data through our analytics tools."
				image={simpleAnalysis}
			/>

			{/* Card 2: Boosting Business */}
			<Card
				title="Boosting Business"
				title2="Today and Tomorrow."
        headStyle="text-3xl leading-10"
        textStyle="max-w-[450px] leading-8"
				description="Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you."
				image={boostingBusiness}
				span={2}
			/>

			{/* Card 3: Easy collaboration */}
			<Card
				title="Easy collaboration"
				description="Seamlessly collaborate with your team members like never before."
				images={[easyColl1, easyColl2, easyColl3, easyColl4]}
			/>

			{/* Card 4: Real-time accounting at your fingertips */}
			<Card
				title="Real-time accounting at your fingertips."
        headStyle="text-2xl "
				description="Take the pain out of bookkeeping! Wave goodbye to mountains of paperwork and endless email reminders. There is now a new way of accounting."
				span={2}>
				<div className="flex flex-col gap-2 text-left">
					<div className="flex items-center justify-between">
						<figure className="max-w-48 h-48 rounded-tr-2xl rounded-l-2xl mt-20 border-t-2 border-r-2 border-l-2 border-slate-800 mb-[-50px]">
							<img className="w-full" src={money} alt="money" />
						</figure>

						<figure className="max-w-68 h-auto rounded-2xl border-2 border-slate-800">
							<img
								className="w-full"
								src={monthlyInvoice}
								alt="Invoice"
							/>
						</figure>
					</div>
				</div>
			</Card>

			{/* Card 5: Optimise expense Management */}
      <Card span={2}>
  <div className="bg-darkGray flex flex-col items-start p-2 h-full"> 
    <h2 className="text-white text-4xl font-semibold mb-4">
      Optimise expense
    </h2>
    <h2 className="text-white text-4xl font-semibold mb-12 text-left">
      Management as a team
    </h2>
    <p className="text-anotherDark mb-2 text-left max-w-[400px] leading-8">
      Bring harmony to team expenses with budget limits and
      real-time monitoring. Freedom for your staff. Peace of
      mind for you.
    </p>
    <Button text="Explore more" variant="white" />
  </div>
</Card>
		</div>
	);
};
export default CardSection;
