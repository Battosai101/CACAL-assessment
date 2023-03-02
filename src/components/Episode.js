import TrendCard from './TrendCard'
import ThrowCard from './ThrowCard'
import TrendData from '../data/TrendData'
import ThrowData from '../data/ThrowData'
import {useState} from 'react'

export default function Episode(){
    
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue.toLowerCase())
    const trend = TrendData.filter(item => {
        return searchValue.toLowerCase() === "" ? item : item.title.toLowerCase().includes(searchValue.toLowerCase())
    }).map(item => {
        return <TrendCard 
                key={item.id}
                id={item.id}
                poster={item.poster}
                alt={item.alt}
                title={item.title}
                rate={item.rate}
                category={item.category}
                />
    })

    const throwback = ThrowData.map(item => {
        return <ThrowCard 
                key={item.id}
                id={item.id}
                poster={item.poster}
                alt={item.alt}
                />
    })

    return(
        <div className='relative font-[Outfit] w-full bg-[#1A1A1A]'>
            <div className='relative flex items-center justify-between'>
                <h1 className='text-white font-bold text-[34px] leading-[43px] mt-14 ml-[89px]'>
                    Trending <span className='text-[#FBC94A]'>this week</span>
                </h1>
                <input type="search" placeholder="Search..." className='self-end mr-[90px] rounded-lg pl-3' onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className='text-white flex items-center mt-[26px] px-[90px] space-x-4 py-2 overflow-auto scrollbar-hide scroll-smooth scroll-pl-[90px] snap-x'>
                {trend}
            </div>
            <div className='relative flex items-center justify-between'>
                <h1 className=' text-white font-bold text-[34px] leading-[43px] mt-14 ml-[89px]'>
                    Throwback Anime!
                </h1>
                <input type="search" placeholder="Search..." className='self-end mr-[90px] rounded-lg pl-3' />
            </div>
            <div className='mt-9 pb-14 flex items-center px-[90px] space-x-5 overflow-auto scrollbar-hide scroll-smooth scroll-pl-[90px] snap-x'>
                {throwback}
            </div>
        </div>
    )
}