import {Routes, Route} from 'react-router'
import './App.css'
import Home from './components/Home'
import TheTeam from './components/links/TheTeam'
import Services from './components/links/Services'
import Listings from './components/links/Listings'
import ContactUs from './components/links/ContactUs'
import CenterProfile from './components/links/CenterProfile'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/the-team' element={<TheTeam />} />
        <Route path='/services' element={<Services />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/centerprofile' element={<CenterProfile />} />
      </Routes>
    </>
  )
}

export default App
