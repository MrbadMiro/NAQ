import React from "react";
import about from "../../assets/About.png";
import {
	About_leaves,
	About_flower,
	courses_img1,
	courses_img2,
	courses_img3,
	courses_img4,
	About_Arrow2,
} from "../../assets";

const About = () => {
	const facebookProfileUrl =
		"https://www.facebook.com/profile.php?id=100064323302594&mibextid=ZbWKwL";

	const handleReadMoreClick = () => {
		// Redirect to the Facebook profile URL
		window.location.href = facebookProfileUrl;
	};
	return (
		<div className="section relative mb-[500px] mt-[100px] md:my-[100px]  " id="about">
			<img
				src={About_leaves}
				alt=""
				className="absolute -right-[100px] -z-1 top-0 animate-bounce-slow"
			/>
			<div className="grid md:grid-cols-2 w-full   ">
				{/* left SIDE */}
				<div className="flex  order-1 w-full  justify-end px-6 relative">
					<img
						className="h-[500px] w-[387px] object-cover rounded-t-[300px] "
						src={courses_img3}
						alt="Hero-image"
					/>
					<div className="absolute -left-4">
						<img
							className=" -z-10 h-[500px] w-[387px] object-cover rounded-t-[300px] -left-4  bottom-0  "
							src={courses_img1}
							alt="Hero-image"
						/>
						<img
							src={About_flower}
							alt=""
							className="absolute left-[-180px] -bottom-12  z-10 animate-bounce-horizontal"
						/>
					</div>
				</div>
				{/* Right Side */}
				<div className="order-2 mt-[50px] md:mt-0 w-full flex flex-col justify-center   items-center md:items-start text-center lg:text-left">
					<div className="flex gap-2 ">
						<p className="  text-[20px]  font-bold font-cormorant    leading-[26px]  md:text-left text-center text-[#E24486] ">
							About NAQ
						</p>
						<img src={About_Arrow2} alt=""  className="animate-bounce-horizontal"/>
					</div>
					<div className="flex flex-col w-full">
					<p className="  w-full font-extrabold font-cormorant  text-[38px] leading-[48.5px]   md:text-left text-center text-[#0D0D0D] ">
						Dive into Artistic Excellence <br />
						<span className="  text-pink-700">
							Nithiya's Active Queens.
						</span>
					</p>

					<p className="mt-[20px]  font-normal font-dm_sans  text-[16px]  leading-[28px] md:text-left text-center text-[#6E6E6E] ">
						Nithiya's Active Queens offers a vibrant tapestry of courses
						designed to ignite your creativity and empower your personal growth.
						At NAQ Academy, we believe in transforming lives through the art of
						beauty. Whether you're a budding entrepreneur or an aspiring makeup
						artist, our courses are designed to empower you with the skills and
						knowledge you need to thrive.
					</p>
					
					<p className="mt-[20px]  font-normal font-dm_sans  text-[16px]  leading-[28px] md:text-left text-center text-[#6E6E6E]">
						Join us and discover your true potential in the world of beauty.
						Let's embark on this exciting journey together!
					</p>

					</div>

				
					{/* <div className="w-full grid  sm:grid-cols-3  mt-4   item-center text-center lg:text-left">
						<div className="w-full mb-2 ">
							<h3 className="text-2xl font-bold md:text-4xl text-pink-700">
								50+
							</h3>
							<h5 className="font-semibold text-xs ">Happy Customers</h5>
						</div>
						<div className="w-full mb-2 ">
							<h3 className="text-2xl font-bold md:text-4xl text-pink-700 ">
								6+
							</h3>
							<h5 className="font-semibold text-xs ">Years of Experience</h5>
						</div>
						<div className=" w-full mb-2 ">
							<h3 className="text-2xl font-bold md:text-4xl text-pink-700 ">
								6
							</h3>
							<h5 className="font-semibold w-full text-xs ">Courses</h5>
						</div>
					</div> */}
					<div className="w-full mt-4">
						<a
							href={facebookProfileUrl}
							target="_blank"
							rel="noopener noreferrer">
							<button
								className="bg-pink-700 hover:bg-pink-400 px-4 py-2 font-medium text-xs text-white rounded-full"
								onClick={handleReadMoreClick}>
								Read More
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
