import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import React from "react";
import { Signup_img } from "../../Data";
import { logo } from "../../Data";

const Footer2 = () => {
	const sectionStyle = {
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Signup_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<section className=" w-full px-6 lg:px-16 mt-0 pt-0 bg-white">
			<div className="flex flex-col relative h-full">
				<div
					className=" flex flex-col justify-center items-center w-full absolute rounded-xl py-4 px-6 -top-20  "
					style={sectionStyle}>
					<div className="order-2 lg:order-1 flex flex-col justify-center items-center gap-3">
						<p className="text-[12px] lg:text-xs font-bold  text-black-200  text-white">
							Join our vibrant community and embark on a journey of
							self-discovery and empowerment.
						</p>
						<p className="text-xl  lg:text-3xl font-bold md:text-2xl text-black-200 decoration-transparent text-white">
							Ready to Unleash Your Inner Queen? Sign Up Now!
						</p>
						<ScrollLink
							to="contact"
							spy={true}
							smooth={true}
							duration={500}
							offset={-50}
							className="hover:text-Rose cursor-pointer">
							<button className="bg-pink-700 px-4 lg:px-6 py-2 text-border-white  text-left font-medium text-xs text-white rounded-full">
								Enroll Now
							</button>
						</ScrollLink>
					</div>
				</div>
				<div className="mt-3 lg:mt-1">
					<div className="grid  mt-24 lg:grid-cols-3 gap-5    lg:pt-30 justify-between  px-16 mx-auto ">
						<div className="  flex flex-col ">
							<div className="mt-8 lg:mt-0">
								<img src={logo} alt="" className="w-[60px] h-[60px] " />
							</div>

							<p className="mt-4 leading-2 text-[13px] font-medium text-wrap	 ">
								Nithiya's Active Queens is your one-stop destination for empowering transformations. 
								Discover a world of beauty,creativity, and entrepreneurial possibilities.
							</p>
							<div className="flex w-full text-pink-700  gap-8 mt-4 text-xl">
								<FaFacebookSquare />
								<FaSquareInstagram />
								<FaYoutube />
							</div>
						</div>
						<div className=" text-xl sm:text-2xl 	font-bold">
							<p className="font-medium text-[20px]">Courses</p>
							<div className="grid   grid-cols gap-2   w-full pt-4 ">
								<div className="w-full text-xs ">
									<p className="mb-1 font-medium">
										Makeup & Hairstyling Essentials
									</p>
									<p className="mb-1 font-medium">Cake Baking & Decorating </p>
									<p className="mb-1 font-medium">Aari Embroidery</p>
									<p className="mb-1 font-medium">Henna</p>
									<p className="mb-1 font-medium">Tailoring</p>
									<p className="mb-1 font-medium">Jewelry Making</p>
									<p className="mb-1 font-medium">Weight Loss and Fitness </p>
								</div>
							</div>
						</div>
						<div className="">
							<p className=" text-[20px] text-justify leading-6	font-medium">
								Contact Us
							</p>
							<div className="mt-4 text-xs font-normal ">
								<p className="py-1 flex items-center gap-2">
									<FaPhoneAlt className="text-pink-700" /> 0771234567
								</p>
								<p className="py-1 flex items-center gap-2">
									<AiOutlineMail className="text-pink-700" /> 123@gmail.com
								</p>
								<p className="py-1 flex items-center gap-2">
									<IoLocationOutline className="text-pink-700" />
									jaffna,srilana
								</p>
							</div>
						</div>
					</div>
					<hr className="mt-2" />
					<div className=" mt-0 ">
						<p className="text-center text-[14px] font-bold  py-4 text-pink-600">
							{" "}
							© 2024 Nithya Active Queens All Rights Reserved. Powered By Tetra
							VI.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer2;
