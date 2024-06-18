import React, { useState } from "react";
import { Gallery_Arow,flower_2,  } from "../../assets";
import { Gallery_data } from "../../Data";

const Gallery = () => {
	const [activeTab, setActiveTab] = useState(1); // Default to Tab 1

	// Filtered services based on activeTab
	const filteredServices = Gallery_data.filter(
		(service) => service.tab === activeTab
	);
	return (
		<div className="py-[150px] bg-[#BE185D] relative w-full flex flex-col items-start justify-center md:px-12 px-6">
			<img src={flower_2} alt=""  className="absolute top-0 right-0 animate-spin-slow"/>
			<div  className="w-full">
				<div data-aos="fade-up" className="flex gap-2">
					<p className="text-[20px]  font-bold font-cormorant   leading-[26px]  text-left text-white ">
						Our Gallery
					</p>
					<img src={Gallery_Arow} alt="" className="animate-bounce-horizontal" />
				</div>

				<div  className="grid md:grid-cols-2 mt-2 items-center justify-between w-full">
					<div data-aos="fade-up" className="flex w-full">
						<p className="text-[48px]  font-bold font-cormorant   leading-[58px]  text-left text-white ">
							Latest Projects Gallery
						</p>
					</div>
					<div data-aos="fade-up" className="grid grid-cols-4 mt-4 md:mt-0 w-full gap-2">
						<div
							className={`tabs ${
								activeTab === 1 ? "active-tabs" : ""
							}border  border-white py-2 px-2   `}
							onClick={() => setActiveTab(1)}>
							<p className="text-center text-[14px]  font-bold font-dm_sans   leading-[26px]    text-white">
								Beauty & Style
							</p>
						</div>
						<div
							className={`tabs ${
								activeTab === 2 ? "active-tabs" : ""
							}border  border-white py-2 px-2  `}
							onClick={() => setActiveTab(2)}>
							<p className="text-center text-[14px]  font-bold font-dm_sans   leading-[26px]    text-white">
								Culinary Delights
							</p>
						</div>
						<div
							className={`tabs ${
								activeTab === 3 ? "active-tabs" : ""
							}border  border-white py-2 px-2 `}
							onClick={() => setActiveTab(3)}>
							<p className="text-center text-[14px]  font-bold font-dm_sans   leading-[26px]    text-white">
								Creative Crafts
							</p>
						</div>
						<div
							className={`tabs ${
								activeTab === 4 ? "active-tabs" : ""
							}border  border-white py-2 px-2 `}
							onClick={() => setActiveTab(4)}>
							<p className="text-center text-[14px]  font-bold font-dm_sans   leading-[26px]    text-white">
								Wellness
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex mt-12  ">
					<div
						className={`content_${activeTab}  w-full  gap-2 grid md:grid-cols-3`}>
						{filteredServices.map((item, index) => (
							<div key={index} data-aos="fade-up"
							data-aos-delay={item.aosDelay} className=" p-1 bg-white  w-full  relative">
								<img
									src={item.image}
									alt=""
									className="h-full w-full object-cover "
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
