// import { useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const Video = ({ isClickedIndex, setIsClickedIndex }) => {
  const handleClick=()=>{
    setIsClickedIndex(-1);
  }

  return (
    <div className="w-full h-full left-0 top-0 sm:top-0 fixed bg-[rgba(0,0,0,0.5)]">
        <div onClick={handleClick}  className="absolute top-[5%] right-[5%] bg-white rounded-[200px] cursor-pointer lg:top-[1%]">
        <IoIosCloseCircle size={35} />

        </div>
      
    <iframe
      className="fixed top-[25%] lg:top-[10%] left-[10%] w-[80%] aspect-video m-auto"
      src="https://www.youtube.com/embed/hGKM7jO4qK8"
      title="Youtube Player"
      frameBorder="0"
      allowFullScreen
    />
    </div>
  );
};

export default Video;
