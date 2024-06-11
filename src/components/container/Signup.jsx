import React from "react";
import { Signup_img } from "../../Data";
import { Link as ScrollLink } from "react-scroll";
const Signup = () => {
	const sectionStyle = {
		backgroundImage: `url(${Signup_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<section className="pl-3 py-5" style={sectionStyle}>
			<div className=" flex flex-col justify-center items-center px-16 ">
				<div className="order-2 lg:order-1 flex flex-col justify-center items-center gap-3">
					<p className="text-xs font-bold md:text-xs text-black-200 decoration-transparent text-pink-700">
						Join our vibrant community and embark on a journey of self-discovery
						and empowerment.
					</p>
					<p className="text-3xl font-bold md:text-4xl text-black-200 decoration-transparent text-pink-700">
						Ready to Unleash Your Inner Queen? Sign Up Now!
					</p>
					<ScrollLink
						to="contact"
						spy={true}
						smooth={true}
						duration={500}
						offset={-50}
						className="hover:text-Rose cursor-pointer">
						<button className="bg-pink-700 px-6 py-2 text-border-white  text-left font-medium text-xs text-white rounded-full">
							Enroll Now
						</button>
					</ScrollLink>
				</div>
			</div>
		</section>
	);
};

export default Signup;
