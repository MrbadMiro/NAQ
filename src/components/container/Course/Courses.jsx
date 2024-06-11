import React from "react";
import { courses } from "../../../Data";
import Course from "./Course";

const Courses = () => {
	
	return (
		<div className="mt-0" id="courses">
			<div className="my-0 overflow-x-hidden w-full flex flex-col items-center justify-center relative">
				<div className="grid lg:grid-cols-5  ss:grid-cols-2  justify-center space-x-auto w-full  ">
					{courses.map((course) => {
						return <Course key={course.id} {...course} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Courses;
