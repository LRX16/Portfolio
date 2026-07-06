import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#08110f",
        canopy: "#10251f",
        jade: "#54b487",
        amber: "#d7a84a",
        parchment: "#e7d9b7",
        stone: "#8c8672"
      },
      boxShadow: {
        relic: "0 24px 80px rgba(0, 0, 0, 0.38)",
        seal: "0 0 40px rgba(215, 168, 74, 0.22)"
      },
      backgroundImage: {
        "stone-grain":
          "radial-gradient(circle at 20% 20%, rgba(215,168,74,0.09), transparent 24%), radial-gradient(circle at 80% 0%, rgba(84,180,135,0.1), transparent 25%), linear-gradient(135deg, rgba(255,255,255,0.06), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
