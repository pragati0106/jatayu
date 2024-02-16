import data from "../../data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "./head";
import ScreenShots from "./ScreenShots";
import Description from "./Description";
const Detail = ({theme,setTheme}) => {
  const params = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const detailIndex = Number(params.index);
    if (detailIndex >= 0 && detailIndex < data.length) {
      setItem(detailIndex);
    }
  }, [params.index]);

  return (
    <>
    <div className={`${theme==="dark" ? "dark" :"" }`}>
    {item!==null && <div className="dark:bg-black bg-white py-[10px] h-screen w-screen flex flex-col gap-[10px] scrollbar-webkit overflow-auto">
        <Head item={item}/>
         <ScreenShots item={item}/>
         <Description item={item}/>
      </div>}
      </div>
    </>
  );
};
export default Detail;
