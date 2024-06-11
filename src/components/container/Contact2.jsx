import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Contact_img } from "../../Data";

const Contact2 = () => {
	const [message, setMessage] = useState("");
	const sectionStyle = {
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Contact_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const sendEmail = (e) => {
		e.preventDefault();

		const firstName = e.target.firstName.value.trim();
		const lastName = e.target.lastName.value.trim();
		const nic = e.target.nic.value.trim();
		const contactNo = e.target.contactNo.value.trim();
		const email = e.target.email.value.trim();
		const address = e.target.address.value.trim();
		const preferredLocation = e.target.preferredLocation.value;
		const preferredCourses = Array.from(
			e.target.querySelectorAll('input[name="preferredCourses"]:checked')
		).map((checkbox) => checkbox.value);

		if (
			!firstName ||
			!lastName ||
			!nic ||
			!contactNo ||
			!email ||
			!address ||
			!preferredLocation ||
			preferredCourses.length === 0
		) {
			setMessage("Please fill in all required fields.");
			return;
		}

		emailjs
			.sendForm(
				"service_g0brn2t",
				"template_klgt0ew",
				e.target,
				"XXEPDDVnPswb7b0F1"
			)

			.then(
				(result) => {
					console.log(result.text);
					setMessage("Your message has been sent successfully!");
				},
				(error) => {
					console.log(error.text);
					setMessage("An error occurred, please try again later.");
				}
			);
	};

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
					<form
						onSubmit={sendEmail}
						className=" mt-4 px-5 py-5 font-semibold flex flex-col justify-center items-center">
						<h3 className="text-3xl text-center ">
							Join Our Exciting{" "}
							<span className="text-pink-700 mr-1">Courses</span>
							Today!
						</h3>
						<p className="mt-2 text-wrap text-center text-[12px] lg:text-[14px] font-normal">
							Whether you're passionate about makeup artistry, crafting, baking,
							or more, our expert-led programs are designed to empower you with
							practical knowledge and hands-on experience.
						</p>
						<div className="grid lg:grid-cols-2  gap-5 w-full ">
							<div className="w-full  ">
								<div className=" mt-2  mx-auto w-full grid lg:grid-cols-2  gap-4  ">
									<input
										type="text"
										name="firstName"
										id="firstName"
										className="rounded-md px-2 py-2 text-ml-20 outline-none bg-white w-full"
										placeholder="First Name"
										required
									/>
									<input
										type="text"
										name="lastName"
										id="lastName"
										className="rounded-md px-2 py-2 bg-white outline-none w-full"
										placeholder="Last Name"
										required
									/>
								</div>
								<div className="mt-2  mx-auto w-full ">
									<input
										type="text"
										id="nic"
										name="nic"
										className="outline-none rounded-md bg-white p-2 w-full"
										placeholder="Nic Number"
										required
									/>
								</div>
								<div className="mt-2   mx-auto w-full ">
									<input
										type="text"
										id="contactNo"
										name="contactNo"
										className="outline-none rounded-md bg-white p-2 w-full"
										placeholder="Contact Number"
										required
									/>
								</div>
								<div className="mt-2    mx-auto w-full">
									<input
										type="email"
										id="email"
										name="email"
										className="outline-none rounded-md bg-white p-2 w-full"
										placeholder="Email Address"
										required
									/>
								</div>
								<div className="mt-2 flex justify-center items-center  mx-auto w-full">
									<textarea
										id="address"
										name="address"
										maxLength="100"
										className="outline-none rounded-md   bg-white p-2 w-full"
										placeholder="Address"
										required></textarea>
								</div>
							</div>

							<div className="w-full">
								<div className="mt-2  mb-4 mx-auto w-full px-4 font-normal bg-white ">
									<select
										id="preferredLocation"
										name="preferredLocation"
										className="outline-none rounded-md  py-2 w-full bg-white"
										required>
										<option value="">Select Location</option>
										<option value="Jaffna">Jaffna</option>
										<option value="Killinochi">Killinochi</option>
										<option value="Mullaitiviu">Mullaitiviu</option>
										<option value="Vavuniya">Vavuniya</option>
									</select>
								</div>
								<div
									className="mt-2  mb-4 mx-auto w-full px-4 py-4 font-normal bg-white"
									required>
									<label htmlFor="preferredCourses" className="form-label   ">
										Preferred Courses
									</label>
									<div className="mt-2">
										<div className="flex gap-1 items-center">
											<input
												type="checkbox"
												name="preferredCourses"
												id="makeup"
												value="Makeup & Hairstyling Essentials"
											/>
											<label htmlFor="weightLoss" className="text-[12px]">
												{" "}
												Makeup & Hairstyling Essential
											</label>
										</div>
										<div className="flex gap-1 items-center">
											<input
												type="checkbox"
												name="preferredCourses"
												id="cakeBaking"
												value="Cake Baking & Decorating"
											/>
											<label htmlFor="weightLoss" className="text-[12px]">
												{" "}
												Cake Baking & Decorating
											</label>
										</div>

										<div className="flex gap-1 items-center">
											<input
												type="checkbox"
												name="preferredCourses"
												id="aari"
												value="Aari Embroidery"
											/>
											<label htmlFor="weightLoss" className="text-[12px]">
												{" "}
												Aari Embroidery
											</label>
										</div>
										<div className="flex gap-1 items-center">
											<input
												type="checkbox"
												name="preferredCourses"
												id="tailoring"
												value="Tailoring"
											/>
											<label htmlFor="diet" className="text-[12px]">
												{" "}
												Tailoring
											</label>
										</div>
										<div className="flex gap-1 items-center">
											<input
												type="checkbox"
												name="preferredCourses"
												id="aariEmbroidery"
												value="Aari Embroidery"
											/>
											<label htmlFor="aariEmbroidery" className="text-[12px]">
												{" "}
												Aari Embroidery
											</label>
										</div>
										<div className="flex gap-1 items-center">
											<input
												type="checkbox"
												name="preferredCourses"
												id="Henna"
												value="Henna"
											/>
											<label htmlFor="Henna" className="text-[12px]">
												{" "}
												Henna
											</label>
										</div>
										<div className="flex gap-1 items-center">
											<input
												type="checkbox"
												name="preferredCourses"
												id="jewelryMaking"
												value="jewelryMaking"
											/>
											<label htmlFor="jewelryMaking" className="text-[12px]">
												{" "}
												jewelryMaking
											</label>
										</div>
										<div className="flex gap-1 items-center">
											<input
												type="checkbox"
												name="preferredCourses"
												id="Weight"
												value="Weight Loss and Fitness"
											/>
											<label
												htmlFor="Weight Loss and Fitness"
												className="text-[12px]">
												{" "}
												Weight Loss and Fitness
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mb-4 flex flex-col">
							<div className="w-full flex items-center justify-center">
								<button
									className="bg-pink-700 px-4 py-2 text-border-white  text-left font-medium text-xs text-white rounded-full"
									type="submit">
									Submit
								</button>
							</div>

							{message && (
								<p className="text-center text-black mt-2 p-2 mx-auto w-full">
									{message}
								</p>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact2;
