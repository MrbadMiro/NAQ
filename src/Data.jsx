import { FaInstagram } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { TbHeadset } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

import Contact_img from "./assets/Contact_img.jpg";
import Signup_img from "./assets/Signup.jpg";

import Footer_img1 from "./assets/Footer_img1.jpg";
import Footer_img2 from "./assets/Footer_img2.jpg";
import Footer_img3 from "./assets/Footer_img3.jpg";
import Footer_img4 from "./assets/Footer_img4.jpg";
import Footer_img5 from "./assets/Footer_img5.jpg";
import Footer_img6 from "./assets/Footer_img6.jpg";

import courses1 from "./assets/Courses_img1.jpg";
import courses2 from "./assets/Courses_img1.jpg";
import courses3 from "./assets/Courses_img3.jpg";
import courses4 from "./assets/Courses_img4.jpg";
import courses5 from "./assets/Courses_img5.jpg";
import courses6 from "./assets/Courses_img6.jpg";
import courses7 from "./assets/Courses_img7.jpg";
import Testimonial_1 from "./assets/Testimonial_1.jpg";
import Testimonial_2 from "./assets/Testimonial_2.jpg";
import Testimonial_3 from "./assets/Testimonial_3.jpg";
import logo from "./assets/logo.png";

export {
	logo,
	Contact_img,
	Signup_img,
	Footer_img1,
	Footer_img2,
	Footer_img3,
	Footer_img4,
	Footer_img5,
	Footer_img6,
	FaInstagram,
	HiOutlineShoppingBag,
	FaHouseChimneyUser,
	GiNotebook,
	TbHeadset,
	IoChatboxEllipsesOutline,
	FaRegClock,
};

export const navLinks = [
	{
		id: 1,
		href: "home",
		link: "Home",
	},
	{
		id: 2,
		href: "courses",
		link: "Courses",
	},
	{
		id: 3,
		href: "contact",
		link: "Contact",
	},
];

export const courses = [
	{
		id: 1,
		image: courses1,
		category: " Beauty & Style",
		title: "Makeup & Hairstyling Essentials",
		rating: 3,
		CoursePrice: 4000,
		OfferPrice: 5000,
		Place: "Killinochi",
	},
	{
		id: 2,
		image: courses2,
		category: "Culinary Delights",
		title: "Cake Baking & Decorating",
		rating: 3,
		CoursePrice: 7777,
		OfferPrice: 4444,
		Place: "Jaffna",
	},
	{
		id: 3,
		image: courses3,
		category: "Creative Crafts",
		title: "Aari Embroidery",
		rating: 3,
		CoursePrice: 12000,
		OfferPrice: 7000,
		Place: "Killinochi",
	},
	{
		id: 4,
		image: courses4,
		category: "Creative Crafts",
		title: "Tailoring",
		rating: 3,
		CoursePrice: 17000,
		OfferPrice: 15000,
		Place: "Mullaitivu",
	},
	{
		id: 5,
		image: courses5,
		category: "Beauty & Style",
		title: "Henna",
		rating: 3,
		CoursePrice: 30000,
		OfferPrice: 23000,
		Place: "Jaffna",
	},
	{
		id: 6,
		image: courses6,
		category: "Beauty & Style",
		title: " Jewelry Making",
		rating: 3,
		CoursePrice: 30000,
		OfferPrice: 23000,
		Place: "Killinochi",
	},
	{
		id: 7,
		image: courses7,
		category: "Wellness",
		title: "Weight Loss and Fitness",
		rating: 3,
		CoursePrice: 30000,
		OfferPrice: 23000,
		Place: "Vavuniya",
	},
];

export const Gallery_data = [
	{
		id: 1,
		image: courses1,
		tab: 1,
	},
	{
		id: 2,
		image: courses1,
		tab: 1,
	},
	{
		id: 3,
		image: courses1,
		tab: 1,
	},
	{
		id: 4,
		image: courses1,
		tab: 1,
	},
	{
		id: 5,
		image: courses1,
		tab: 2,
	},
	{
		id: 5,
		image: courses1,
		tab: 2,
	},
	{
		id: 6,
		image: courses1,
		tab: 2,
	},
	{
		id: 7,
		image: courses1,
		tab: 3,
	},
	{
		id: 8,
		image: courses1,
		tab: 4,
	},
];

export const data = [
	{
		id: 1,
		quote:
			"Nithiya's Active Queens helped me discover my passion for makeup artistry. The instructors were incredibly supportive and the classes were so much fun!",
		img: Testimonial_1, // Replace with actual image paths
		name: "Mayuri M.",
	},

	{
		id: 2,
		quote:
			"Nithiya's cake decorating course took my skills to a whole new level. I learned amazing techniques and gained the confidence to create beautiful and delicious cakes for any occasion.",
		img: Testimonial_2, // Replace with actual image paths (if available)
		name: "Kalavathi R.",
	},
	{
		id: 3,
		quote:
			"Thanks to Nithiya's Active Queens, I finally mastered the Art of Aari Embroidery. It's such a beautiful and rewarding craft, and I'm so proud of the pieces I've created.",
		img: Testimonial_3,
		name: "Priya M.",
	},
	{
		id: 4,
		quote:
			"Nithiya's weight loss program was a game-changer for me. I learned healthy habits and strategies that helped me reach my goals and feel my best.",
		img: Testimonial_2,
		name: "Sara L.",
	},
];
