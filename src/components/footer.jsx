
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurst } from '@fortawesome/free-solid-svg-icons';
export default function Footer(){
    return(
    <div className="flex  rounded  ">
    <div className=" basis-1/3  bg-sky-200 px-6 py-10 w-full h-96 border-2 border-black">
        <div className="flex flex-col gap-y-3 ">
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
            
            <div className="text-slate-700">
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
            <div className="h-2 w-1/3 bg-slate-700 rounded-full"></div>
            <div className="h-2 w-1/3 bg-slate-700 rounded-full"></div>
        </div>
        
    </div>
    <div className=" basis-2/3 bg-rose-400 w-full h-96 border-2 border-black px-6 py-10 flex flex-col gap-y-20">
        <div className=" flex justify-between  border-2 border-yellow-600 ">
            <div className='basis-1/2'>
                <div className="font-bold text-6xl">RISE!</div>
                <div>Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Sunt eligendi quis minima 
                    fugiat, voluptate fuga soluta illo dolorem 
                    corrupti, expedita officiis ad iure quae minus 
                    totam ab recusandae voluptatum non?
                    </div>
            </div>
            <div className="text-9xl basis-1/2 items-end">
            <FontAwesomeIcon icon={faBurst} style={{color: "#ffffff",}} />
            </div>
        </div>
        <div className='flex gap-10'>
            <div>
                WSJ
            </div>
            <div className='font-bold'>
                THE VERGE
            </div>
            <div>
                <span></span><span></span><span></span><span></span>
            </div>
            <div>
                <span></span><span></span>
            </div>
            <div>
                FAST@COMPANGY
            </div>
        </div>
    </div>

</div>
        
    )

    
}