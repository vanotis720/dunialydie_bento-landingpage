import Buttons from "./Butons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus,faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function BodyContainer(){

    return(
        <div className="grid grid-cols-8">
            <div className="h-screen col-span-5 px-10 py-10">
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
            <div className="border-2 border-red-600 col-span-3 bg-backgoround bg-no-repeat bg-cover bg-center w-full h-auto">
                <div className=" grid grid-cols-6  mx-auto   h-96 content-end items-center">
                        <Buttons  style="rounded-full bg-white col-start-2">
                            <span className="mr-6 text-base">BOOST MY BUSINESS</span>
                            < FontAwesomeIcon icon={faArrowRight}/> 
                        </Buttons>
                        <Buttons  style="rounded-full bg-white col-start-5 ">
                            <FontAwesomeIcon icon={faCaretRight} />
                        </Buttons>
                </div>
            </div>
            <div className="border-2 border-black h-6 col-span-3"></div>
            <div className="border-2 border-blue-600 h-6 col-span-5"></div>

        </div>
    )
}