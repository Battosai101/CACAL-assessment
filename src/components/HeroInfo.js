import heart from '../icons/heart.png'
import star from '../icons/star.png'
import play from '../icons/play.png'
import line from '../icons/line.png'
import circle from '../icons/circle.png'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

export default function HeroInfo(props){
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:0.5}} className="absolute top-[345px] text-white pl-[84px] pr-[90px] bottom-0 w-full z-20 overflow-hidden">
            <h1 className="font-[Outfit] font-bold text-[50px] sm:font-bold sm:text-[80px] max-w-[622px]">{props.title}</h1>
            <div className="flex items-center max-w-[622px]">
                <img src={star} alt="star icon"/>
                <p className='font-[Outfit] pl-1 pr-5 text-xs font-semibold'>{props.rate}</p>
                <p className='font-[Outfit] text-xs font-normal'>Category: {props.category}</p>
            </div>
            <div className='mt-6 font-[Outfit] text-base'>
                <p className='max-w-[622px] font-normal'>{props.desc}</p>
            </div>
            <div className="flex items-center mt-3">
                <motion.button whileHover={{scale:1.1}} className="bg-[#106580] rounded-md flex items-center font-normal py-3 px-2.5 mr-4">
                    <span className='mr-2 pl-2.5'><img src={play} alt="playbutton icon" /></span>Watch Now!
                </motion.button>
                <motion.button whileHover={{scale:0.9}} className='border-[1px] border-white rounded-md'><img className='p-3 hover:bg-[#106580]'src={heart} alt="heart icon" />
                </motion.button>
            </div>
            <div className='mt-8 sm:mt-60 text-white flex items-center justify-between flex-wrap'>
                <div className='flex justify-start font-[Outfit] text-sm space-x-7'>
                    <NavLink to='/'>
                        <p className='font-thin hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                            Overview
                        </p>
                    </NavLink>
                    <NavLink to='/'>
                        <p className='font-thin hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                            Episodes
                        </p>
                    </NavLink>
                    <NavLink to='/'>
                        <p className='font-thin hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                            Details
                        </p>
                    </NavLink>
                </div>
                <div className='flex justify-end space-x-1'>
                    <img src={line} alt="line" />
                    <img src={circle} alt="circle" />
                    <img src={circle} alt="circle" />
                    <img src={circle} alt="circle" />
                </div>
            </div>
        </motion.div>
    )
}