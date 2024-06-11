import React from "react";
import about from "../../assets/About.png";

const About = () => {
	const facebookProfileUrl =
		"https://www.facebook.com/profile.php?id=100064323302594&mibextid=ZbWKwL";

	const handleReadMoreClick = () => {
		// Redirect to the Facebook profile URL
		window.location.href = facebookProfileUrl;
	};
	return (
		<div className="section" id="about">
			<div className="grid lg:grid-cols-2   gap-5">
				<div className="overflow-hidden order-1  pr-0">
					<img
						className="run lg:h-[100] xs:h-[80] xs:w-[80] object-cover w-[100%] h-[100%] pb-0 pr-0"
						src={about}
						alt="Hero-image"
					/>
				</div>
				<div className="order-2  flex flex-col justify-center lg:items-left items-center text-center lg:text-left">
					<p className="  w-full text-[12px] lg:text-xl  md:text-xl italic font-normal text-pink-700">
						About NAQ
					</p>
					<p className="text-2xl mt-2  font-bold font-Lora text-center lg:text-left md:text-3xl">
						Dive into Artistic Excellence
						<span className="ml-2 lg:ml-4 font-Lora text:2xl lg:text-5xl text-pink-700">
							Nithiya's Active Queens.
						</span>
					</p>

					<p className="mt-4 mb-2 font-light text-[12px] lg:text-[14px]  text-center  text-wrap lg:text-left">
						Nithiya's Active Queens offers a vibrant tapestry of courses
						designed to ignite your creativity and empower your personal growth.
					</p>
					<p className="mt-2 mb-2 font-light text-[12px] lg:text-[14px]  text-center lg:text-left">
						At NAQ Academy, we believe in transforming lives through the art of
						beauty. Whether you're a budding entrepreneur or an aspiring makeup
						artist, our courses are designed to empower you with the skills and
						knowledge you need to thrive.
					</p>
					<p className="mt-2 mb-2 font-light text-[12px] lg:text-[14px]    text-center lg:text-left">
						Join us and discover your true potential in the world of beauty.
						Let's embark on this exciting journey together!
					</p>
					<div className="w-full grid  sm:grid-cols-3  mt-4   item-center text-center lg:text-left">
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
					</div>
					<div className="w-full mt-2">
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
