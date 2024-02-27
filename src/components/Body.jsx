import Buttons from "./Butons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus,faCaretRight } from '@fortawesome/free-solid-svg-icons';


export default function Body(){
    return(
        <div className="flex  rounded-full border-b-4 border-black">
            <div className=" basis-2/3 bg-white px-10 py-10 w-full h-screen rounded ">
                <div className="flex flex-col gap-y-3 ">
                    <div>
                        <span className="font-bold text-9xl">MENTO</span>
                        <span className="text-9xl">RSHIP</span>
                    </div>
                    <div className="text-9xl flex flex-cols gap-4">
                        <span className="italic text-blue-500/50">for</span>
                        <span className="">SMALL</span>
                    </div>
                    <div className="text-9xl">BUSINESS!</div>
                </div>
                
                <div className="flex mt-40 justify-between ">
                    <Buttons  style="rounded-full bg-rose-400 px-4 py-3 text-4xl">
                        <span className="mr-6 ">BOOST MY BUSINESS</span>
                        < FontAwesomeIcon icon={faArrowRight}/> 
                    </Buttons>
                    <Buttons  style="rounded-full bg-sky-200 px-4 py-2 text-4xl">
                        <FontAwesomeIcon icon={faPlus}/> 
                    </Buttons>
                </div>
                
            </div>
            <div className=" basis-1/3 bg-backgoround bg-no-repeat bg-cover bg-center w-full h-auto border-l-4 border-black">
                <div className=" flex gap-24  mx-auto justify-between  h-96 content-end items-center">
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