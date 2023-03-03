import {Routes,Route} from 'react-router-dom'
import Home from './routes/Home'
import Discover from './routes/Discover'
import AboutUs from './routes/AboutUs'
import SignUp from './routes/SignUp'
import LogIn from './routes/LogIn'
import Navbar from './components/Navbar'
import AnimeDetails from './components/AnimeDetails'
import ThrowbackDetails from './components/ThrowbackDetails'

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
      <Route path='animedetails/:title' element={<AnimeDetails />} /> 
      <Route path='throwback/:title' element={<ThrowbackDetails />} /> 
    </Routes>
    </>
  )
}


