import data from "../../data.json";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import Video from "./video";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Box = () => {
  const [isClickedIndex, setIsClickedIndex] = useState(-1);
  const navigate = useNavigate();
  const handleClick = (i) => {
    setIsClickedIndex(i);
  };
  const handleDetailClick = (i) => {
    navigate(`/detail/${i}`);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap mx-auto w-95/100 gap-[8px] md:gap-[15px] justify-center  lg:gap-[15px] items-start">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className=" dark:bg-black bg-white my-[10px] rounded-[10px_0px] overflow-hidden p-[10px] pb-[5px] flex flex-col relative sm:w-1/4 sm:h-[185px] sm:gap-1 md:w-1/5  md:h-180px lg:w-1/8 lg:h-170px xl:h-[180px] w-full h-[6.5rem]"
            >
              <div className="flex flex-row gap-[5px]">
                <div className=" w-1/4 h-3/5 sm:h-full overflow-hidden">
                  <img
                    src={value.img}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="w-3/4 dark:text-slate-300">
                  <p className=" text-[17px] sm:text-[12px] font-medium">
                    {value.heading}
                  </p>
                  <p className=" text-[13px] sm:text-[10px] md:text-[9px] font-medium">
                    {value.type}
                  </p>
                </div>
                <RiArrowRightDoubleLine
                  className="dark:text-slate-300 cursor-pointer"
                  onClick={() => handleDetailClick(index)}
                />
              </div>
              <div className="hidden overflow-auto sm:flex sm:flex-col dark:text-slate-300 font-medium lg:text-[10px]  sm:text-[8px] md:text-[9px] gap-2 scrollbar-webkit my-[8px] mb-[20px]">
                <p>{value.desc1}</p>
                <p>{value.dec2}</p>
              </div>

              <div
                onClick={() => handleClick(index)}
                className="w-[95%] dark:bg-[rgb(36,30,30)] dark:hover:bg-[rgb(45,39,39)] self-end absolute bottom-[3%] left-[2.5%] flex justify-center gap-[8px] items-center py-[3px] dark:shadow-black shadow-inner shadow-[#dab2da] hover:bg-[#d095d0] rounded-[5px_0px] bg-[#dab2da] cursor-pointer"
              >
                <p className="text-center text-[#b756b7] dark:purple text-[13px] font-bold md:text-[9px] py-[2px] sm:text-[8px]">
                  Demo
                </p>
                <div className="flex justify-center text-[#875387] items-center dark:purple">
                  <FaPlay className="text-[10px] sm:text-[10px]" />
                </div>
              </div>
            </div>
          );
        })}
        {isClickedIndex !== -1 && (
          <Video
            isClickedIndex={isClickedIndex}
            setIsClickedIndex={setIsClickedIndex}
          />
        )}
      </div>
    </>
  );
};
export default Box;
