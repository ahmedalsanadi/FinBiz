/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({
	title,
	title2,
	headStyle,
	textStyle,
	description,
	image,
	images,
	span = 1,
	children,
}) => {
	useEffect(() => {
		AOS.init({
			duration: 600,
			easing: 'ease-in-out',
			once: true,
			mirror: false,
		});
	}, []);
	return (
		<div
			className={`bg-darkGray py-10 px-4 rounded-3xl shadow-lg border border-dark flex flex-col items-center justify-center z-20 hover:scale-105 transform transition-all duration-300 ${
				span === 2 ? 'col-span-2' : 'col-span-1'
			}`}
			data-aos="fade-up">
			<h3
				className={`text-white text-xl font-semibold mb-4 ${headStyle}`}>
				{title}
				{title2 ? (
					<>
						<br />
						{title2}
					</>
				) : null}
			</h3>
			<p className={`text-anotherDark text-xl  block mb-4 ${textStyle} `}>
				{description}
			</p>

			{/* If children are passed, render them, otherwise render images */}
			{children ? (
				<div className="mt-auto">{children}</div>
			) : (
				<>
					{/* Conditionally render a single image */}
					{image && (
						<div className="bg-gray-700 rounded-3xl overflow-hidden mt-auto">
							<img
								src={image}
								alt={title}
								className="w-full h-full object-cover"
							/>
						</div>
					)}

					{/* Conditionally render multiple images */}
					{images && (
						<div className=" bg-cardDarkBackground rounded-full px-4 py-16 flex -space-x-2 my-auto mx-auto">
							{images.map((img, idx) => (
								<img
									key={idx}
									className="w-10 h-10 rounded-full border-2 border-gray-800"
									src={img}
									alt={`Avatar ${idx + 1}`}
								/>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Card;