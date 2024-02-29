import Buttons from "./Butons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

export default function Header(){
    const [menuOpen, setMenu] = useState(false);
    return(
        <div className=" bg-white rounded border-2 border-black h-32 ">
            <div className="flex flex-wrap md:grid md:grid-cols-1 justify-between items-center p-4 md:p-6 border-2 border-blue-800">
                <div className="grid md:grid-cols-1 items-center gap-4 border-2 border-red-800">
                    <div className="md:flex md:gap-4 items-center border-2 border-green-800 ">
                    <div className="font-bold text-xl border-2 border-blue-800">DUNI'S</div>
                    <Buttons style="md:hidden p-2 col-start-2" onClick={()=> setMenu(!menuOpen)}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} className="w-6 h-6" />
                    </Buttons>
                    
                        <nav className={`${menuOpen ? 'flex' : 'hidden'} flex-col md:grid md:grid-cols-2 md:gap-7 gap-5 items-center border-2 border-yellow-600 md:justify-between w-full`}>
                            <div className="md:flex md:gap-6">
                                <div className="font-bold text-base">.</div>
                                <div className="text-base">Accueil</div>
                                <div className="text-base">À propos</div>
                                <div className="text-base">Projets</div>
                            </div>
                            
                            <div className="flex flex-col items-center  mx-4 border-2 border-blue-800 ">
                                <div className="flex flex-col gap-4 items-center md:flex-row md:gap-5">
                                    <div className="text-base mt-1 col-start-2 md:w-14">LOG IN</div>
                                    <div className="font-bold text-base col-start-3 ">.</div>
                                    <Buttons name="SIGN UP"style= 'bg-black rounded-full text-white py-3 px-4 text-base w-40 col-start-5 '/>                        
                                </div>
                    
                            </div>
                        </nav>
                </div>
                {/* <div className="grid md:grid-cols-2 items-center justify-items-end mx-4 hidden border-2 border-pink-800">
                    <div className="grid md:grid-cols-2 col-start-2 gap-4 items-center">
                        <div className="text-base mt-1 col-start-2 ">LOG IN</div>
                        <div className="font-bold text-base col-start-3 ">.</div>
                        <Buttons name="SIGN UP"style= 'bg-black rounded-full text-white py-3 px-4 text-base w-40 col-start-5 '/>                        
                    </div>
                    
                </div> */}
            </div>
        </div>
        </div>
        
    )
}


// import Buttons from "./Butons";

// export default function Header(){
//     return(
//         <div className=" bg-white rounded border-2 border-black h-32 ">
//             <div className=" text-black md:mx-6 md:py-11 grid md:grid-cols-2 justify-between">
//                 <div className="grid md:grid-cols-2 items-center">
//                     <div className="flex md:gap-4 items-center xl:gap-7">
//                         <nav>
//                             <div className="font-bold mt-1 text-xl ">DUNI'S</div>
//                             <div className="font-bold">.</div>
//                             <div className="text-base mt-1 ">Accueil</div>
//                             <div className="text-base mt-1 border-2 border-blue-800">À propos</div>
//                             <div className="text-base mt-1 ">Projets</div>
//                         </nav>
//                     </div>
                    
//                 </div>
//                 <div className="grid md:grid-cols-2 items-center justify-items-end mx-4 ">
//                     <div className="grid md:grid-cols-2 col-start-2 gap-4 items-center">
//                         <div className="text-base mt-1 col-start-2 ">LOG IN</div>
//                         <div className="font-bold text-base col-start-3 ">.</div>
//                         <Buttons name="SIGN UP"style= 'bg-black rounded-full text-white py-3 px-4 text-base w-40 col-start-5 '/>                        
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
        
//     )
// }