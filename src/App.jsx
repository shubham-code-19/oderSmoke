import React,{useState} from 'react'
import "./App.css"
import Home from './Pages/Home'
import Nav from './Components/Nav/Nav'
import TopNav from './Components/Topnav/TopNav'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact'
import About from './Pages/About'
import Cart from './Components/AddToCart/Cart'

const App = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    console.log('Hello')
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
     <BrowserRouter>

    <TopNav 
    isOpen={openDropdown==="topnav"}
    onTooggle={()=>handleDropdownToggle("topnav")}
    />

    <Nav 
    isOpen={openDropdown==="nav"}
    onTooggle={()=>handleDropdownToggle("nav")}
     />

      
      
        <Routes>

          <Route path="/" element={ <Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="About" element={<About/>}/>
          {/* <Route path="cart" element={<Cart/>}/> */}
        </Routes>

        <Footer/>
     
      </BrowserRouter>
      
    </>
  )
}

export default App
