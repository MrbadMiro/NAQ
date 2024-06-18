import Gallery from "./components/container/Gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import {
	Home,
	About,
	Progress,
	Testimonial,
	Contact,
	Footer,
	Courses,
	Contact2,
	Header,
} from "./components/index";

function App() {
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: "ease-in-sine",
			delay: 100,
		});
		AOS.refresh();
	}, []);
	return (
		<div className="  overflow-x-hidden  ">
			<Header />
			<Home />
			<About />
			<Courses />
			<Gallery />
			<Progress />
			<Contact />
			{/* <Contact2/> */}
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
