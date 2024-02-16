import data from "../../data.json";
const Description = ({ item }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-col w-[90%] mx-auto ">
        <div className="flex sm:flex-row justify-between border-b-[0.5px] border-[#662c92] py-[3px]">
          <p className="dark:text-[#bfbfbf] font-medium text-[20px]">Description</p>
        </div>
        <p className="dark:text-[#f1f0f0] font-medium text-[15px] py-[5px]">{data[item].des}</p>
        <p className="dark:text-[#f1f0f0] font-medium text-[15px] py-[5px]">{data[item].desc1}</p>
        <p className="dark:text-[#f1f0f0] font-medium text-[15px] py-[5px]">{data[item].based}{" "}<span className="purple font-500 text-[15px] py-[5px]">{data[item].based_name}</span></p>

      </div>
    </>
  );
};
export default Description;
