module.exports = {
  content: ["./node_modules/flowbite/**/*.js",'./src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
