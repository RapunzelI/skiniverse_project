import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  
  theme: {
    extend: {

      container: {
        center: true,
        padding: "15px",
      },

      colors: {
        //background: "#fadbd8",
        //foreground: "#fadbd8",
        accent: "#CC99FF",
        blackish: "#1b1b1b",
      },
    },
    
  },

  
  
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
  
}satisfies Config;
