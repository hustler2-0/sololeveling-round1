import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				solo: {
					'dark': '#1A1F2C',
					'purple': '#8B5CF6',
					'light-purple': '#D6BCFA',
					'blue': '#3B82F6',
					'blue-glow': '#60A5FA',
					'shadow': '#0F172A',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float-enhanced': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0)'
					},
					'25%': {
						transform: 'translateY(-12px) translateX(5px)'
					},
					'50%': {
						transform: 'translateY(-5px) translateX(-5px)'
					},
					'75%': {
						transform: 'translateY(-8px) translateX(3px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.8',
						boxShadow: '0 0 15px 5px rgba(139, 92, 246, 0.6)'
					},
					'50%': {
						opacity: '1',
						boxShadow: '0 0 25px 10px rgba(139, 92, 246, 0.8)'
					}
				},
				'pulse-intense': {
					'0%, 100%': {
						opacity: '0.8',
						boxShadow: '0 0 30px 10px rgba(139, 92, 246, 0.6)'
					},
					'50%': {
						opacity: '1',
						boxShadow: '0 0 50px 15px rgba(139, 92, 246, 0.9)'
					}
				},
				'shadow-pulse': {
					'0%': { boxShadow: '0 0 10px 2px rgba(139, 92, 246, 0.6)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(139, 92, 246, 0.8)' },
					'100%': { boxShadow: '0 0 10px 2px rgba(139, 92, 246, 0.6)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'appear': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'image-glow': {
					'0%': {
						opacity: '0.5',
						boxShadow: '0 0 20px 5px rgba(139, 92, 246, 0.5)'
					},
					'50%': {
						opacity: '1',
						boxShadow: '0 0 30px 10px rgba(139, 92, 246, 0.8)'
					},
					'100%': {
						opacity: '0.5',
						boxShadow: '0 0 20px 5px rgba(139, 92, 246, 0.5)'
					}
				},
				'blue-shimmer': {
					'0%': {
						backgroundPosition: '0% 50%',
						boxShadow: '0 0 15px 5px rgba(59, 130, 246, 0.5)'
					},
					'50%': {
						backgroundPosition: '100% 50%',
						boxShadow: '0 0 25px 8px rgba(59, 130, 246, 0.7)'
					},
					'100%': {
						backgroundPosition: '0% 50%',
						boxShadow: '0 0 15px 5px rgba(59, 130, 246, 0.5)'
					}
				},
				'glimmer': {
					'0%': { opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-enhanced': 'float-enhanced 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'pulse-intense': 'pulse-intense 3s ease-in-out infinite',
				'shadow-pulse': 'shadow-pulse 3s infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'appear': 'appear 0.8s ease-out forwards',
				'image-glow': 'image-glow 3s ease-in-out infinite',
				'blue-shimmer': 'blue-shimmer 4s ease-in-out infinite',
				'glimmer': 'glimmer 2s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(to bottom, rgba(26, 31, 44, 0.8), rgba(15, 23, 42, 0.9)), url('/public/uploads/9d7e378d-b3d8-45b1-ba68-7fe549b8c03b.png')",
				'rune-pattern': "url('/runes-bg.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'purple-glow': 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(26, 31, 44, 0) 70%)',
			},
			boxShadow: {
				'neon-purple': '0 0 5px theme("colors.solo.purple"), 0 0 20px theme("colors.solo.purple")',
				'neon-purple-intense': '0 0 10px theme("colors.solo.purple"), 0 0 30px theme("colors.solo.purple")',
				'neon-blue': '0 0 5px theme("colors.solo.blue"), 0 0 20px theme("colors.solo.blue")',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Rajdhani', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
