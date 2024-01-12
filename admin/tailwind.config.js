/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayscaleblack: "var(--grayscaleblack)",
        grayscalegray: "var(--grayscalegray)",
        grayscalenickel: "var(--grayscalenickel)",
        grayscaleplatinum: "var(--grayscaleplatinum)",
        "grayscaleraisin-black": "var(--grayscaleraisin-black)",
        grayscalewhite: "var(--grayscalewhite)",
        maincolorprimary: "var(--maincolorprimary)",
        maincolorsecondary: "var(--maincolorsecondary)",
        "othercolorbggrey-black": "var(--othercolorbggrey-black)",
        othercolorhoverred: "var(--othercolorhoverred)",
        "othercolorlight-grey": "var(--othercolorlight-grey)",
        othercolorlightred: "var(--othercolorlightred)",
      },
      fontFamily: {
        "heading-a1": "var(--heading-a1-font-family)",
        "heading-a2": "var(--heading-a2-font-family)",
        "heading-a3": "var(--heading-a3-font-family)",
        "heading-b1": "var(--heading-b1-font-family)",
        "heading-b2": "var(--heading-b2-font-family)",
        "heading-c1": "var(--heading-c1-font-family)",
        "heading-c2": "var(--heading-c2-font-family)",
        "heading-d1-nutino": "var(--heading-d1-nutino-font-family)",
        "heading-d2-nutino": "var(--heading-d2-nutino-font-family)",
        "paragraph-a1": "var(--paragraph-a1-font-family)",
        "paragraph-a2": "var(--paragraph-a2-font-family)",
        "paragraph-b1": "var(--paragraph-b1-font-family)",
        "paragraph-b2": "var(--paragraph-b2-font-family)",
        "paragraph-c1": "var(--paragraph-c1-font-family)",
        "paragraph-c2": "var(--paragraph-c2-font-family)",
      },
      boxShadow: {
        "login-placeholder-shadow": "var(--login-placeholder-shadow)",
      },
    },
  },
  plugins: [],
};
