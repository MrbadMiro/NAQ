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

	useEffect(() => {
		const scrollActive = () => {
			setActive(window.scrollY > 20);
		};
		window.addEventListener("scroll", scrollActive);
		return () => window.removeEventListener("scroll", scrollActive);
	}, [active]);

	return (
		<div
			className={`fixed w-full top-0 left-0 z-20 ${
				active ? "shadow-lg bg-Solitude" : ""
			}`}>
			<div>
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
					<div className="py-3 px-6 gap-5 text-xl flex flex-row items-center justify-center ">
						<ScrollLink
							to="contact"
							spy={true}
							smooth={true}
							duration={500}
							offset={-50}
							className="hover:text-Rose cursor-pointer">
							<button
								type="button"
								class="text-white hover:bg-pink-500 bg-pink-700   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
								Apply Now
							</button>
						</ScrollLink>
					</div>
					{toggle && (
						<motion.div
							initial={{ x: -500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="fixed h-full w-96 top-0 left-0 z-20 bg-Rose text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8">
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
