import React from "react";
import Slider from "react-slick"; // Assuming you have react-slick installed
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../Data";
import { MdFormatQuote } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import { flower_3,flower_2,About_leaves,Courses_leaves,	flower_4, } from "../../assets";

const Testimonial = () => {
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
		<section className="w-full bg-pink-50 flex flex-col items-center  relative justify-center pt-[200px] pb-[200px] px-6 md:px-12 gap-6  ">
			<img src={flower_4} alt=""  className="absolute top-0 left-0 opacity-70"/>
			<img src={flower_4} alt=""  className="absolute bottom-0 right-0 rotate-180  opacity-70"/>
			<h5 className=" text-pink-700  text-center p-2">Testimonials</h5>
			<div className="flex w- full  flex-row item-center justify-center mb-6">
				<h3 className="text-[44px]  font-extrabold font-cormorant  md:text-[58px] leading-[50px] md:leading-[64px] md:text-left text-center text-[#0D0D0D] ">
					What Our Students Say About Courses{" "}
				</h3>
				
			</div>
			<div className="w-full h-fit pb-6 ">
				<Slider {...settings} className="custom-slider" >
					{data.map((item, index) => (
						<div
							id="Slider-Boxes"
							key={index}
							className="p-10 rounded-3xl boxShadow1 flex flex-col relative  z-12 cursor-pointer group bg-white">
							<img src={flower_3} alt=""  className="absolute top-0 right-0"/>
							<img src={Courses_leaves} alt=""  className="absolute w-[80px] left-0 bottom-0  "/>
						 	<div className="	 -top-10 left-1/2 transform -translate-x-1/2    absolute    p-4 rounded-full  ">
								<img
									src={item.img}
									alt="ddd"
									className="rounded-full w-[100px] h-[100px] border-2 p-2 bottom-3 object-cover border-pink-600"
								/>
							</div>

							<p>
								{item.quote && (
									<p className="text-xs font-medium text-center px-1 mt-16 mb-2">
										{item.quote}
									</p>
								)}
							</p>

							
							<div className="flex flex-row items-center gap-2 justify-center mt-5">
								

								<p>
									{item.quote && (
										<p className="text-xs text-Teal mt-2">{item.name}</p>
									)}
								</p>
								
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Testimonial;
