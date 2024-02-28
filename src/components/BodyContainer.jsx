import Buttons from "./Butons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus,faCaretRight,faCode } from '@fortawesome/free-solid-svg-icons';

export default function BodyContainer(){

    return(
        <div className="grid xl: grid-cols-6 md:grid-cols-8 ">
            {/* premier carré */}

            <div className="h-screen xl: col-span-4 md:col-span-5 md:px-10 md:py-14 rounded border-2 border-black">
                <div className="grid grid-row-3 gap-y-5 text-4xl md:text-9xl">
                    <div className="">
                        <span className="font-bold ">DUNIA</span>
                        <span >DEV</span>
                    </div>
                    <div className="flex flex-cols gap-6 ">
                        <span className="italic text-blue-500/50">for</span>
                        <span className="">SMALL</span>
                    </div>
                    <div className="">BUSINESS!</div>
                </div>
                <div className="flex mt-44 justify-between ">
                    <Buttons  style="rounded-full bg-rose-400 px-4 py-3 md:text-4xl">
                        <span className="mr-6 ">ABOUT YOUR PROJECT</span>
                        < FontAwesomeIcon icon={faArrowRight}/> 
                    </Buttons>
                    <Buttons  style="rounded-full bg-blue-500/50 px-4 py-2 md:text-4xl">
                        <FontAwesomeIcon icon={faPlus}/> 
                    </Buttons>
                </div>
            </div>
            {/* deuxième carré */}

            <div className="md:col-span-3 xl:col-span-3 bg-backgoround bg-no-repeat bg-cover bg-center md:w-full h-auto rounded border-2 border-black">
                <div className="flex h-full justify-end flex-col rounded-xl">
                    <div className=" flex gap-24 justify-between mx-12  mb-36">
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
            <div className="border-2 border-black h-auto md:col-span-3 xl:col-span-3 rounded p-10 bg-blue-500/50">
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

            <div className="border-2 border-black h-auto md:col-span-5 xl: col-span-4 rounded bg-rose-400 p-10">
                <div className=" flex justify-between   ">
                    <div className='basis-1/2 gap-y-6 flex flex-col'>
                        <div className="font-bold text-6xl">QUI SUIS JE?</div>
                        <div className="leading-loose text-slate-800">
                        Je suis Lydie Dunia, une développeuse passionnée par la transformation 
                        des idées en réalités numériques. Avec une solide expérience 
                        en développement front-end et back-end, je crée des expériences 
                        utilisateur dynamiques et des solutions logicielles robustes.

                        Découvrez mes projets, mes compétences, et n'hésitez pas à me 
                        contacter pour toute collaboration ou simplement pour échanger 
                        autour du développement.
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
                <div className='grid grid-cols-5 gap-8 mt-12 w-auto'>
                    <div className="font-custom ">
                        WSJ
                    </div>
                    <div className='font-bold '>
                        THE VERGE
                    </div>
                    <div className="grid grid-cols-5  gap-3 items-center justify-center w1/2">
                        <span className="bg-black text-white h-5 w-4">W</span>
                        <span>I</span>
                        <span className="bg-black text-white h-5 w-4">R</span>
                        <span>E</span>
                        <span className="bg-black text-white h-5 w-4">D</span>

                    </div>
                    <div className="">
                        <span className="italic text-sm ">https://github.com/dunialydie</span>
                        <span></span>
                    </div>
                    <div className="">
                        dunialydie@gmail.com
                    </div>
                </div>
            </div>

        </div>
    )
}

{/* <div className="col-span-3 bg-backgoround bg-no-repeat bg-cover bg-center w-full h-auto rounded border-2 border-black">
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
            </div> */}