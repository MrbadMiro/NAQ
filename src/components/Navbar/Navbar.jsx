import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navLinks, logo } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState(null);
	const [scrollY, setScrollY] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > scrollY && currentScrollY > 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			setScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollY]);

	useEffect(() => {
		const scrollActive = () => {
			setActive(window.scrollY > 20);
		};
		window.addEventListener("scroll", scrollActive);
		return () => window.removeEventListener("scroll", scrollActive);
	}, [active]);

	return (
		<div
			className={`fixed z-20 top-0 w-full flex md:px-12 px-6 border-b border-b-white border-opacity-20 transition-transform duration-300 ${
				isVisible ? "translate-y-0" : "-translate-y-full"
			} ${isVisible && scrollY > 50 ? "boxShadow" : ""}`}
			style={{
				backgroundColor: scrollY > 50 ? "#FDF2F8" : "transparent",
			}}>
			<div className="w-full">
				<div
					className={`container mx-auto flex items-center justify-between px-2 ${
						active ? "py-2 transition-all duration-300" : "py-3"
					}`}>
					<div className="flex items-center gap-4">
						<HiMenuAlt1
							className="text-3xl sm:hidden cursor-pointer"
							onClick={() => setToggle(true)}
						/>
						<div className="text-xl uppercase tracking-wide font-bold">
							<img src={logo} alt="logo" className="w-[60px] h-[60px]" />
						</div>
					</div>
					<div className="sm:flex items-center hidden">
						{navLinks.map((navLink) => (
							<NavLink key={navLink.id} {...navLink} />
						))}
					</div>
					<div className="py-3 px-6 gap-5 text-xl flex flex-row items-center justify-center">
						<ScrollLink
							to="contact"
							spy={true}
							smooth={true}
							duration={500}
							offset={-50}
							className="hover:text-Rose cursor-pointer">
							<button
								type="button"
								className="text-white hover:bg-pink-500 bg-pink-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
								Apply Now
							</button>
						</ScrollLink>
					</div>
					{toggle && (
						<motion.div
							initial={{ x: -500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="fixed h-[100vh] w-96 top-0 left-0 z-20 bg-Rose text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8">
							{navLinks.map((navLink) => (
								<MobileNavLinks
									key={navLink.id}
									{...navLink}
									setToggle={setToggle}
								/>
							))}
							<HiX
								className="absolute right-12 top-12 text-3xl cursor-pointer"
								onClick={() => setToggle(false)}
							/>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
