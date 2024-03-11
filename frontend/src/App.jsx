import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home.jsx'
import About from './components/About/About.jsx';
import Service from './components/Service/Service.jsx';
import Contact from './components/Contact/Contact.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Login/Signup.jsx';
import Explore from './components/Explore/Explore.jsx';
import Reset from './components/Login/Reset.jsx';
function App() {

  return (
    
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/reset" element={<Reset/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/explore" element={<Explore/>} />
          </Routes>
        <Footer/>
        </BrowserRouter>
       </div>
  
  )
}

export default App
