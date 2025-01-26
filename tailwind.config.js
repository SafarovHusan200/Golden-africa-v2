/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "20px",
			screens: {
				sm: "1680px",
			},
		},
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
				monserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				"custom-white": "#ffffff",
				"custom-black": "#000",
				"custom-gray": "#888",
				"custom-white-100": " #d6d6d6",
				"custom-white-200": " #f8f8f8",
				"custom-gold": "#f0b345",
				"custom-gold-liner-100": "#FFE0A7",
				"custom-gold-liner-200": "#F0B345",
				"custom-dark-green": "#002c29",
				"transparent-white": "rgba(255, 255, 255, 0.1)",
				"custom-background": "rgb(248, 247, 243)",
			},
			backdropFilter: {
				"blur-100": "blur(100px)",
				"blur-50": "blur(50px)",
			},
			backgroundImage: {
				"custom-gradient":
					"radial-gradient(229.03% 249.04% at 54.5% -92.98%, rgb(255, 224, 167) 0%, rgb(240, 179, 69) 100%)",
				"custom-gradient-hover":
					"radial-gradient(700.68% 211.72% at 101.61% -7.02%, rgb(255, 224, 167) 0%, rgb(240, 179, 69) 100%)",
			},
			screens: {
				ss: "560px",
				ml: "760px",
				"3xl": "1640px",
			},
		},
	},
	plugins: [],
};
