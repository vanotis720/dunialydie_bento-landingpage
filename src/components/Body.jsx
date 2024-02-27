import Buttons from "./Butons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus,faCaretRight } from '@fortawesome/free-solid-svg-icons';


export default function Body(){
    return(
        <div className="flex  rounded ">
            <div className=" basis-2/3 bg-white px-6 py-10 w-full h-96 border-2 border-black">
                <div className="flex flex-col gap-y-3 ">
                    <div>
                        <span className="font-bold text-6xl">MENTO</span>
                        <span className="text-6xl">RSHIP</span>
                    </div>
                    <div className="text-6xl flex flex-cols gap-4">
                        <span className="italic text-blue-500/50">for</span>
                        <span className="">SMALL</span>
                    </div>
                    <div className="text-6xl">BUSINESS!</div>
                </div>
                
                <div className="flex mt-14 justify-between ">
                    <Buttons  style="rounded-full bg-rose-400 px-4 py-2 ">
                        <span className="mr-6 text-base">BOOST MY BUSINESS</span>
                        < FontAwesomeIcon icon={faArrowRight}/> 
                    </Buttons>
                    <Buttons  style="rounded-full bg-sky-200 px-4 py-2 ">
                        <FontAwesomeIcon icon={faPlus}/> 
                    </Buttons>
                </div>
                
            </div>
            <div className=" basis-1/3 bg-backgoround bg-no-repeat bg-cover bg-center w-full h-96 border-2 border-black ">
                <div className=" flex gap-24  mx-auto justify-between  border-2 border-yellow-600 h-96 content-end items-center">
                        <Buttons  style="rounded-full bg-white ">
                            <span className="mr-6 text-base">BOOST MY BUSINESS</span>
                            < FontAwesomeIcon icon={faArrowRight}/> 
                        </Buttons>
                        <Buttons  style="rounded-full bg-white  ">
                            <FontAwesomeIcon icon={faCaretRight} />
                        </Buttons>
                </div>
            </div>

        </div>
    )
}