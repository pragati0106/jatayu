/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode:"jit",
   darkMode: "class",
  plugins: [
   require("daisyui"),
    function({addUtilities}){
      const newUtilities={
        ".scrollbar-thin":{
          scrollbarWidth:"thin",
          scrollbarColor:"rgb(31 29 29) white"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width:"5px"
          },
          // "&::-webkit-scrollbar-track":{
          //   width:"8px"
          // },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor:"rgb(31 41 25)",
            borderRadius:"20px",
            // border:"1px solid "
          }
          
        },
        ".purple":{
          color:"#8f40cb"
        }
      }
      addUtilities(newUtilities,["responsive","hover"])
    }
  ],
}
