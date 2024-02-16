import data from "../../data.json"
const ScreenShots=({item})=>{
    return(
        <>
        <div className="flex flex-col sm:flex-row w-[85%] mx-auto bg-[rgb(36,30,30)] gap-[10px] p-[10px] sm:h-2/5">
            <div className="h-full w-full">
            <img src={data[item].ss1} className="h-full w-full"/>
            </div>
            <div className="h-full w-full">
            <img src={data[item].ss2} className="h-full w-full"/>
            </div>
        </div>
        </>
    )
}
export default ScreenShots;