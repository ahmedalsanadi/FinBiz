
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
		<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 p-4 md:p-6  md:mt-32 container mx-auto text-center  my-10">
			{/* Card 1: Simple Analytics */}
			<Card
				title="Simple analytics"
				description="Make informed decisions backed by data through our analytics tools."
				image={simpleAnalysis}
			/>

			{/* Card 2: Boosting Business */}
			<Card
				title="Boosting Business"
				title2="Today and Tomorrow"
        headStyle="text-6xl text-center leading-8"
        textStyle=" block max-w-[500px] mx-auto leading-8 text-center"
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
        headStyle="text-4xl text-left leading-10 font-bold"
				description="Take the pain out of bookkeeping! Wave goodbye to mountains of paperwork and endless email reminders. There is now a new way of accounting."
				textStyle={" block max-w-[550px] leading-8 text-left"}
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
  <div className=" flex flex-col  items-start px-6 py-4 "> 
    <h2 className="text-white text-4xl block font-semibold mb-4">
      Optimise expense
    </h2>
    <h2 className="text-white text-4xl block font-semibold mb-10 text-left">
      Management as a team
    </h2>
    <p className="text-anotherDark block mb-10 text-left text-lg max-w-[490px] leading-8">
      Bring harmony to team expenses with budget limits and
      real-time monitoring. Freedom for your staff. Peace of
      mind for you.
    </p>
    <Button text="Explore more" variant="explore" />
  </div>
</Card>
	</div>
	);
};
export default CardSection;
