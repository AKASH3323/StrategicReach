import Home from "./Components.jsx/Home"
import Projects from "./Components.jsx/Projects"
import Contact from "./Components.jsx/Contact"
import About from "./Components.jsx/About"
import Nav from "./Components.jsx/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
export default function App(){
  return(<div className="">

<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/" element={<Home/>}>
  </Route>
 <Route path="/About" element={<About/>}>

 </Route>
  <Route path="/Projects" element={<Projects/>}>
  </Route>
  <Route path="/Contact" element={<Contact/>}>
  </Route>
</Routes>
</BrowserRouter>
  </div>)
}