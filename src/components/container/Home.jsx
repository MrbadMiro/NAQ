// import React from "react";
// import hero from "../../assets/hero.svg";
// import { Hero_Section_bg,Hero_icon1,Hero_icon2,Hero_Arrow } from "../../assets";
// const Home = () => {
// 	const sectionStyle = {
// 		backgroundImage: `url(${Hero_Section_bg})`,
// 		backgroundSize: "cover",
// 		backgroundPosition: "center",
// 		};
// 	return (
// 		<div className="w-full mb-2 relative h-full  flex " id="home" style={sectionStyle}>

// 			<div className="grid lg:grid-cols-2 pt-12   relative gap-5">
// 				{/* left side content*/}
// 				<div className="  px-2 lg:px-0   lg:pl-10 py-5 flex flex-col justify-center md:items-start items-center mt-4">
// 					<div className="flex flex-col">
// 						<p className=" mx-3 text-[#E24486] font-bold text-[20px] lg:text-[20px] font-cormorant md:text-left text-center">Welocome to NAQ</p>
// 						<img src={Hero_Arrow} alt=""  className="w-[270px] h-[16px]"/>

// 					</div>
// 					<p className="text-[44px]  font-extrabold font-cormorant  md:text-[70px] leading-[50px] md:leading-[84px] md:text-left text-center text-[#0D0D0D] ">
// 						Unleash Your Inner Queen with <span className="text-[#E24486]">
// 						Nithiya's Active Queens.
// 					</span>
// 					</p>

// 					<p className="mt-4 mb-4 mx-3  font-medium text-[14px] lg:text-[16px] font-cormorant md:text-left text-center">
// 						From Mastering Makeup Artistry and Cake Decorating to Honing Your
// 						Skills in Tailoring and Aari Embroidery, We Offer a Diverse Range of
// 						Courses to Unlock Your Inner Queen.
// 					</p>
// 				</div>

// 				{/* right Side */}
// 				<div className="     h-full w-full flex items-center justify-center relative  ">
// 					<div className="flex bottom-0 h-full  ">
// 						<img
// 							src={hero}
// 							alt=""
// 							className=" h-full   z-10  object-cover w-[100%] bottom-0      "
// 						/>
// 					</div>
// 					<div className="absolute flex flex-col w-full items-center  justify-center left-1/2 transform -translate-x-1/2 bottom-0">

//                             <img src={Hero_icon2} alt=""  className=" drop-shadow-2xl"/>

// 					</div>
// 					<div className="absolute flex flex-col w-full items-center justify-center left-1/2 transform -translate-x-1/2 bottom-0">

//                             <img src={Hero_icon1} alt="" />

// 					</div>

// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Home;

import React, { useState, useEffect } from "react";
import {
	hero,
	hero2,
	Hero_Section_bg,
	Hero_icon1,
	Hero_icon2,
	Hero_Arrow,
} from "../../assets";

const slidesData = [
	{   
		id:1,
		title: "01. Website Layout",
		content:"From Mastering Makeup Artistry and Cake Decorating to Honing YourSkills in Tailoring and Aari Embroidery, We Offer a Diverse Range of Courses to Unlock Your Inner Queen.",
		imgSrc: hero,
	},
	{
		id:2,
		title: "02. Website Layout",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo maxime nisi ratione eligendi veritatis blanditiis perspiciatis aut, rem, cum, molestiae iste repellendus nesciunt sequi repudiandae exercitationem dolor officiis? Nulla?",
		imgSrc: hero2,
	},

];

const Home = () => {
	const sectionStyle = {
		backgroundImage: `url(${Hero_Section_bg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const [index, setIndex] = useState(0);

	const nextSlide = () => {
		setIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
	};

	const prevSlide = () => {
		setIndex(
			(prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
		);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 10000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="w-full mb-2 relative h-full  flex "
			id="home"
			style={sectionStyle}>
			{slidesData.map((slide, i) => (
				<div
					key={i}
					className={`slide-container ${
						i === index ? "block" : "hidden"
					} flex items-center flex-wrap  `}>
					<div className="grid lg:grid-cols-2 pt-12   relative gap-5">
						{/* left side content*/}
						<div className="  px-2 lg:px-0   lg:pl-10 py-5 flex flex-col justify-center md:items-start items-center mt-4">
							<div className="flex flex-col">
								<p className=" mx-3 text-[#E24486] font-bold text-[20px] lg:text-[20px] font-cormorant md:text-left text-center">
									Welocome to NAQ
								</p>
								<img src={Hero_Arrow} alt="" className="w-[270px] h-[16px]" />
							</div>
							<p className="text-[44px]  font-extrabold font-cormorant  md:text-[70px] leading-[50px] md:leading-[84px] md:text-left text-center text-[#0D0D0D] ">
								Unleash Your Inner Queen with{" "}
								<span className="text-[#E24486]">Nithiya's Active Queens.</span>
							</p>

							<p className="mt-4 mb-4 mx-3  font-medium text-[14px] lg:text-[16px] font-cormorant md:text-left text-center animate-slideContent">
								{slide.content}
							</p>
						</div>

						{/* right Side */}
						<div className="     h-full w-full flex items-center justify-center relative  ">
							<div className="flex bottom-0 h-full  ">
								<img
									src={slide.imgSrc}
									alt=""
									className="h-[500px] md:h-[100vh]   z-10  object-cover w-[100%] bottom-0  animate-slideImage    "
								/>
							</div>
							<div className="absolute flex flex-col w-full items-center  justify-center left-1/2 transform -translate-x-1/2 bottom-0">
								<img src={Hero_icon2} alt="" className=" drop-shadow-2xl animate-slideImage2" />
							</div>
							<div className="absolute flex flex-col w-full items-center overflow-hidden justify-center left-1/2 transform -translate-x-1/2 bottom-0">
								<img src={Hero_icon1} alt=""  className="animate-slideImage3 overflow-hidden"/>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
