import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Contact_img } from "../../Data";
import Form1 from "./Form";

const Contact2 = () => {
	const [message, setMessage] = useState("");
	const [showForm1, setShowForm1] = useState(false);
	const toggleForm1 = () => {
		setShowForm1(!showForm1);
	};

	const sectionStyle = {
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Contact_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	// const sendEmail = (e) => {
	// 	e.preventDefault();

	// 	const firstName = e.target.firstName.value.trim();
	// 	const lastName = e.target.lastName.value.trim();
	// 	const nic = e.target.nic.value.trim();
	// 	const contactNo = e.target.contactNo.value.trim();
	// 	const email = e.target.email.value.trim();
	// 	const address = e.target.address.value.trim();
	// 	const preferredLocation = e.target.preferredLocation.value;
	// 	const preferredCourses = Array.from(
	// 		e.target.querySelectorAll('input[name="preferredCourses"]:checked')
	// 	).map((checkbox) => checkbox.value);

	// 	if (
	// 		!firstName ||
	// 		!lastName ||
	// 		!nic ||
	// 		!contactNo ||
	// 		!email ||
	// 		!address ||
	// 		!preferredLocation ||
	// 		preferredCourses.length === 0
	// 	) {
	// 		setMessage("Please fill in all required fields.");
	// 		return;
	// 	}

	// 	emailjs
	// 		.sendForm(
	// 			"service_g0brn2t",
	// 			"template_klgt0ew",
	// 			e.target,
	// 			"XXEPDDVnPswb7b0F1"
	// 		)

	// 		.then(
	// 			(result) => {
	// 				console.log(result.text);
	// 				setMessage("Your message has been sent successfully!");
	// 			},
	// 			(error) => {
	// 				console.log(error.text);
	// 				setMessage("An error occurred, please try again later.");
	// 			}
	// 		);
	// };

	return (
		<section className="pl-3 py-5 mt-4" style={sectionStyle} id="contact">
			<div className="flex flex-col gap-5 px-4 xs-px-16 md:my-12">
				<div className="order-1 flex flex-col justify-center items-center md:gap-10">
					<p className="text-2xl font-bold md:text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-pink-700 ">
						Start your journey towards mastering new talents and unleashing your
						creativity.
					</p>
				</div>
				<div className="order-2 bg-pink-50 text-sm font-bold flex flex-col justify-center items-center rounded-xl relative">
					<button
						className="overflow bg-green group relative overflow-hidden text-[12px]  text-white px-4 py-2 before:absolute before:top-full before:left-0 before:h-full before:w-full before:bg-black before:transition-transform before:duration-500 hover:before:-translate-y-full"
						onClick={toggleForm1}>
						<span className="relative z-10 block transition-colors duration-300 group-hover:text-white">
							Become An Employee
						</span>
					</button>
					asas
					
				</div>
			</div>
			{showForm1 && <Form1 toggleForm={toggleForm1} />}
		</section>
	);
};

export default Contact2;
