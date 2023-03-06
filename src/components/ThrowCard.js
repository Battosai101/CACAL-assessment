import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import slugify from 'react-slugify'

export default function ThrowCard(props){
    return(
        <NavLink to={`/throwback/${slugify(props.title)}`}>
            <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} whileHover={{scale: 0.9}} className='w-[250px] h-[400px] sm:w-[375px] sm:h-[427px] rounded-[30px] overflow-hidden shrink-0 border-2 border-white'>
                    <img src={`../ThrowPoster/${props.poster}`} alt={props.alt} className='w-full h-full'/>
            </motion.button>
        </NavLink>
    )
}
