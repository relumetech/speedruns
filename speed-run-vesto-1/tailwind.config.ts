import type { Config } from "tailwindcss";

const colors = {
  brand: {
    black: "#000000",
    white: "#ffffff",
  },
  neutral: {
    DEFAULT: "#666666",
    black: "#000000",
    white: "#ffffff",
    lightest: "#f9f8f1",
    lighter: "#f2f1e8",
    light: "#aaaaaa",
    dark: "#444444",
    darker: "#222222",
    darkest: "#111111",
  },
  system: {
    "success-green": "#027a48",
    "success-green-light": "#ecfdf3",
    "error-red": "#b42318",
    "error-red-light": "#fef3f2",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },

      container: {
        center: true,
      },

      // prettier-ignore
      spacing: {              // | no-break | md      | lg        | 
      px: '1px',           
      0: '0px',             
      1: '0.25rem',         // | tiny     | tiny    | tiny      | 
      2: '0.5rem',          // | xxsmall  | xxsmall | xxsmall   |
      3: '0.75rem',         // | xsmall   | -       | -         |
      4: '1rem',            // | -        | xsmall  | xsmall    |
      5: '1.25rem',         // | small    | -       | -         |
      6: '1.5rem',          // | medium   | small   | small     |
      8: '2rem',            // | large    | medium  | medium    |
      10: '2.5rem',         // | xlarge   | large   | -         |
      12: '3rem',           // | xxlarge  | -       | large     |
      14: '3.5rem',         // | huge     | xlarge  | -         |
      16: '4rem',           // | xhuge    |         | xlarge    |
      18: '4.5rem',         // | -        | xxlarge | -         |
      20: '5rem',           // | xxhuge,  | huge    | xxlarge   |
      24: '6rem',           // | -        | xhuge   | huge      |
      28: '7rem',           // | -        |         | xhuge     |
      30: '7.5rem',         // | -        | xxhuge  | -         |         
      32: '8rem',           // | -        | -       | -         |  
      36: '9rem',           // | -        | -       | -         |  
      40: '10rem',          // | -        | -       | xxhuge    |  
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },

      maxWidth: {
        xxs: "20rem",
        xs: "25rem",
        sm: "30rem",
        md: "35rem",
        lg: "48rem",
        xl: "64rem",
        xxl: "80rem",
      },

      boxShadow: {
        xxsmall: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        xsmall:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        small:
          "0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)",
        medium:
          "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
        large:
          "0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03)",
        xlarge: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
        xxlarge: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
      },

      // prettier-ignore
      fontSize: {                                     // | px   | no-break                                | md                    | lg
        xs: ['0.75rem', { lineHeight: '1.5' }],       // | 12px | text-size-tiny                          | text-size-tiny        | text-size-tiny  
        sm: ['0.875rem', { lineHeight: '1.5' }],      // | 14px | text-size-small                         | text-size-small       | text-size-small  
        base: ['1rem', { lineHeight: '1.5' }],        // | 16px | text-size-medium, text-size-regular, p  | text-size-regular, p  | text-size-regular, p
        md: ['1.125rem', { lineHeight: '1.5' }],      // | 18px | text-size-large, h6                     | text-size-medium      | text-size-medium
        lg: ['1.25rem', { lineHeight: '1.5' }],       // | 20px |                                         | text-size-large       | text-size-large 
        xl: ['1.25rem', { lineHeight: '1.4' }],       // | 20px | h5                                      | h6                    | h6
        '2xl': ['1.5rem', { lineHeight: '1.4' }],     // | 24px | h4                                      | h5                    | h5
        '3xl': ['1.75rem', { lineHeight: '1.4' }],    // | 28px |                                         | h4                    |
        '4xl': ['2rem', { lineHeight: '1.3' }],       // | 32px | h3                                      |                       | h4
        '5xl': ['2.25rem', { lineHeight: '1.2' }],    // | 36px | h2                                      | h3                    |
        '6xl': ['2.5rem', { lineHeight: '1.2' }],     // | 40px | h1                                      |                       | h3
        '7xl': ['2.75rem', { lineHeight: '1.2' }],    // | 40px |                                         | h2                    |
        '8xl': ['3rem', { lineHeight: '1.2' }],       // | 48px |                                         |                       | h2
        '9xl': ['3.25rem', { lineHeight: '1.2' }],    // | 52px |                                         | h1                    |
        '10xl': ['3.5rem', { lineHeight: '1.2' }],    // | 56px |                                         |                       | h1
      },

      colors: {
        ...colors,
        background: {
          DEFAULT: colors.neutral.white, // bg-background, text-background, border-background,
          primary: colors.neutral.white, // bg-background-primary, text-background-primary, border-background-primary,
          secondary: "#f9f8f1",
          tertiary: "#f2f1e8",
          alternative: colors.neutral.black,
          success: colors.system["success-green-light"],
          error: colors.system["error-red-light"],
        },
        border: {
          DEFAULT: colors.neutral.black,
          primary: "#2e2e1f2e",
          secondary: colors.neutral.light,
          tertiary: colors.neutral.dark,
          alternative: colors.neutral.white,
          success: colors.system["success-green"],
          error: colors.system["error-red"],
        },
        text: {
          DEFAULT: colors.neutral.black,
          primary: colors.neutral.black,
          secondary: colors.neutral.light,
          alternative: colors.neutral.white,
          success: colors.system["success-green"],
          error: colors.system["error-red"],
        },
        link: {
          DEFAULT: colors.neutral.black,
          primary: colors.neutral.black,
          secondary: colors.neutral,
          alternative: colors.neutral.white,
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: colors.neutral.black,
            lineHeight: "1.5",
            maxWidth: "100%",
            p: {
              marginTop: "0",
              marginBottom: "1rem",
            },
          },
        },
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0px" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0px" },
      },
      "loop-horizontally": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      "loop-vertically": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(-50%)" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "loop-horizontally": "loop-horizontally 20s linear infinite",
      "loop-vertically": "loop-vertically 30s linear infinite",
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [],
};

export default config;
