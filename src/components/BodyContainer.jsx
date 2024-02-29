import Buttons from "./Butons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus,faCaretRight,faCode } from '@fortawesome/free-solid-svg-icons';

export default function BodyContainer(){

    return(
        <div className="grid  md:grid-cols-8 border-2 ">
            {/* premier carré */}

            <div className="md:h-screen  md:col-span-5 md:px-10 md:py-14 rounded border-2 border-black px-6 py-6">
                <div className="grid grid-row-3 gap-y-6 text-5xl 2xl:text-9xl items-center justify-center md:grid-row-3  border-2 border-red-500 md:w-auto xl:text-8xl">
                    <div className=" border-2 border-yellow-500">
                        <span className="font-bold ">DUNIA</span>
                        <span >DEV</span>
                    </div>
                    <div className="flex flex-cols gap-6  border-2 border-pink-500">
                        <span className="italic text-blue-500/50">for</span>
                        <span className="">SMALL</span>
                    </div>
                    <div className=" border-2 border-blue-500">BUSINESS!</div>
                </div>
                <div className="flex mt-48 justify-between  gap-6 md:gap-14">
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

            <div className="md:col-span-3 bg-backgoround bg-no-repeat bg-cover bg-center md:w-full md:h-auto h-80 rounded border-2 border-black">
                <div className="flex h-full justify-end flex-col rounded  border-2 border-blue-500">
                    <div className=" flex justify-between mx-12 md:mb-48 mb-6 border-2 border-pink-500 xl:mb-24 xl:gap-6 ">
                        <Buttons  style="rounded-full bg-white px-4 py-3 2xl:text-4xl text-base md:px-2 md:py-2 border-2 border-yellow-500 xl:text-2xl">
                            <span className="mr-6 ">ALL SERVICES</span>
                            < FontAwesomeIcon icon={faArrowRight}/> 
                        </Buttons>
                        <Buttons  style="rounded-full bg-white px-4 py-2 md:text-4xl text-base border-2 border-yellow-500">
                            <FontAwesomeIcon icon={faCaretRight} />
                        </Buttons>
                    </div>
                </div>
            </div>
            {/* troisième carré */}
            <div className="border-2 border-black h-auto md:col-span-3  rounded md:p-10 bg-blue-500/50 p-8">
                <div className="flex flex-col gap-y-6">
                    <div className="flex justify-between xl:gap-9">
                        <div>
                            <span className="font-bold 2xl:text-6xl italic text-5xl">2,5k+</span>
                        </div>
                        <div className=" flex">
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

            <div className="border-2 border-black h-auto md:col-span-5  rounded bg-rose-400 md:p-10 p-8">
                <div className=" flex justify-between   ">
                    <div className='basis-1/2 gap-y-6 flex flex-col'>
                        <div className="font-bold 2xl:text-6xl text-5xl">QUI SUIS JE?</div>
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
                    <div className="2xl:text-9xl basis-1/2 text-7xl">
                        <div className="grid grid-cols-2">
                            <div className="col-start-2">
                                <FontAwesomeIcon icon={faCode} style={{color: "#f6f5f4",}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-5 gap-8 mt-12 w-auto '>
                    
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
                        <span className="italic text-sm ">
                            <a rel="stylesheet" href="https://github.com/dunialydie" target="_blank " className="text-white">Visualisez mes Projets</a>
                        </span>
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