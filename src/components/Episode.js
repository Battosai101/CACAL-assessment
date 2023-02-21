import TrendCard from './TrendCard'
import ThrowCard from './ThrowCard'

export default function Episode(){
    return(
        <div className='relative font-[Outfit] border-2 border-red-500 w-full pb-14 bg-[#1A1A1A]'>
            <h1 className='border-2 border-blue-500 text-white font-bold text-[34px] leading-[43px] mt-14 pl-[89px]'>
                Trending <span className='text-[#FBC94A]'>this week</span>
            </h1>
            <div className='text-white border-2 border-white flex items-center mt-[26px] pl-[90px] space-x-4 overflow-auto'>
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
            </div>
            <h1 className='border-2 border-blue-500 text-white font-bold text-[34px] leading-[43px] mt-14 pl-[89px]'>
                Throwback Anime!
            </h1>
            <div className='mt-9 flex items-center border-2 border-yellow-500 px-[90px] overflow-auto'>
                <ThrowCard />
                <ThrowCard />
                <ThrowCard />
            </div>
        </div>
    )
}

/*
<div className='mt-9 flex items-center border-2 border-yellow-500 px-[90px]'>
    <ThrowCard />
    <ThrowCard />
    <ThrowCard />
</div>*/