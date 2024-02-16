import data from "../../data.json";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoBug } from "react-icons/go";
import { MdDownload } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const Head_Box = ({ item }) => {
  return (
    <>
      <div className="flex  flex-row justify-between sm:gap-[8px] text-[12px] font-[500] pb-[3px] sm:pb-[0px]">
        <div>
          <Link to={`${data[item].websit_link}`}>
            <div className="gap-[2px] purple p-[5px] dark:hover:bg-[#202020] hover:bg-[#eeeaea] border-slate-500 rounded-[5px] border-[1px] flex flex-row items-center">
              <FaGlobeAmericas />
              <p className="purple font-[600] text-[12px]">Website</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={`${data[item].auth_git}`}>
            <div className="gap-[2px] purple p-[5px] dark:hover:bg-[#202020] hover:bg-[#eeeaea] border-slate-500 rounded-[5px] border-[1px] flex flex-row items-center">
              <FaCode />
              <p className="purple font-[600] text-[12px]">Source</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={`${data[item].auth_git}`}>
            <div className="gap-[2px] purple p-[5px] dark:hover:bg-[#202020] hover:bg-[#eeeaea] border-slate-500 rounded-[5px] border-[1px] flex flex-row items-center w-max">
              <MdDownload />
              <p className="purple font-[600] text-[12px]">Download spk</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={`${data[item].auth_git}`}>
            <div className="gap-[2px] purple p-[5px] dark:hover:bg-[#202020] hover:bg-[#eeeaea] border-slate-500 rounded-[5px] border-[1px] flex flex-row items-center w-max">
              <GoBug />
              <p className="purple font-[600] text-[12px]">Report issue</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Head_Box;
