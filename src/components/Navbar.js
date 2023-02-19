import {NavLink} from 'react-router-dom'
export default function Navbar(){
    return(
        <div className='flex items-center justify-between bg-black w-full pt-24'>
            <h1 className='text-white w-[135px] h-[30px] left-[90px] top-[75px] text-2xl font-bold font-[Outfit] cursor-pointer pl-[90px]'>AnimeBinge</h1>
            <div className='flex items-center text-white'>
                <NavLink to='/'><button className='mr-4'>Home</button></NavLink>
                <NavLink to='/discover'><button className='mr-4'>Discover</button></NavLink>
                <NavLink to='/aboutus'><button className='mr-4'>About Us</button></NavLink>
                <NavLink to='/signup'><button className='mr-4 rounded-md border-[1px] border-white px-6 py-2'>Sign Up</button></NavLink>
                <NavLink to='/login'><button className='bg-[#106580] px-6 py-2 rounded-md cursor-pointer mr-4'>Log In</button></NavLink>
            </div>
        </div>
    )
}
/*
<div className='nav'>
            <nav>
                <div className="nav--logocontainer">
                    <h1 className="nav--logo">AnimeBinge</h1>
                </div>
                <div className="nav--option">
                    <ul>
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/discover'><li>Discover</li></NavLink>
                        <NavLink to='/aboutus'><li>About Us</li></NavLink>
                        <NavLink to='/signup'><li>Sign Up</li></NavLink>
                        <NavLink to='/login'><li>Log In</li></NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    */