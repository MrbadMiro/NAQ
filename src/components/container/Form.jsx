import React, { useRef, useState } from "react";
import { HiX } from "react-icons/hi";

const Form = ({ toggleForm }) => {
	const [successMessage, setSuccessMessage] = useState(null);
	const formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(
			"https://script.google.com/macros/s/AKfycbySWyOj3fJKkqpzRI_X2RLyxpEfb5HZvrOc7TEqGc2jeTITyoSlIA5CnS4WEFRu0MQw/exec",
			{
				method: "POST",
				body: new FormData(formRef.current),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSuccessMessage(data.msg || "Form submitted successfully.");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="fixed px-3 top-0 left-0 h-full w-[100vw]  bg-black bg-opacity-50 flex justify-center items-center z-30">
			<div className="bg-white p-8 rounded-lg relative max-h-[90%] overflow-y-auto ">
				<h2 className="text-lg font-bold mb-4">Employee Details Form</h2>
				<form className=" mt-4 px-5 py-5 font-semibold flex flex-col justify-center items-center">
					<div className="flex flex-col  gap-5 w-full ">
						<div className="w-full  ">
							<div className=" mt-2  mx-auto w-full grid lg:grid-cols-2  gap-4  ">
								<input
									type="text"
									name="firstName"
									id="firstName"
									className="rounded-md px-2 py-2 text-ml-20 outline-none bg-[#f2f3f5] w-full"
									placeholder="First Name"
									required
								/>
								<input
									type="text"
									name="lastName"
									id="lastName"
									className="rounded-md px-2 py-2 bg-[#f2f3f5] outline-none w-full"
									placeholder="Last Name"
									required
								/>
							</div>
							<div className="mt-2  mx-auto w-full ">
								<input
									type="text"
									id="nic"
									name="nic"
									className="outline-none rounded-md bg-[#f2f3f5] p-2 w-full"
									placeholder="Nic Number"
									required
								/>
							</div>
							<div className="mt-2   mx-auto w-full ">
								<input
									type="text"
									id="contactNo"
									name="contactNo"
									className="outline-none rounded-md bg-[#f2f3f5] p-2 w-full"
									placeholder="Contact Number"
									required
								/>
							</div>
							<div className="mt-2    mx-auto w-full">
								<input
									type="email"
									id="email"
									name="email"
									className="outline-none rounded-md bg-[#f2f3f5] p-2 w-full"
									placeholder="Email Address"
									required
								/>
							</div>
							<div className="mt-2 flex justify-center items-center  mx-auto w-full">
								<textarea
									id="address"
									name="address"
									maxLength="100"
									className="outline-none rounded-md   bg-[#f2f3f5] p-2 w-full"
									placeholder="Address"
									required></textarea>
							</div>
						</div>

						<div className="w-full">
							<div className="mt-2  mb-4 mx-auto w-full px-4 font-normal bg-[#f2f3f5] ">
								<select
									id="preferredLocation"
									name="preferredLocation"
									className="outline-none rounded-md  py-2 w-full bg-[#f2f3f5]"
									required>
									<option value="">Select Location</option>
									<option value="Jaffna">Jaffna</option>
									<option value="Killinochi">Killinochi</option>
									<option value="Mullaitiviu">Mullaitiviu</option>
									<option value="Vavuniya">Vavuniya</option>
								</select>
							</div>
							<div
								className="mt-2  mb-4 mx-auto w-full px-4 py-4 font-normal bg-[#f2f3f5]"
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

						{/* {message && (
								<p className="text-center text-black mt-2 p-2 mx-auto w-full">
									{message}
								</p>
							)} */}
					</div>
				</form>
				{successMessage && <p className="mt-4 text-green">{successMessage}</p>}
				<HiX
					className="absolute right-4 top-6 text-2xl cursor-pointer text-navy"
					onClick={toggleForm}
				/>
			</div>
		</div>
	);
};

export default Form;
