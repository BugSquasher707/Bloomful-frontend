module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
  darkMode: "media",
  theme: {
    screens: {
      xs: "350px",
      sm: "500px",
      md: "700px",
      lg: "900px",
      xl: "1240px",
      "2xl": "1500px",
      "3xl": "1600px",
      "4xl": "1840px"
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    extend: {
      borderRadius: {
        none: "0px",
        1: "0.0625rem",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        10: "0.625rem",
        12: "0.75rem",
        16: "1rem",
        24: "1.5rem",
        full: "9999rem"
      },
      borderWidth: {
        none: "0px",
        1: "1px",
        2: "2px",
        7: "7px"
      },
      boxShadow: {
        sm: "0px 10px 50px rgba(0, 0, 0, 0.03)"
      },
      colors: {
        transparent: "transparent",
        black: "var(--color-black)",
        white: "var(--color-white)",
        blue: "rgba(30, 0, 89, 1)",
        purple: "rgba(160, 145, 255, 1)",
        grey: "rgba(245, 242, 242, 1)",
        "grey-dark": "rgba(5, 0, 14, 1)",
        "grey-dark-6": "rgba(5, 0, 14, 0.06)",
        "grey-dark-10": "rgba(5, 0, 14, 0.1)",
        "grey-dark-20": "rgba(5, 0, 14, 0.2)",
        "grey-dark-40": "rgba(5, 0, 14, 0.4)",
        "grey-dark-70": "rgba(5, 0, 14, 0.7)",
        "grey-light": "rgba(250, 246, 246, 1)",
        "grey-light-10": "rgba(250, 246, 246, .1)",
        "grey-light-20": "rgba(250, 246, 246, .2)",
        "grey-light-40": "rgba(250, 246, 246, .4)",
        "grey-light-70": "rgba(250, 246, 246, .7)"
      },
      fontSize: {
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        40: "2.5rem",
        48: "3rem",
        64: "4rem",
        80: "5rem",
        180: "11.25rem"
      },
      maxWidth: {
        100: "100px"
      },
      ringWidth: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem"
      },
      spacing: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        34: "2.125rem",
        36: "2.25rem",
        38: "2.375rem",
        40: "2.5rem",
        42: "2.625rem",
        44: "2.75rem",
        46: "2.875rem",
        48: "3rem",
        50: "3.125rem",
        52: "3.25rem",
        56: "3.5rem",
        58: "3.625rem",
        60: "3.75rem",
        64: "4rem",
        68: "4.25rem",
        70: "4.375rem",
        72: "4.5rem",
        74: "4.625rem",
        80: "5rem",
        84: "5.25rem",
        90: "5.625rem",
        92: "5.75rem",
        100: "6.25rem",
        120: "7.5rem",
        180: "11.25rem",
        190: "11.875rem",
        200: "12.5rem",
        220: "13.75rem",
        240: "15rem",
        250: "15.625rem",
        260: "16.25rem",
        270: "16.875rem",
        280: "17.5rem",
        300: "18.75rem",
        320: "20rem",
        400: "25rem",
        450: "28.125rem",
        520: "32.5rem"
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "circle-one": "circleOne 20s ease infinite",
        "circle-two": "circleTwo 20s ease infinite",
        "circle-three": "circleThree 20s ease infinite",
        "circle-four": "circleFour 20s ease infinite"
      },
      keyframes: {
        circleOne: {
          "0%, 100%": { top: "30%", left: "10%" },
          "20%": { top: "30%", left: "70%" },
          "40%": { top: "10%", left: "30%" },
          "60%": { top: "20%", left: "20%" },
          "80%": { top: "10%", left: "40%" }
        },
        circleTwo: {
          "0%, 100%": { top: "20%", left: "70%" },
          "20%": { top: "10%", left: "10%" },
          "40%": { top: "20%", left: "80%" },
          "60%": { top: "30%", left: "60%" },
          "80%": { top: "20%", left: "70%" }
        },
        circleThree: {
          "0%, 100%": { top: "80%", left: "20%" },
          "20%": { top: "100%", left: "40%" },
          "40%": { top: "60%", left: "60%" },
          "60%": { top: "70%", left: "90%" },
          "80%": { top: "70%", left: "0%" }
        },
        circleFour: {
          "0%, 100%": { top: "90%", left: "80%" },
          "20%": { top: "60%", left: "80%" },
          "40%": { top: "90%", left: "0%" },
          "60%": { top: "40%", left: "10%" },
          "80%": { top: "80%", left: "70%" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")]
}
