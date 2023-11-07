import NavBar from "./Components/Navbar"
import About from "./NavPages/About"
import Blog from "./NavPages/Blog"
import Contact from "./NavPages/Contact"
import Home from "./NavPages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Type from "./NavPages/Type"
function App() {

  return (
    <>
      <div className=" h-[200vh]">
       <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Blog" element={<Blog/>}/>
       </Routes>
       </BrowserRouter>
       {/* <Type/> */}
      </div>
 
    </>
  )
}

export default App
