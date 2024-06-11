import React from "react";
import Slider from "react-slick"; // Assuming you have react-slick installed
import { IoLocationOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courses } from "../../Data";
import { Link as ScrollLink } from "react-scroll";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
const Courses = () => {
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
		<section className="w-full bg-pink-50 flex flex-col items-center justify-center py-24 px-6 lg:px-20 lg:p-24 gap-6  " id="courses">
			<h5 className=" text-pink-700   text-center p-2">
				Find Your Passion and Unlock Your Potential.
			</h5>
			<div className="flex w- full  flex-row item-center justify-center ">
				<h3 className="text-3xl text-center font-Lora">
					Master Beauty Skills with NAQ
				</h3>
			</div>
			<div className="w-full h-fit p-6 ">
				<Slider {...settings}  className="custom-slider" >
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
									<IoLocationOutline className="text-[16px] text-pink-500 mr-1  " /> {item.Place}
								</p>
								<p className="ml-5 items-center flex text-Teal text-[12px] ">
									<FaRegClock className=" mr-1 text-[15px] text-pink-500	" /> {item.rating} Months
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
			</div>
		</section>
	);
};

export default Courses;
