/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background, #0f172a)",
        foreground: "var(--foreground, #f8fafc)",
        
        blue: {
          400: "var(--blue-400, #60a5fa)",
          500: "var(--blue-500, #3b82f6)",
          600: "var(--blue-600, #2563eb)",
        },
        
        purple: {
          400: "var(--purple-400, #a78bfa)",
          500: "var(--purple-500, #8b5cf6)",
          600: "var(--purple-600, #7c3aed)",
        },
        
        success: "var(--success, #10b981)",
        warning: "var(--warning, #f59e0b)",
        danger: "var(--danger, #ef4444)",
        
        gray: {
          50: "var(--gray-50, #1e293b)",
          100: "var(--gray-100, #334155)",
          200: "var(--gray-200, #475569)",
          300: "var(--gray-300, #64748b)",
          400: "var(--gray-400, #94a3b8)",
          500: "var(--gray-500, #cbd5e1)",
          600: "var(--gray-600, #e2e8f0)",
          700: "var(--gray-700, #f1f5f9)",
          800: "var(--gray-800, #f8fafc)",
          900: "var(--gray-900, #ffffff)",
        },
        
        border: "var(--gray-200, #475569)",
        input: "var(--gray-200, #475569)",
        ring: "var(--blue-500, #3b82f6)",
        
        muted: {
          DEFAULT: "var(--gray-100, #334155)",
          foreground: "var(--gray-500, #cbd5e1)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "3xl": "1.5rem",
        "2xl": "1rem",
        xl: "0.75rem",
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-poppins, system-ui)", "var(--font-inter, system-ui)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.05)",
        "subtle-dark": "0 2px 10px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(59, 130, 246, 0.15)",
        "accent-glow": "0 0 20px rgba(139, 92, 246, 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} 