/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      textColor: {
        skin: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          secondark: "var(--color-text-secondark)",
          base: "var(--color-text-base)",
          inverted: "var(--color-text-inverted)",
          muted: "var(--color-text-muted)",
        },
      },
      backgroundColor: {
        skin: {
          primary1: "var(--color-primary1)",
          "primary1-hover": "var(--color-primary1-hover)", //70B1AB

          primary2: "var(--color-primary2)",
          "primary2-hover": "var(--color-primary2-hover)", //9EE1DB

          secondary1: "var(--color-secondary1)",
          "secondary1-hover": "var(--color-secondary1-hover)", //026E64

          secondary2: "var(--color-secondary2)",
          "secondary2-hover": "var(--color-secondary2-hover)", //3D958A

          plain: "var(--color-plain)",
          "plain-dark": "var(--color-plain-dark)",
        },
      },
      borderColor: {
        skin: {
          bprimary: "var(--color-bprimary)",
          bdark: "var(--color-bdark)",
        },
      },
    },
  },
  plugins: [],
};
