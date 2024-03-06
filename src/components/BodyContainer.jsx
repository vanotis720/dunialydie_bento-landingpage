import Buttons from "./Butons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlus,
  faCaretRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import profilPic from "../assets/profile-pic(16).png";

export default function BodyContainer() {
  return (
    <div className="grid  md:grid-cols-8 border-2 w-auto">
      {/* premier carré */}

      <div className="relative 2xl:h-screen md:h-auto md:col-span-5 rounded border-r border-b border-black px-6 py-6 h-96 grid 2xl:grid-rows-5 md:grid-rows-2">
        <div className="2xl:grid 2xl:grid-row-3 gap-y-6 text-5xl 2xl:text-9xl md:flex md:flex-col md:text-7xl 2xl:items-center md:grid-row-3 md:w-auto xl:text-8xl items-center flex flex-col">
          <div className=" ">
            <span className="font-bold ">DUNIA</span>
            <span>DEV</span>
          </div>
          <div className="flex flex-cols gap-6 ">
            <span className="italic text-blue-500/50">for</span>
            <span className="">SMALL</span>
          </div>
          <div className="">BUSINESS!</div>
        </div>
        <div className=" absolute w-full bottom-9 px-5 flex justify-between 2xl:row-start-5 md:row-start-3 md:text-3xl 2xl:items-center 2xl:text-5xl place-items-center 2xl:h-auto md:items-end">
          <Buttons style="bg-rose-400 flex justify-between items-center 2xl:basis-2/3 rounded-full 2xl:px-3 2xl:py-3 md:p-3 p-3">
            <span className="md:mr-3 mr-2 ">ABOUT YOUR PROJECT</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Buttons>
          <Buttons style=" bg-blue-500/50 rounded-full 2xl:px-3 2xl:py-3 md:p-3 p-3">
            <FontAwesomeIcon icon={faPlus} />
          </Buttons>
        </div>
      </div>
      {/* deuxième carré */}

      <div className="relative md:col-span-3 md:w-full md:h-auto h-96 rounded border-2  border-l border-b border-black">
        <img
          src={profilPic}
          alt="photo"
          className="object-cover h-full w-full"
        />
        <div className="flex justify-between items-center xl:text-xl 2xl:w-auto 2xl:px-3 w-auto absolute bottom-9 left-6 right-6 gap-8 ">
          <Buttons style="rounded-full bg-white 2xl:px-4 2xl:py-3 text-base flex justify-between items-center md:text-2xl md:p-3 p-5 2xl:text-5xl">
            <span className="2xl:mr-6 md:mr-3 mr-2">ALL SERVICES</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Buttons>
          <Buttons style="rounded-full bg-white 2xl:px-4 2xl:py-2 text-base md:text-2xl md:p-3 p-5 2xl:text-5xl">
            <FontAwesomeIcon icon={faCaretRight} />
          </Buttons>
        </div>
      </div>
      {/* troisième carré */}
      <div className="border-2 border-r border-t border-black h-auto md:col-span-3 rounded md:p-5 bg-blue-500/50 p-8">
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between xl:gap-9 md:gap-x-9 items-center">
            <div>
              <span className="font-bold 2xl:text-6xl italic text-4xl">
                2,5k+
              </span>
            </div>
            <div className=" flex">
              <div className="rounded-full bg-backgoround1 bg-no-repeat bg-cover bg-center h-12 w-12 relative right-4"></div>
              <div className="rounded-full bg-backgoround2 bg-no-repeat bg-cover bg-center h-12 w-12 relative right-6"></div>
              <div className="rounded-full bg-backgoround3 bg-no-repeat bg-cover bg-center h-12 w-12 relative right-8"></div>
            </div>
          </div>

          <div className="text-slate-800 leading-loose">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              possimus porro ipsa inventore rerum aspernatur quo ducimus
              excepturi doloremque aliquam harum ut numquam odio expedita
              deleniti, voluptates, officia obcaecati distinctio?
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

      <div className="border-2 border-l border-t border-black h-auto md:col-span-5  rounded bg-rose-400 md:p-5 p-8">
        <div className=" flex justify-between   ">
          <div className="basis-2/3 gap-y-6 flex flex-col">
            <div className="font-bold 2xl:text-6xl text-4xl">QUI SUIS JE?</div>
            <div className="leading-loose text-slate-800">
              Je suis Lydie Dunia, une développeuse passionnée par la
              transformation des idées en réalités numériques. Avec une solide
              expérience en développement front-end et back-end, je crée des
              expériences utilisateur dynamiques et des solutions logicielles
              robustes. Découvrez mes projets, mes compétences, et n'hésitez pas
              à me contacter pour toute collaboration ou simplement pour
              échanger autour du développement.
            </div>
          </div>
          <div className="2xl:text-9xl basis-1/2 text-7xl">
            <div className="grid grid-cols-2">
              <div className="col-start-2">
                <FontAwesomeIcon icon={faCode} style={{ color: "#f6f5f4" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-8 mt-12 w-auto ">
          <div className="font-bold ">THE VERGE</div>
          <div className="grid grid-cols-5  gap-3 items-center justify-center w1/2">
            <span className="bg-black text-white h-5 w-4">W</span>
            <span>I</span>
            <span className="bg-black text-white h-5 w-4">R</span>
            <span>E</span>
            <span className="bg-black text-white h-5 w-4">D</span>
          </div>
          <div className="">
            <span className="italic text-sm ">
              <a
                rel="stylesheet"
                href="https://github.com/dunialydie"
                target="_blank "
                className="text-white"
              >
                Visualisez mes Projets
              </a>
            </span>
          </div>
          <div className="">dunialydie@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="col-span-3 bg-backgoround bg-no-repeat bg-cover bg-center w-full h-auto rounded border-2 border-black">
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
            </div> */
}

// <div style={{ background: "url('src/assets/profile-pic(4).png')", 'background-position': 'center', 'background-size': 'cover'}} className="md:col-span-3 md:w-full md:h-auto h-80 rounded border-2 border-black">
//     <div className="flex h-full justify-end flex-col rounded ">
//         <div className=" flex xl:justify-between mx-12 justify-between xl:gap-6 md:w-auto md:mx-3 xl:text-xl 2xl:text-5xl md:mb-24">
//             <Buttons  style="rounded-full bg-white px-4 py-3 text-base md:py-2 md:text-4xl">
//                 <span className="mr-6 ">ALL SERVICES</span>
//                 < FontAwesomeIcon icon={faArrowRight}/>
//             </Buttons>
//             <Buttons  style="rounded-full bg-white px-4 py-2  text-base md:text-4xl">
//                 <FontAwesomeIcon icon={faCaretRight} />
//             </Buttons>
//         </div>
//     </div>
// </div>

// <div className={`bg-[url(${background})] md:col-span-3 md:w-full md:h-auto h-80 rounded border-2 border-black`}>
//     <img src="src/assets/profile-pic(4).png" alt="photo" className="h-full relative border-2 border-red-700 w-full"/>
//     {/* <div className="grid 2xl:grid-rows-11 md:grid-rows-6 h-full rounded place-items-center absolute top-1 boder-2 border-blue-800"> */}
//         <div className="flex 2xl:row-start-10 md:row-start-6  2xl:mx-12 2xl:justify-between xl:text-xl 2xl:text-5xl 2xl:w-full 2xl:px-3 md:w-full w-auto boder-2 border-blue-800 absolute left-6 bottom-5 gap-8">
//             <Buttons  style="rounded-full bg-white 2xl:px-4 2xl:py-3 text-base flex justify-between items-center md:text-3xl md:p-3 p-5">
//                 <span className="2xl:mr-6 md:mr-3 mr-2">ALL SERVICES</span>
//                 < FontAwesomeIcon icon={faArrowRight}/>
//             </Buttons>
//             <Buttons  style="rounded-full bg-white 2xl:px-4 2xl:py-2  text-base md:text-3xl md:p-3 p-5">
//                 <FontAwesomeIcon icon={faCaretRight} />
//             </Buttons>
//         </div>
// </div>
