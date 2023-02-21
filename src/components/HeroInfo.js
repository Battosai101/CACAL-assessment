import heart from '../heart.png'
import star from '../star.png'
import play from '../play.png'
import line from '../line.png'
import circle from '../circle.png'
import {NavLink} from 'react-router-dom'

export default function HeroInfo(props){
    return(
        <div className="absolute top-[345px] text-white pl-[84px] pr-[90px] bottom-0 w-full z-20 overflow-hidden">
            <h1 className="font-[Outfit] font-bold text-[80px] max-w-[622px]">{props.title}</h1>
            <div className="flex items-center max-w-[622px]">
                <img src={star} alt="star icon"/>
                <p className='font-[Outfit] pl-1 pr-5 text-xs font-semibold'>{props.rate}</p>
                <p className='font-[Outfit] text-xs font-normal'>Category: {props.category}</p>
            </div>
            <div className='mt-6 font-[Outfit] text-base'>
                <p className='max-w-[622px] font-normal'>{props.desc}</p>
            </div>
            <div className="flex items-center mt-3">
                <button className="bg-[#106580] rounded-md flex items-center font-normal py-3 px-2.5 mr-4">
                    <span className='mr-2 pl-2.5'><img src={play} alt="playbutton icon" /></span>Watch Now!
                </button>
                <button className='border-[1px] border-white rounded-md'><img className='p-3'src={heart} alt="heart icon" /></button>
            </div>
            <div className='mt-60 text-white flex items-center justify-between'>
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
        </div>
    )
}