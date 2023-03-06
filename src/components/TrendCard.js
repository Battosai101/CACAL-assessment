import star from '../icons/star.png'
import {NavLink} from 'react-router-dom'
import slugify from 'react-slugify'
import {motion} from 'framer-motion'

export default function TrendCard(props){

    return(
        <>
        <NavLink to={`/animedetails/${slugify(props.title)}`}>
           <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileHover={{scale: 0.9}} className='relative h-[400px] w-[250px] sm:w-[516px] sm:h-[291px] shrink-0 rounded-[21px] overflow-hidden hover:shadow-[0_4px_12px_-1px_rgba(196,196,196,0.4)] hover:duration-300 hover:ease-out'>
                <img src={`../TrendPoster/${props.poster}`} alt={props.alt} className='w-full h-full'/>
                <div className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black'></div>
                <div className='absolute w-full flex flex-col pl-[33px] top-[223px] bottom-5 text-white'>
                    <h1 className=' flex justify-start items-center font-[Outfit] font-medium text-2xl'>
                        {props.title}
                    </h1>
                    <div className='flex items-center justify-between flex-wrap'>
                        <p className='font-[Outfit] font-normal text-xs text-[#747474] text-justify'>
                            Category: {props.category}
                        </p>
                        <div className='flex items-center mr-8'>
                            <img src={star} alt="star icon" className='w-[19.97px] h-[18.99px] mr-1' />
                            <p className='font-[Outfit] font-medium text-xs'>
                                {props.rate}
                            </p>
                        </div>
                    </div>
                </div>
           </motion.button>
        </NavLink>
        </>
    )
}