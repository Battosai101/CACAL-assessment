import star from '../icons/star.png'
import {NavLink,useParams} from 'react-router-dom'
import AnimeEpisode from './AnimeEpisode'
import AnimeEpisodeData from '../data/AnimeEpisodeData'
import TrendData from '../data/TrendData'
import {useEffect,useState} from 'react'
import slugify from 'react-slugify'
import {motion} from 'framer-motion'
import Hero from './Hero'

export default function AnimeDetails(){
    const {title} = useParams();
    const [trend, setTrend] = useState([]);
    useEffect(() => {
        setTrend(TrendData.find((data) => slugify(data.title) === title))
    },[title])

    const episodes = AnimeEpisodeData.map(ep => {
        return <AnimeEpisode 
                key={ep.id}
                ep={ep.ep}
                desc={ep.desc}
                img={ep.img}
                />
    })
    
    return(
        <>
        <Hero />
        <div className='relative font-[Outfit] w-full bg-[#1A1A1A]'>
            <NavLink to='/' className='inline-block mt-14 ml-5 lg:ml-[89px] mb-[26px]'>
                <motion.button whileHover={{scale:0.9}} className='text-white font-bold text-[34px] leading-[43px]'>
                    Trending <span className='text-[#FBC94A]'>this week</span>
                </motion.button>
            </NavLink>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className='relative block xl:flex items-start space-x-4 overflow-hidden'>
                <div className='flex flex-col mx-5 lg:ml-[90px]'>
                    <div className='relative mb-[17px]'>
                    <div className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black rounded-[21px]'></div>
                        <img src={`../TrendPoster/${trend.poster}`} alt='zoom aot' className='w-full h-[400px] sm:h-[621px] object-cover object-center rounded-[21px]'/>
                        <div className='flex flex-col absolute bottom-10 mt-[533px] pl-[33px] w-full'>
                            <h1 className='font-[Outfit] font-medium text-2xl text-white'>
                                {trend.title}
                            </h1>
                            <div className='flex items-center justify-between'>
                                <p className='font-[Outfit] font-normal text-xs text-[#747474]'>
                                    Category: {trend.category}
                                </p>
                                <div className='flex items-center mr-8'>
                                    <img src={star} alt='star icon' className='w-[19.97px] h-[18.99px] mr-1' />
                                    <p className='font-[Outfit] font-medium text-xs text-white'>
                                        {trend.rate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className=' w-full lg:w-[512px] pb-5 font-[Outfit] font-normal text-xl text-[#747474]'>
                        When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the 
                        giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through 
                        the barriers, causing a flood of the giants into what had been the human…
                    </p>
                </div>
                <div className='relative flex flex-col px-5 lg:pr-[90px]'>
                    <div className='flex items-center justify-between'>
                        <p className='font-[Outfit] font-medium text-2xl text-white'>
                            Episodes
                        </p>
                        <p className='font-[Outfit] font-medium text-2xl text-white'>
                            Season 1
                        </p>
                    </div>
                    {episodes}
                </div>
            </motion.div>
        </div>
        </>
    )
}