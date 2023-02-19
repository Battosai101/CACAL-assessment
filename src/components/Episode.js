import TrendCard from './TrendCard'
import ThrowCard from './ThrowCard'

export default function Episode(){
    return(
        <div className='relative bg-[#1A1A1A] h-screen w-full px-[90px]'>
            <div className='relative border-2 border-white text-white top-14'>
                <h1 className='font-[Outfit] font-bold text-[34px] leading-[43px]'>
                    Trending <span className='text-[#FBC94A]'>this week</span>
                </h1>
                <div className='flex items-center'>
                    <TrendCard />
                </div>
            </div>
            <div className='relative border-2 border-white text-white top-28'>
                <h1 className='font-[Outfit] font-bold text-[34px] leading-[43px]'>
                    Throwback Anime!
                </h1>
                <div className='flex items-center'>
                    <ThrowCard />
                </div>
            </div>
        </div>
    )
}