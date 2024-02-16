import Box from "./Component/box/box";
import Head from "./Component/box/head";
const Home = ({theme,setTheme}) => {
 
  return (
    <>
 <div className={`${theme==="dark" ? "dark" :"" }`}>

   
      <div className="dark:bg-[rgb(22,22,22)] bg-[#c7c4c4] h-screen overflow-auto" >
        <div className="mx-auto w-11/12  ">
          <Head theme={theme} setTheme={setTheme} />
          <Box />
        </div>
      </div>
      </div>
    </>
  );
};
export default Home;
