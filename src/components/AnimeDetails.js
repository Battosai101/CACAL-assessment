import star from '../icons/star.png'
import {NavLink} from 'react-router-dom'
import AnimeEpisode from './AnimeEpisode'
import AnimeEpisodeData from '../data/AnimeEpisodeData'
export default function AnimeDetails(){
    const episodes = AnimeEpisodeData.map(ep => {
        return <AnimeEpisode 
                key={ep.id}
                ep={ep.ep}
                desc={ep.desc}
                img={ep.img}
                />
    })

    return(
            <div className='relative font-[Outfit] w-full bg-[#1A1A1A]'>
                <NavLink to='/'>
                <button className='text-white font-bold text-[34px] leading-[43px] pt-56 pl-[89px] mb-[26px]'>
                    Trending <span className='text-[#FBC94A]'>this week</span>
                </button>
            </NavLink>
            <div className='relative flex items-start space-x-4'>
                <div className='flex flex-col ml-[90px]'>
                    <div className='relative mb-[17px]'>
                    <div className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black rounded-[21px]'></div>
                        <img src='../zoom.png' alt='zoom aot' className='w-[516px] h-[621px]'/>
                        <div className='flex flex-col absolute bottom-10 mt-[533px] pl-[33px] w-full'>
                            <h1 className='font-[Outfit] font-medium text-2xl text-white'>
                                Attack On Titan
                            </h1>
                            <div className='flex items-center justify-between'>
                                <p className='font-[Outfit] font-normal text-xs text-[#747474]'>
                                    Category: Adventure fiction, Dark fantasy, Martial Arts
                                </p>
                                <div className='flex items-center mr-8'>
                                    <img src={star} alt='star icon' className='w-[19.97px] h-[18.99px] mr-1' />
                                    <p className='font-[Outfit] font-medium text-xs text-white'>
                                        5.0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='w-[512px] pb-5 font-[Outfit] font-normal text-xl text-[#747474]'>
                        When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the 
                        giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through 
                        the barriers, causing a flood of the giants into what had been the human…
                    </p>
                </div>
                <div className='relative flex flex-col pr-[90px]'>
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
            </div>
            </div>
    )
}