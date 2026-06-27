/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',  // Vibrant Red matching the image
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        accent: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',  // Clean green accent
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        surface: {
          light: {
            DEFAULT: '#ffffff',
            secondary: '#f7f9f9',
            tertiary: '#eff3f4',
          },
          dark: {
            DEFAULT: '#000000',     // Pure black like X
            secondary: '#16181c',   // X's elevated surface
            tertiary: '#1d1f23',    // X's card bg
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #16181c 50%, #0a1628 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        'brand-gradient': 'linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #b91c1c 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-down': 'fadeDown 0.3s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'progress': 'progress 1.5s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'typewriter': 'typewriter 3s steps(30) forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(220, 38, 38, 0.25)',
        'glow-accent': '0 0 20px rgba(16, 185, 129, 0.25)',
        'card': '0 1px 3px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.500'),
              '&:hover': { color: theme('colors.brand.600') },
            },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '700',
              color: theme('colors.gray.900'),
            },
            strong: { color: theme('colors.gray.900') },
            'ul > li::marker': { color: theme('colors.gray.400') },
            'ol > li::marker': { color: theme('colors.gray.500') },
            code: {
              color: theme('colors.brand.600'),
              backgroundColor: theme('colors.brand.50'),
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.brand.400'),
              '&:hover': { color: theme('colors.brand.300') },
            },
            'h1, h2, h3, h4': { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            'ul > li::marker': { color: theme('colors.gray.500') },
            'ol > li::marker': { color: theme('colors.gray.400') },
            code: {
              color: theme('colors.brand.400'),
              backgroundColor: theme('colors.brand.950'),
            },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.brand.500'),
            },
            'thead th': { color: theme('colors.white') },
            'tbody tr': { borderBottomColor: theme('colors.gray.700') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
