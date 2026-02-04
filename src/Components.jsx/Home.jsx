import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./footer";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const Navigate=useNavigate()
    
    return(<><div className=" items-center h-auto  bg-white w-auto m-35 rounded-2xl md:p-20 animation-fade-in animation delay-700 ">
    <h1 className="  text-gray-400 text-xl md:text-5xl text-center hover:text-yellow-500 font-bold  cursor-pointer animation-fade-in animation-delay-100 ">Grow Your Brand. Drive More Sales. Dominate Digital.</h1> 
    <p className="text-center mt-2 animation-fade-in animation delay-800">We help businesses scale faster with data-driven digital marketing strategies that actually convert. From traffic to revenue — we make it happen.</p>
    <div className="font-bold mt-10  justify-center  md:flex text-center  animation fade-in animation delay-700"><button onClick={()=>Navigate("/Contact")} className="bg-gray-400 text-white p-5 rounded-3xl  mt-5 md:mx-10 flex animate-bounce cursor-pointer">Get a Free Strategy Call<AiFillPhone className="mt-1 ml-4"/></button>
    <button  onClick={()=>Navigate("/Projects")}className="mt-5 bg-gray-400 text-white  p-5 rounded-3xl flex cursor-pointer">View Our Services<AiOutlineFolderOpen className="mt-1 ml-4 "/></button>
    </div>
   
    </div> 
<About/>
<div className="mt-20">
<Projects/></div>
<Contact/>
<hr/>
<Footer/>
    </>)
}