import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Signup_img } from "../../Data";
import { logo } from "../../Data";
import { Courses_bg } from "../../assets";
import { Courses_leaves, About_leaves, flower_4 } from "../../assets";
import Form from "./Form";
const Footer = () => {
	const [showForm1, setShowForm1] = useState(false);
	const toggleForm1 = () => {
		setShowForm1(!showForm1);
	};
	const sectionStyle = {
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Signup_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	const sectionStyle2 = {
		backgroundImage: ` url(${Courses_bg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<>
			<div
				className=" w-full flex flex-col items-center relative justify-center md:px-12 px-6  boxShadow2 mt-0 pt-0 bg-[#F9F3F0]]"
				style={sectionStyle2}>
				<img
					src={Courses_leaves}
					alt=""
					className="hidden md:flex absolute bottom-0 -right-8 rotate-180"
				/>
				<img
					src={flower_4}
					alt=""
					className="absolute bottom-0 left-0 opacity-70"
				/>

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
								<button
									className="bg-pink-700 px-4 lg:px-6 py-2 text-border-white  text-left font-medium text-xs text-white rounded-full"
									onClick={toggleForm1}>
									Enroll Now
								</button>
							</ScrollLink>
						</div>
					</div>
					<div className="mt-3 md:mt-1">
						<div className="grid  mt-24  md:grid-cols-4 gap-5  grid-col  md:pt-30 justify-between    ">
							<div className="  flex flex-col md:col-span-2 ">
								<div className="mt-8 lg:mt-0">
									<img src={logo} alt="" className="w-[60px] h-[60px] " />
								</div>

								<p className="mt-[20px]  font-normal font-dm_sans  text-[16px]  leading-[28px]  text-left   text-[#6E6E6E] ">
									Nithiya's Active Queens is your one-stop destination for
									empowering transformations. Discover a world of
									beauty,creativity, and entrepreneurial possibilities.
								</p>
								<div className="flex mt-2 flex-col">
									<p className="font-semibold font-dm_sans  text-[18px]  leading-[28px]  text-left   text-black">
										We Are Available:
									</p>
									<p className="   font-normal font-dm_sans  text-[16px]  leading-[28px]  text-left   text-[#6E6E6E] ">
										Mon-Sat: 08.00 am to 5.00 pm
									</p>
								</div>
								<p className=""></p>
								<div className="flex w-full text-pink-700  gap-8 mt-4 text-xl">
									<div className="p-1 bg-[#EFEFEF] boxShadow2">
										<FaFacebookSquare />
									</div>
									<div className="p-1 bg-[#EFEFEF] boxShadow2">
										<FaSquareInstagram />
									</div>
									<div className="p-1 bg-[#EFEFEF] boxShadow2">
										<FaYoutube />
									</div>
								</div>
							</div>
							<div className=" text-xl sm:text-2xl 	font-bold">
								<p className="font-medium text-[20px]">Courses</p>
								<div className="grid   grid-cols gap-2   w-full pt-4 ">
									<div className="w-full  font-normal font-dm_sans  text-[16px]  leading-[28px]   text-[#6E6E6E] ">
										<p className="mb-1 font-medium">
											Makeup & Hairstyling Essentials
										</p>
										<p className="mb-1 font-medium">
											Cake Baking & Decorating{" "}
										</p>
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
								<div className="mt-4 text-xs font-normal flex flex-col gap-2 ">
									<div className="flex flex-col">
										<p>Phone Number</p>
										<p className="py-1 flex items-center gap-2 font-normal font-dm_sans  text-[16px]  leading-[28px]   text-[#6E6E6E]">
											<div className="p-1 bg-[#EFEFEF] boxShadow2">
												<FaPhoneAlt className="text-pink-700" />
											</div>{" "}
											0768408628
										</p>
									</div>
									<div className="flex flex-col">
										<p>Email Address</p>
										<p className="py-1 flex items-center gap-2 font-normal font-dm_sans  text-[16px]  leading-[28px]   text-[#6E6E6E]">
											<div className="p-1 bg-[#EFEFEF] boxShadow2">
												<AiOutlineMail className="text-pink-700" />
											</div>{" "}
											123@gmail.com
										</p>{" "}
									</div>
									<div className="flex flex-col">
										<p>Office Location</p>
										<p className="py-1 flex  gap-2 font-normal font-dm_sans  text-[16px]  leading-[28px]   text-[#6E6E6E]">
											<div className="">
												<div className="p-1 bg-[#EFEFEF] boxShadow2">
													<IoLocationOutline className="text-pink-700" />
												</div>
											</div>
											Second Floor, People's Bank Building, Stanley Road, Jaffna
											Town
										</p>
										<p className="py-1 flex  gap-2 font-normal font-dm_sans  text-[16px]  leading-[28px]   text-[#6E6E6E]">
											<div className="">
												<div className="p-1 bg-[#EFEFEF] boxShadow2">
													<IoLocationOutline className="text-pink-700" />
												</div>
											</div>
											Nelliady Town Near Rubins Hospital
										</p>
									</div>
								</div>
							</div>
						</div>
						<hr className="mt-2" />
						<div className=" mt-0 ">
							<p className="text-center text-[14px] font-bold  py-4 text-pink-600">
								{" "}
								© 2024 Nithya Active Queens All Rights Reserved. Powered By
								Tetra VI.
							</p>
						</div>
					</div>
				</div>
			</div>
			{showForm1 && <Form toggleForm={toggleForm1} />}
		</>
	);
};

export default Footer;
