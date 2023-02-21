import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Discover from './components/Discover'
import AboutUs from './components/AboutUs'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Navbar from './components/Navbar'
import AnimeDetails from './components/AnimeDetails'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='discover' element={<Discover />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<LogIn />} />
      <Route path='animedetails' element={<AnimeDetails />} />
    </Routes>
    </>
  )
}


