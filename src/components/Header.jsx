import Buttons from "./Butons";

export default function Header(){
    return(
        <div className=" bg-white rounded">
            <div className=" text-black bold flex justify-between mx-6 py-6 items-center">
                <div className="flex gap-4 items-center">
                    <span className="font-bold mt-1">MENTO</span>
                    <span className="font-bold">.</span>
                    <span className="text-sm/[12px] mt-1">SearchMentors</span>
                    <span className="text-sm/[12px] mt-1">Calendar</span>
                    <span className="text-sm/[12px] mt-1">Cases</span>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="text-sm/[12px] mt-1">LOG IN</span>
                    <span className="font-bold">.</span>
                    <Buttons name="SIGN UP"style= 'bg-black rounded-full text-white py-2 px-4 text-sm/[12px] '/>
                </div>
            </div>
        </div>
        
    )
}