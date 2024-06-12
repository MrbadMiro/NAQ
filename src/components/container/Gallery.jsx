import React from "react";
import { Gallery_Arow } from "../../assets";

const Gallery = () => {
	return (
		<div className="py-24 bg-[#BE185D] w-full flex flex-col items-start justify-center md:px-12 px-6">
			<div className="w-full">
				<div className="flex gap-2">
					<p className="text-[20px]  font-bold font-cormorant   leading-[26px]  text-left text-white ">
						Our Gallery
					</p>
					<img src={Gallery_Arow} alt="" />
				</div>

				<div className="grid md:grid-cols-2 mt-2 items-center justify-between w-full">
					<div className="flex w-full">
						<p className="text-[48px]  font-bold font-cormorant   leading-[58px]  text-left text-white ">Latest Projects Gallery</p>
					</div>
					<div className="flex w-full gap-4">
            <div className="border  border-white py-2 px-2"><p className="text-center text-[14px]  font-bold font-dm_sans   leading-[26px]    text-white">Beauty & Style</p></div>
            <div className="border  border-white py-2 px-2"><p className="text-center text-[14px]  font-bold font-dm_sans   leading-[26px]    text-white">Culinary Delights</p></div>
            <div className="border  border-white py-2 px-2"><p className="text-center text-[14px]  font-bold font-dm_sans   leading-[26px]    text-white">Creative Crafts</p></div>
            <div className="border  border-white py-2 px-2"><p className="text-center text-[14px]  font-bold font-dm_sans   leading-[26px]    text-white">Wellness</p></div>
            
          </div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
