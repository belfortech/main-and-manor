import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home'
import Services from './pages/Services/Services';
import About_us from './pages/About/About_us';
import Listings from './pages/Listings/Listings'
import Neighborhoods from './pages/Neighborhoods/Neighborhoods';
import Contact from './pages/Contact/Contact';
import Journal from './pages/Journal/Journal';

import Viewproperty from './pages/Listings/Viewproperty';

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about-us" element={<About_us/>}/>
      <Route path="/listings" element={<Listings/>}/>
      <Route path="/neighborhoods" element={<Neighborhoods/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/journal" element={<Journal/>}/>

      <Route path="/listings/viewproperty/:id" element={<Viewproperty />} />

    </Routes>
  )
}