import Buttons from "./Butons";

export default function Header(){
    return(
        <div className=" bg-white rounded border-b-4 border-black h-32 ">
            <div className=" text-black mx-6 py-11 grid grid-cols-2  justify-between">
                <div className="grid grid-cols-5  items-center gap-0 ">
                    <span className="font-bold mt-1 text-xl">MENTO</span>
                    <span className="font-bold">.</span>
                    <span className="text-base mt-1">SearchMentors</span>
                    <span className="text-base mt-1">Calendar</span>
                    <span className="text-base mt-1">Cases</span>
                </div>
                <div className="grid grid-cols-5 items-center justify-items-end gap-1 mx-4 ">
                    <span className="text-base mt-1  col-start-3">LOG IN</span>
                    <span className="font-bold text-base">.</span>
                    <Buttons name="SIGN UP"style= 'bg-black rounded-full text-white py-3 px-4 text-base w-40'/>
                </div>
            </div>
        </div>
        
    )
}