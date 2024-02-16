import data from "../../data.json";

const Update = ({ item }) => {
  return (
    <>
      <div className="flex  flex-col sm:flex-row justify-between w-full">
        <div className="flex flex-col font-medium border-b-[0.5px] border-[#662c92] sm:border-0 pb-[2px] sm:pb-[0px]">
          <p className="dark:text-slate-400 m-0">Last update: {data[item].updated}</p>
          <p className="purple m-0">
            {data[item].productivity},Productivity
          </p>
        </div>
        <div className="flex flex-row gap-[20px] text-[10px] font-medium py-[4px] sm:py-[0px]">
          <div className="dark:text-slate-400">
            <p>Licence :</p>
            <p>Version :</p>
            <p>Upstream author :</p>
          </div>
          <div className="dark:text-slate-400 font-medium">
            <p>{data[item].license}</p>
            <p>{data[item].version}</p>
            <p>{data[item].author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
