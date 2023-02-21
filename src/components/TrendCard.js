import AoT from '../AoT.png'
export default function TrendCard(){
    return(
           <button className='w-[516px] h-[291px] shrink-0 rounded-3xl overflow-hidden scroll-pl-[90px] border-2 border-yellow-300'>
                <img src={AoT} alt="AoT" className='w-full h-full'/>
           </button>
    )
}
/*
<button className='relative border-[1px] border-white w-[516px] h-[291px] rounded-3xl overflow-hidden'>
                <img className='absolute w-full h-full'src={AoT}/>
            </button>
            */