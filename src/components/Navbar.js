import {NavLink} from 'react-router-dom'
export default function Navbar(){
    return(
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
    )
}