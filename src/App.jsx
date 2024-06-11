import Footer2 from "./components/container/Footer2";
import {
	Navbar,
	Home,
	About,
	Progress,
	Testimonial,
	Contact,
	Footer,
	Courses,
	Contact2,
} from "./components/index";

function App() {
	return (
		<div className="font-Poppins bg-Solitude">
			<Navbar />
			<Home />
			<Courses />
			<About />
			<Progress />
			<Contact />
			{/* <Contact2/> */}
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
