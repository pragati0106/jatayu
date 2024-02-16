import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import Video from "../box/video";
const Demo=({item})=>{
    const [isClickedIndex, setIsClickedIndex] = useState(-1);
    const handleClick = () => {
      setIsClickedIndex(item);
    };
    return(
        <>
         <div
                onClick={() => handleClick()}
                className="w-full md:w-[20%] dark:bg-[rgb(36,30,30)] dark:hover:bg-[rgb(45,39,39)] flex flex-row justify-center gap-[8px] hover:bg-[#d7abf8] bg-[#a77cc7] cursor-pointer "
              >
                <p className="text-center pruple text-[13px] font-medium py-[2px] md:text-[18px] dark:purple  text-[#7d36b3]">
                  Demo
                </p>
                <div className="flex justify-center items-center text-[#6c309b] dark:purple">
                  <FaPlay className="text-[10px] sm:text-[15px]" />
                </div>
              </div>
              {isClickedIndex !== -1 && (
          <Video
            isClickedIndex={isClickedIndex}
            setIsClickedIndex={setIsClickedIndex}
          />
        )}
        </>
    )
}
export default Demo;