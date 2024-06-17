import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Assuming you have react-slick installed
import { IoLocationOutline } from "react-icons/io5";
import Form from "./Form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courses } from "../../Data";
import { Link as ScrollLink } from "react-scroll";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import {
	Courses_bg,
	Courses_leaves,
	Hero_Arrow,
	counter_1_1,
	counter_1_2,
	counter_1_3,
	counter_1_4,
	Courses_Circle,
	Courses_flower,
	Courses_icon1,
	Courses_icon2,
} from "../../assets";
const Courses = () => {

	const [showForm1, setShowForm1] = useState(false);
	const toggleForm1 = () => {
		setShowForm1(!showForm1);
	};
	const sectionStyle = {
		backgroundImage: `url(${Courses_bg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
		<section
			className="w-[100vw] relative  h-full flex flex-col items-center justify-center pb:[200px] md:pb-[200px] px-6 md:px-12  gap-6  "
			id="courses"
			style={sectionStyle}>
			<div className=" absolute -top-[500px] md:-top-10 md:px-12 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center ">
				<div className=" w-full -top-[40px] md:-top-12 p-1 boxShadow1   bg-white ">
					<div className="grid ss md:grid-cols-4 w-full p-4 bg-[#F9F3F0]">
						<div className="flex flex-cols-2 md:gap-2 gap-4 items-center justify-center">
							<div className="flex   ">
								<img src={counter_1_1} alt="" />
							</div>
							<div className="flex flex-col ">
								<p className="text-[70px]  font-dm_sans    font-light leading-[80px] text-[#000000] ">
									25+
								</p>

								<p className="text-[16px]  font-extrabold font-dm_sans         text-[#6E6E6E] ">
									Years of Experience
								</p>
							</div>
						</div>
						<div className="flex flex-cols-2 md:gap-2  gap-4 md:mt-0 mt-[30px] items-center justify-center">
							<div className="flex   ">
								<img src={counter_1_2} alt="" />
							</div>
							<div className="flex flex-col ">
								<p className="text-[70px]  font-dm_sans    font-light leading-[80px] text-[#000000] ">
									100%
								</p>

								<p className="text-[16px]  font-extrabold font-dm_sans         text-[#6E6E6E] ">
									Years of Experience
								</p>
							</div>
						</div>
						<div className="flex flex-cols-2 md:gap-2  gap-4 md:mt-0 mt-[30px] items-center justify-center">
							<div className="flex   ">
								<img src={counter_1_3} alt="" />
							</div>
							<div className="flex flex-col ">
								<p className="text-[70px]  font-dm_sans    font-light leading-[80px] text-[#000000] ">
									56k+
								</p>

								<p className="text-[16px]  font-extrabold font-dm_sans         text-[#6E6E6E] ">
									Satisfied Clients
								</p>
							</div>
						</div>
						<div className="flex flex-cols-2 md:gap-2  gap-4 md:mt-0 mt-[30px] items-center justify-center">
							<div className="flex   ">
								<img src={counter_1_4} alt="" />
							</div>
							<div className="flex flex-col ">
								<p className="text-[70px]  font-dm_sans    font-light leading-[80px] text-[#000000] ">
									36+
								</p>

								<p className="text-[16px]  font-extrabold font-dm_sans         text-[#6E6E6E] ">
									Specialists Team
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img
				src={Courses_leaves}
				alt=""
				className="absolute bottom-0 left-0 animate-bounce-slow"
			/>
			<h5 className="  flex flex-col mt-24  text-center p-2">
				<p className="text-[20px]  font-bold font-cormorant   leading-[26px]   md:text-left text-center text-[#E24486] ">
					Find Your Passion and Unlock Your Potential.
				</p>
				<img src={Hero_Arrow} alt="" />
			</h5>
			<div className="flex w- full  flex-row item-center justify-center ">
				<h3 className="  text-center  ">
					<p className="text-[44px]  font-extrabold font-cormorant  md:text-[48px] leading-[50px] md:leading-[58.9px]  text-center text-[#0D0D0D] ">
						Master Beauty Skills with NAQ
					</p>
				</h3>
			</div>
			{/* <div className="w-full h-fit  ">
				<Slider {...settings} className="custom-slider">
					{courses.map((item, index) => (
						<div
							id="Slider-Boxes"
							key={index}
							className="p-4 shadow-lg min-w-[full] bg-white flex flex-col">
							<img src={item.image} alt="" />
							<div className="mt-2 text-xs text-Teal h-full">
								{item.category}
							</div>
							<div className="text-sm mt-2  font-bold h-full s">
								{item.title}
							</div>

							<div className="flex mt-7">
								<p className="items-center  flex text-Teal text-[12px] ">
									<IoLocationOutline className="text-[16px] text-pink-500 mr-1  " />{" "}
									{item.Place}
								</p>
								<p className="ml-5 items-center flex text-Teal text-[12px] ">
									<FaRegClock className=" mr-1 text-[15px] text-pink-500	" />{" "}
									{item.rating} Months
								</p>
							</div>
							<hr className="" />

							<div className="text-xs mt-2 flex  flex-col-3 text-Teal items-center justify-between h-full">
								<p className="bg-Solitude p-2 rounded-full flex  ">
									<ScrollLink
										to="contact"
										spy={true}
										smooth={true}
										duration={500}
										offset={-50}
										className="hover:text-Rose cursor-pointer ">
										<MdOutlineBookmarkAdd />
									</ScrollLink>
								</p>

								<p className="flex   items-center ">LKR.{item.OfferPrice}</p>
							</div>
						</div>
					))}
				</Slider>
			</div> */}
			<div className="w-full h-fit mt-2 ">
				<Slider {...settings} className="custom-slider">
					{courses.map((item, index) => (
						<div
							id="Slider-Boxes"
							key={index}
							className="p-4 boxShadow1 min-w-[full] bg-white flex relative flex-col overflow  group   overflow-hidden   before:absolute before:top-full before:left-0 before:h-full before:w-full before:bg-[#E24486] before:transition-transform before:duration-500 hover:before:-translate-y-full">
								<img src={Courses_flower} alt="" className="absolute top-0 left-4 group-hover:opacity-10" />
								<img src={Courses_Circle} alt="" className="absolute -right-4 -top-4" />
								<img src={Courses_icon2} alt="" className="absolute right-4 top-4" onClick={toggleForm1} />
							<div className="flex flex-col">
								<div className="flex">
									<img src={item.image} alt="" className="z-10 course-icon transition-all duration-300 " />
								</div>
								<div className="flex flex-col pb-[21px] border-b border-dotted  ">
									<p className="  font-extrabold font-cormorant   text-[30px] leading-[40px]   text-left   text-black  relative z-10 block transition-colors duration-300 group-hover:text-white">
										{item.category}
									</p>
									<p className="font-normal font-dm_sans  text-[16px]  leading-[28px]   text-[#6E6E6E] mt-[10px] relative z-10 block transition-colors duration-300 group-hover:text-white ">
										{item.title}
									</p>
								</div>

								<div>
									<button className="border font-medium px-4 py-2 font-dm_sans  text-[14px]  leading-[14px]   text-[#E24486] mt-[10px] relative z-10 block transition-colors duration-300 group-hover:bg-black group-hover:border-none group-hover:text-white" onClick={toggleForm1}>BOOK NOW</button>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
		{showForm1 && <Form toggleForm={toggleForm1} />}
		
		</>
		
	);
};

export default Courses;
