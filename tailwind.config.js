/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontSize: {
				h1: ['72px', { lineHeight: '84px', fontWeight: '700' }],
				p: ['22px', { lineHeight: '36px', fontWeight: '400' }],
				button: ['18px', { lineHeight: '30px', fontWeight: '700' }],
			},
			colors: {
				navBackground: '#0F0F0F',
				heroBackground: '#1D1C20',
				darkRedBackground: ' #364C09', // hero section button
				cardDarkBackground: '#242424', // input and card background
				greenDarkRadientBackground :'radial-gradient(50% 50% at 50% 50%, rgba(163, 220, 47, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
				dark: '#333333',
				mediumDark: '#4F4F4F', //gray
				lightGray: '#F2F2F2', //light gray close to white
				lighterGray: '#F5F5F5', //light gray close to white
				white: '#FFFFFF',
				green: '#A3DC2F',
				veryDark: '#242424', //dark gray close to black
				gray: '#9B9CA1', // best for text p and a tags
				almostBlack: '#1D1C20',
				darkGray: '#1A1A1A',
				transparentGreen: '#003FDB6E',
				transparentLightGreen: '#72A7008A',
				transparentRed: '#EE1F1F70',
				blue: '#003FDB',
				veryDarkGray: '#0F0F0F',
				darkerGray: '#161616',
				anotherDark: '#49C2A9',
				brightGreen: '#72A700',
				brightRed: '#EE1F1F',
				offWhite: '#FBFBFB',
				black: '#000000',
				darkGreen: '#171F05',
				mediumGray: '#1F1F1F',
				oliveGreen: '#364C09',
				grayDark: '#3B3B3B', //mediun dark gray for buttons background
				gradient1:
					'linear-gradient(180deg, rgba(77, 197, 174, 0.17) -39.94%, rgba(58, 160, 135, 0) 72.38%)',
				gradient2:
					'linear-gradient(90.75deg, rgba(255, 255, 255, 0.6) 0%, rgba(163, 220, 47, 0.6) 100.19%)',
				radialGradient:
					'radial-gradient(50% 50% at 50% 50%, rgba(163, 220, 47, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
				transparentWhite: '#FFFFFF33',
				customGray: {
					800: '#232323', // renamed gray
					900: '#1A1A1A', // renamed dark gray
				},
				customGreen: {
					500: '#4CAF50', // renamed green
					600: '#388E3C', // renamed dark green
				},
				customWhite: '#F9F9F9', // renamed white
				customGrayText: '#B0B0B0', // renamed text gray
				
			},
		},
	},
	plugins: [],
};
