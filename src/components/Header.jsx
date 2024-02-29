import Buttons from "./Butons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header(){
    const [menuOpen, setMenu] = useState(false);
    return(
        <div className=" bg-white rounded border-2 border-black h-32 ">
            <div className="flex flex-wrap md:grid md:grid-cols-1 justify-between items-center p-4 md:p-6 ">
                <div className="grid md:grid-cols-1 items-center gap-4  w-full">
                    <div className="md:grid md:gap-4 items-center  w-full">
                        <div className="grid grid-cols-2 justify-between w-full">
                            <div className="font-bold text-xl ">DUNI'S</div>
                            <Buttons style="md:hidden p-2 col-start-2" onClick={()=> setMenu(!menuOpen)}>
                                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} className="w-6 h-6"/>
                            </Buttons>
                        </div>
                
                        <nav className={`${menuOpen ? 'flex' : 'hidden'} flex-col md:grid md:grid-cols-2 md:gap-7 gap-5 items-center md:justify-between w-full `}>
                            <div className="md:flex md:gap-6">
                                <div className="font-bold text-base">.</div>
                                <div className="text-base">Accueil</div>
                                <div className="text-base">À propos</div>
                                <div className="text-base">Projets</div>
                            </div>
                            
                            <div className="flex flex-col items-center  mx-4 ">
                                <div className="flex flex-col gap-4 items-center md:flex-row md:gap-5">
                                    <div className="text-base mt-1 col-start-2 md:w-14">LOG IN</div>
                                    <div className="font-bold text-base col-start-3 ">.</div>
                                    <Buttons name="SIGN UP"style= 'bg-black rounded-full text-white py-3 px-4 text-base w-40 col-start-5 '/>                        
                                </div>
                    
                            </div>
                        </nav>
                </div>
              
            </div>
        </div>
        </div>
        
    )
}

