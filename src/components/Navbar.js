import {NavLink} from 'react-router-dom'
export default function Navbar(){
    return(
        <nav className='absolute flex items-center justify-between z-10 w-full px-[90px] text-white flex-wrap'>
            <NavLink to='/'>
                <h1 className='font-[Outfit] text-2xl font-bold items-center pt-[75px]'>
                    AnimeBinge
                </h1>
            </NavLink>
            <div className='font-[Montserrat] text-white font-normal text-base items-center pt-[81px] '>
                <NavLink to='/'>
                    <button className='mr-[53px]'>
                        Home
                    </button>
                </NavLink>
                <NavLink to='/discover'>
                    <button className='mr-[58px]'>
                        Discover
                    </button>
                </NavLink>
                <NavLink to='/aboutus'>
                    <button className='mr-[49px]'>
                        About Us
                    </button>
                </NavLink>
                <NavLink to='/signup'>
                    <button className='mr-[21px] px-7 py-3 border-[1px] border-white rounded-md'>
                        Sign Up
                    </button>
                </NavLink>
                <NavLink to='/login'>
                    <button className='px-8 py-3 rounded-md bg-[#106580]'>
                        Log In
                    </button>
                </NavLink>
            </div>
        </nav>
        /*
        <div className='flex items-center justify-between bg-black w-full pt-24 px-[90px] flex-wrap'>
            <h1 className='text-white w-[135px] h-[30px] top-[75px] text-2xl font-bold font-[Outfit] cursor-pointer'>AnimeBinge</h1>
            <div className='flex items-center text-white'>
                <NavLink to='/'><button className='mr-4 hover:underline'>Home</button></NavLink>
                <NavLink to='/discover'><button className='mr-4 hover:underline'>Discover</button></NavLink>
                <NavLink to='/aboutus'><button className='mr-4 hover:underline'>About Us</button></NavLink>
                <NavLink to='/signup'><button className='mr-4 hover:underline rounded-md border-[1px] border-white px-6 py-2'>Sign Up</button></NavLink>
                <NavLink to='/login'><button className='bg-[#106580] px-6 py-2 rounded-md cursor-pointer mr-4 hover:underline'>Log In</button></NavLink>
            </div>
        </div>*/
    )
}
