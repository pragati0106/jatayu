import data from "../../data.json"
import Demo from "../public/Demo";
import { RiGithubFill } from "react-icons/ri";
const Package=({item})=>{
    return(
        <>
        <div className="w-full flex flex-col gap-[5px]">

        
         <div className="flex md:flex-row-reverse items-center gap-[5px]">
         <RiGithubFill className="purple"/>
            <p className="dark:text-slate-400 font-[500]">
                Packaged By : <span className="purple font-[500]">{data[item].author}</span>
            </p>
         
         </div>
         <div>
            <Demo item={item}/>
         </div>
         </div>
        </>
    )
}
export default Package;