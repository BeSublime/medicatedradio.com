/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{html,js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		keyframes: {
			fadeInAnimation: {
				'0%': 	{ opacity: 0 },
				'100%': { opacity: 1 }
			}
		},
		animation: {
			fadeIn:  'fadeInAnimation ease 2s forwards'
		}
	  },
	},
	plugins: [],
  }
