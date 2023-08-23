/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['IBM Plex Sans', 'sans-serif'],
			serif: ['IBM Plex Serif', 'serif'],
			mono: ['IBM Plex Mono', 'monospace'],
			condensed: ['IBM Plex Sans Condensed', 'sans-serif']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			neutral: {
				light: 'rgb(var(--neutral-light) / <alpha-value>)',
				base: 'rgb(var(--neutral-base) / <alpha-value>)',
				dark: 'rgb(var(--neutral-dark) / <alpha-value>)'
			},
			accent: 'rgb(var(--accent) / <alpha-value>)',
			one: 'rgb(var(--one) / <alpha-value>)',
			two: 'rgb(var(--two) / <alpha-value>)',
			three: 'rgb(var(--three) / <alpha-value>)',
			four: 'rgb(var(--four) / <alpha-value>)',
			five: 'rgb(var(--five) / <alpha-value>)',
			six: 'rgb(var(--six) / <alpha-value>)',
			human: 'rgb(var(--human) / <alpha-value>)'
		},
		spacing: {
			0: '0',
			1: '0.0625rem',
			2: '0.125rem',
			3: '0.1875rem',
			4: '0.3125rem',
			5: '0.5rem',
			6: '0.8125rem',
			7: '1.3125rem',
			8: '2.125rem',
			9: '3.4375rem',
			10: '5.5625rem'
		},
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			full: '9999px'
		},
		extend: {
			gridTemplateColumns: {
				13: 'repeat(13, minmax(0, 1fr))'
			},
			gridTemplateRows: {
				13: 'repeat(13, minmax(0, 1fr))'
			},
			// maxWidth: {
			// 	prose: '60ch'
			// }
			animation: {
				wiggle: 'wiggle 0.5s ease-in-out'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'translate(0,0)' },
					'25%': { transform: 'translate(-3px,0)' },
					'50%': { transform: 'translate(3px,0)' }
				}
			},
			screens: {
				xs: '480px'
			}
		}
	},
	safelist: [
		'bg-neutral-light',
		'bg-neutral-base',
		'bg-neutral-dark',
		'bg-accent',
		'bg-one',
		'bg-two',
		'bg-three',
		'bg-four',
		'bg-five',
		'bg-six',
		'bg-human',
		'fill-accent',
		'fill-one',
		'fill-two',
		'fill-three',
		'fill-four',
		'fill-five',
		'fill-six',
		'fill-human',
		'border-accent',
		'border-one',
		'border-two',
		'border-three',
		'border-four',
		'border-five',
		'border-six',
		'border-human',
		'!text-accent',
		'!text-one',
		'!text-two',
		'!text-three',
		'!text-four',
		'!text-five',
		'!text-six',
		'!text-human',
		'hover:bg-accent',
		'hover:bg-one',
		'hover:bg-two',
		'hover:bg-three',
		'hover:bg-four',
		'hover:bg-five',
		'hover:bg-six',
		'hover:bg-human',
		'group-hover:!text-accent',
		'group-hover:!text-one',
		'group-hover:!text-two',
		'group-hover:!text-three',
		'group-hover:!text-four',
		'group-hover:!text-five',
		'group-hover:!text-six',
		'group-hover:!text-human'
	],
	plugins: [require('@tailwindcss/container-queries')]
};
