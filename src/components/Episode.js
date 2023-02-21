import TrendCard from './TrendCard'
import ThrowCard from './ThrowCard'
import TrendData from './TrendData'
import ThrowData from './ThrowData'

export default function Episode(){

    const trend = TrendData.map(item => {
        return <TrendCard 
                key={item.id}
                poster={item.poster}
                alt={item.alt}
                title={item.title}
                rate={item.rate}
                category={item.category}
                />
    })

    const throwback= ThrowData.map(item =>{
        return <ThrowCard 
                key={item.id}
                poster={item.poster}
                alt={item.alt}
                />
    })

    return(
        <div className='relative font-[Outfit] w-full bg-[#1A1A1A]'>
            <h1 className='text-white font-bold text-[34px] leading-[43px] pt-14 pl-[89px]'>
                Trending <span className='text-[#FBC94A]'>this week</span>
            </h1>
            <div className='text-white flex items-center mt-[26px] px-[90px] space-x-4 py-2 overflow-auto scrollbar-hide scroll-smooth scroll-pl-[90px] snap-x'>
                {trend}
            </div>
            <h1 className=' text-white font-bold text-[34px] leading-[43px] mt-14 pl-[89px]'>
                Throwback Anime!
            </h1>
            <div className='mt-9 pb-14 flex items-center px-[90px] space-x-4 overflow-auto'>
                {throwback}
            </div>
        </div>
    )
}
