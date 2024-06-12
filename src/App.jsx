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
	return (
		<div className="font-Poppins  ">
			<Header />
			<Home />
			<About />
			<Courses />

			<Progress />
			<Contact />
			{/* <Contact2/> */}
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
