import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          highlight: "#6b7877",
        },
        text: {
          primary: "#fbffce"
        }
      },
      fontSize: {
        "11xl": ["80px", { lineHeight: "88px"}],
        "12xl": ["104px", { lineHeight: "103px" }]
      }
    }
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [],
};
export default config;
