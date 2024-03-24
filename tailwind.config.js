import tailwindTypography from "@tailwindcss/typography";

module.exports = {
  plugins: [require("daisyui"), tailwindTypography],
  daisyui: {
    themes: ["night"]
  },
  theme: {
    extend: {
      keyframes: {
        "bounce-x": {
          "0%, 100%": {
            transform: "translateX(15%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translate(0)",
            animationTimingFunction: "cubic - bezier(0, 0, 0.2, 1)"
          }
        }
      },
      animation: {
        "bounce-x": "bounce-x 1s infinite"
      }
    }
  }
};
