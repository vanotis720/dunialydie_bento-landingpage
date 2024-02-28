import Buttons from "./Butons";

export default function Header(){
    return(
        <div className=" bg-white rounded border-b-4 border-black h-32 ">
            <div className=" text-black mx-6 py-11 grid md:grid-cols-2 justify-between">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="flex md:gap-4 items-center xl:gap-7">
                        <div className="font-bold mt-1 text-xl ">DUNI'S</div>
                        <div className="font-bold">.</div>
                        <div className="text-base mt-1 ">Accueil</div>
                        <div className="text-base mt-1 ">À propos</div>
                        <div className="text-base mt-1 ">Projets</div>
                    </div>
                    
                </div>
                <div className="grid md:grid-cols-2 items-center justify-items-end mx-4 ">
                    <div className="grid md:grid-cols-2 col-start-2 gap-4 items-center">
                        <div className="text-base mt-1 col-start-2 ">LOG IN</div>
                        <div className="font-bold text-base col-start-3 ">.</div>
                        <Buttons name="SIGN UP"style= 'bg-black rounded-full text-white py-3 px-4 text-base w-40 col-start-5 '/>                        
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}