/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			Poppins: "Poppins",
			inter:"inter",
			Lora:"Lora"
		},
		extend: {
			colors: {
				Solitude: "#e9e9ea",
				gray: "#F5F5F5",
				Rose: "#D93A70",
			},
			animation: {
				slide: "slide 25s linear infinite",
			},
			keyframes: {
				slide: {
					"0%,100%": { transform: "translateX(5%)" },
					"50%": { transform: "translateX(-120%)" },
				},
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
