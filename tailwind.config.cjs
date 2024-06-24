/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			cormorant: ["'Cormorant Garamond'", "serif"],
			dm_sans: ["DM Sans", "sans-serif"],
		},
		extend: {
			colors: {
				Solitude: "#e9e9ea",
				gray: "#F5F5F5",
				Rose: "#D93A70",
			},

			keyframes: {
				slide: {
					"0%,100%": { transform: "translateX(5%)" },
					"50%": { transform: "translateX(-120%)" },
				},
				bounce_horizontal: {
					"0%, 100%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(50px)" },
				},
				
			},
			animation: {
				"bounce-slow": " bounce 3s linear infinite",
				"pulse-slow": " pulse 3s linear infinite",
				"spin-slow": " spin 3s linear infinite",
				slide: "slide 25s linear infinite",
				'bounce-horizontal': 'bounce_horizontal 3s linear infinite',
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
