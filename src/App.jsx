import Gallery from "./components/container/Gallery";
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
		<div className="font-Poppins bg-[#FDF2F8] ">
			<Header />
			<Home />
			<About />
			<Courses />
            <Gallery/>
			<Progress />
			<Contact />
			{/* <Contact2/> */}
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;