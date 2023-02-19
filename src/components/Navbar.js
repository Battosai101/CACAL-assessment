import {NavLink} from 'react-router-dom'
export default function Navbar(){
    return(
        <div className='flex items-center justify-between bg-black w-full pt-24 flex-wrap'>
            <h1 className='text-white w-[135px] h-[30px] left-[90px] top-[75px] text-2xl font-bold font-[Outfit] cursor-pointer pl-[90px]'>AnimeBinge</h1>
            <div className='flex items-center text-white'>
                <NavLink to='/'><button className='mr-4 hover:underline'>Home</button></NavLink>
                <NavLink to='/discover'><button className='mr-4 hover:underline'>Discover</button></NavLink>
                <NavLink to='/aboutus'><button className='mr-4 hover:underline'>About Us</button></NavLink>
                <NavLink to='/signup'><button className='mr-4 hover:underline rounded-md border-[1px] border-white px-6 py-2'>Sign Up</button></NavLink>
                <NavLink to='/login'><button className='bg-[#106580] px-6 py-2 rounded-md cursor-pointer mr-4 hover:underline'>Log In</button></NavLink>
            </div>
        </div>
    )
}
