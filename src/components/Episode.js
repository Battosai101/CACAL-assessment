import TrendCard from './TrendCard'
import ThrowCard from './ThrowCard'
import TrendData from '../data/TrendData'
import ThrowData from '../data/ThrowData'
import {useState} from 'react'
import {motion} from 'framer-motion'

export default function Episode(){
    
    const [trendValue, setTrendValue] = useState("")
    const [throwValue, setThrowValue] = useState("")

    const trend = TrendData.filter(item => {
        return trendValue === "" ? item : item.title.toLowerCase().includes(trendValue.toLowerCase())
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

    const throwback = ThrowData.filter(item => {
        return throwValue === "" ? item : item.title.toLowerCase().includes(throwValue.toLowerCase())
    }).map(item => {
        return <ThrowCard 
                key={item.id}
                id={item.id}
                title={item.title}
                poster={item.poster}
                alt={item.alt}
                rate={item.rate}
                category={item.category}
                />
    })

    return(
        <div className='relative font-[Outfit] w-full bg-[#1A1A1A] overflow-hidden'>
            <div className='relative flex items-center justify-between flex-wrap'>
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:0.5}} className='text-white font-bold text-[34px] sm:leading-[43px] mt-14 ml-5 sm:ml-[89px] shrink-0'>
                    Trending <span className='text-[#FBC94A]'>this week</span>
                </motion.h1>
                <input type="search" placeholder="Search..." className='self-end mr-[90px] rounded-lg px-3 py-1 bg-[#106580] text-[#FBC94A] ml-5 sm:ml-[89px]' onChange={(e) => setTrendValue(e.target.value)} />
            </div>
            <div className='text-white flex items-center mt-[26px] px-5 sm:px-[90px] space-x-4 py-2 overflow-auto scrollbar-hide scroll-smooth'>
                {trend}
            </div>
            <div className='relative flex items-center justify-between flex-wrap'>
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:0.5}} className=' text-white font-bold text-[34px] sm:leading-[43px] mt-14 ml-5 sm:ml-[89px] shrink-0'>
                    Throwback Anime!
                </motion.h1>
                <input type="search" placeholder="Search..." className='self-end mr-[90px] rounded-lg px-3 py-1 bg-[#FBC94A] text-[#106580] ml-5 sm:ml-[89px]' onChange={(e) => setThrowValue(e.target.value)} />
            </div>
            <div className='mt-9 pb-14 flex items-center px-5 sm:px-[90px] space-x-5 overflow-auto scrollbar-hide scroll-smooth'>
                {throwback}
            </div>
        </div>
    )
}