import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
export default function Navbar(){
    return(
        <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:1.5}} className='absolute flex items-center justify-between z-10 w-full px-[90px] text-white flex-wrap overflow-hidden'>
            <NavLink to='/' className='mt-[75px]'>
                <motion.h1 whileHover={{scale:1.2}} className='font-[Outfit] text-2xl font-bold items-center hover:text-[#106580]'>
                    AnimeBinge
                </motion.h1>
            </NavLink>
            <div className='font-[Montserrat] text-white font-normal text-base mt-2 sm:mt-[81px]'>
                <NavLink to='/' className='mr-[53px]'>
                    <button className='mb-2 sm:mb-0 hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                        Home
                    </button>
                </NavLink>
                <NavLink to='/discover' className='mr-[58px]'>
                    <button className='mb-2 sm:mb-0 hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                        Discover
                    </button>
                </NavLink>
                <NavLink to='/aboutus' className='mr-[49px]'>
                    <button className='mb-2 sm:mb-0 hover:font-bold hover:underline hover:decoration-4 hover:decoration-[#106580] hover:underline-offset-8'>
                        About Us
                    </button>
                </NavLink>
                <NavLink to='/signup' className='mr-[21px]'>
                    <button className='mb-2 sm:mb-0 px-7 py-3 border-[1px] border-white rounded-md hover:bg-[#106580]'>
                        Sign Up
                    </button>
                </NavLink>
                <NavLink to='/login'>
                    <button className='mb-2 sm:mb-0 px-8 py-3 rounded-md bg-[#106580] hover:bg-white hover:text-[#106580]'>
                        Log In
                    </button>
                </NavLink>
            </div>
        </motion.nav>
    )
}
