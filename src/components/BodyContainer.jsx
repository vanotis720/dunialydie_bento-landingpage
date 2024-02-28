import Buttons from "./Butons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus,faCaretRight, faBurst, faCode } from '@fortawesome/free-solid-svg-icons';

export default function BodyContainer(){

    return(
        <div className="grid grid-cols-8 ">
            {/* premier carré */}

            <div className="h-screen col-span-5 px-10 py-10 rounded border-2 border-black">
                <div className="grid grid-row-5 gap-y-3 ">
                    <div>
                        <span className="font-bold text-9xl">MENTO</span>
                        <span className="text-9xl">RSHIP</span>
                    </div>
                    <div className="text-9xl flex flex-cols gap-6">
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
            {/* deuxième carré */}

            <div className="col-span-3 bg-backgoround bg-no-repeat bg-cover bg-center w-full h-auto rounded border-2 border-black">
                <div className="flex h-full justify-end flex-col rounded-xl">
                    <div className=" flex gap-24 justify-between mx-12  mb-48">
                        <Buttons  style="rounded-full bg-white px-4 py-3 text-4xl ">
                            <span className="mr-6 ">ALL SERVICES</span>
                            < FontAwesomeIcon icon={faArrowRight}/> 
                        </Buttons>
                        <Buttons  style="rounded-full bg-white px-4 py-2 text-4xl">
                            <FontAwesomeIcon icon={faCaretRight} />
                        </Buttons>
                    </div>
                </div>
            </div>
            {/* troisième carré */}
            <div className="border-2 border-black h-96 col-span-3 rounded p-10 bg-blue-500/50">
                <div className="flex flex-col gap-y-6">
                    <div className="flex justify-between">
                        <div>
                            <span className="font-bold text-6xl italic">2,5k+</span>
                        </div>
                        <div className=" flex gap-0">
                            <div className="rounded-full bg-backgoround1 bg-no-repeat bg-cover bg-center h-12 w-12 relative right-4"></div>
                            <div className="rounded-full bg-backgoround2 bg-no-repeat bg-cover bg-center h-12 w-12 relative right-6"></div>
                            <div className="rounded-full bg-backgoround3 bg-no-repeat bg-cover bg-center h-12 w-12 relative right-8"></div>
                        </div>
                    </div>
            
                    <div className="text-slate-800 leading-loose">
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Voluptas possimus porro ipsa inventore rerum aspernatur 
                            quo ducimus excepturi doloremque aliquam harum ut numquam 
                            odio expedita deleniti,
                            voluptates, officia obcaecati distinctio?
                        </span>
                    </div>
                </div>
        
                <div className="flex mt-14 gap-3 ">
                    <div className="h-2 w-1/3 bg-black rounded-full"></div>
                    <div className="h-2 w-1/3 bg-slate-400 rounded-full"></div>
                    <div className="h-2 w-1/3 bg-slate-400 rounded-full"></div>
                </div>
            </div>
            {/* quatrième carré */}

            <div className="border-2 border-black h-96 col-span-5 rounded bg-rose-400 p-10">
                <div className=" flex justify-between   ">
                    <div className='basis-1/2 gap-y-6 flex flex-col'>
                        <div className="font-bold text-6xl">RISE!</div>
                        <div className="leading-loose text-slate-800">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit. Sunt eligendi quis minima 
                            fugiat, voluptate fuga soluta illo dolorem 
                            corruptBi, expedita officiis ad iure quae minus 
                            totam ab recusandae voluptatum non?
                        </div>
                    </div>
                    <div className="text-9xl basis-1/2 ">
                        <div className="grid grid-cols-2">
                            <div className="col-start-2">
                                <FontAwesomeIcon icon={faCode} style={{color: "#f6f5f4",}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-5 gap-10 mt-12 '>
                    <div className="font-custom ">
                        WSJ
                    </div>
                    <div className='font-bold '>
                        THE VERGE
                    </div>
                    <div className="flex  gap-3 items-center ">
                        <span className="bg-black text-white h-5">W</span>
                        <span>I</span>
                        <span className="bg-black text-white h-5">R</span>
                        <span>E</span>
                        <span className="bg-black text-white h-5">D</span>

                    </div>
                    <div className="">
                        <span className="italic text-xs">The</span>
                        <span>Atlantic</span>
                    </div>
                    <div className="">
                        FAST@COMPANGY
                    </div>
                </div>
            </div>

        </div>
    )
}