import data from "../../data.json";
import Head_Box from "./head_box";
import Update from "./Update";
import Package from "./Package";
const Head = ({ item }) => {
  return (
    <>
      <div className="flex felx-col ">
        <div className=" flex flex-row w-[95%] m-auto gap-[0px] h-auto sm:h-[150px] md:h-[160px] lg:h-[160px] xl:h-[170px] 2xl:h-[180px] ">
          
          <div className="w-[97%]  mx-auto  sm:flex sm:flex-col">
            <div className="flex sm:flex-row gap-[4px] sm:justify-between flex-col border-b-[0.5px] border-[#662c92] pb-[5px] sm:pb-[0px]">
              <div className="flex flex-row items-center gap-[4px]">
                <img
                  src={data[item].img}
                  alt=""
                  className="object-fill h-[25px] w-[40px]"
                />
                <p className="dark:text-slate-400 align-text-bottom text-[24px] font-[500]">
                  {data[item].heading}
                </p>
              </div>

              <Head_Box item={item} />
            </div>
            <div className="flex sm:flex-row justify-between  border-b-[0.5px] dark:border-[#662c92] py-[3px]">
              <Update item={item} />
            </div>
            <div className="flex sm:flex-row justify-between py-[3px]">
              <Package item={item} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Head;
