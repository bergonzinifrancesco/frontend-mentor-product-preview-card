import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "cream": "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)"
      },
      fontSize: {
        "base": "14px",
        "2xs": "11px"
      },
      fontFamily: {
        sans: ["Montserrat"],
        serif: ["Fraunces"]
      },
      backgroundImage: {
        "product-desktop": "url('/image-product-desktop.jpg')",
        "product-mobile": "url('/image-product-mobile.jpg')"
      },
    }
  }
} satisfies Config;
