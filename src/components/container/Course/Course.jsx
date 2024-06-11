import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Course = ({ image, category, title, rating }) => {
	return (
		<div className="p-4 shadow-lg min-w-[full] bg-white flex flex-col  ">
			<img src={image} alt="" />
			<div className="mt-2 text-xs text-Teal h-full">{category}</div>
			<div className="text-sm mt-2  font-bold h-full">{title}</div>
			<div className="flex items-center justify-between mb-0 h-full">
				<div className="flex items-center gap-2 ">
					<div className="bg-Solitude p-1 rounded-full">
						<FaRegClock className="text-Teal" />
					</div>
					<div className="text-sm font-bold bottom-0">{rating} hours</div>
				</div>
				<div className="flex items-center gap-2">
					<div className="bg-Solitude p-1 rounded-full">
						<ScrollLink
							to="contact"
							spy={true}
							smooth={true}
							duration={500}
							offset={-50}
							className="hover:text-Rose cursor-pointer">
							
							<MdOutlineBookmarkAdd />
						</ScrollLink>
					</div>
					<div className="text-sm font-bold"></div>
				</div>
			</div>
		</div>
	);
};

export default Course;
