import aot from '../aot.png'
import star from '../star.png'
export default function TrendCard(){
    return(
           <button className='relative w-[516px] h-[291px] shrink-0 rounded-[21px] overflow-hidden snap-start hover:shadow-md hover:shadow-[rgba(196,196,196,0.4)] hover:duration-300 hover:ease-out'>
                <img src={aot} alt="AoT" className='w-full h-full'/>
                <div className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black'></div>
                <div className='absolute w-full flex flex-col pl-[33px] top-[223px] bottom-5 text-white'>
                    <h1 className=' flex justify-start items-center font-[Outfit] font-medium text-2xl'>
                        Attack on Titan
                    </h1>
                    <div className='flex items-center'>
                        <p className='font-[Outfit] font-normal text-xs text-[#747474] mr-[116.51px]'>
                            Category: Adventure fiction, Dark fantasy, Martial Arts
                        </p>
                        <div className='flex items-center mr-5'>
                            <img src={star} alt="star icon" className='w-[19.97px] h-[18.99px] mr-1' />
                            <p className='font-[Outfit] font-medium text-xs'>
                                5.0
                            </p>
                        </div>
                    </div>
                </div>
           </button>
    )
}
/*
hover:shadow-md hover:shadow-white hover:duration-300 hover:ease-out*/


