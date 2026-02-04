import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./footer";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const Navigate=useNavigate()
    
    return(<><div className=" items-center h-auto  p-5 text-center  bg-white w-auto m-10 rounded-2xl md:p-20 animation-fade-in animation delay-700 ">
    <h1 className="  text-gray-900 text-md md:text-5xl text-center hover:text-yellow-500 font-bold  cursor-pointer animation-fade-in animation-delay-100 ">Grow Your Brand. Drive More Sales. Dominate Digital.</h1> 
    <p className="text-center mt-2  text-sm animation-fade-in animation delay-800">We help businesses scale faster with data-driven digital marketing strategies that actually convert. From traffic to revenue — we make it happen.</p>
    <div className="font-bold mt-10  justify-center items-center flex-none md:flex text-center  animation fade-in animation delay-700"><button onClick={()=>Navigate("/Contact")} className="bg-gray-900 md:p-5 text-white p-2  rounded-2xl md:rounded-3xl  mt-5 md:mx-10 flex animate-bounce cursor-pointer items-ce">Get a Free Strategy Call<AiFillPhone className="mt-1 ml-4"/></button>
    <button  onClick={()=>Navigate("/Projects")}className="mt-5 bg-gray-900 text-white  p-2 md:p-5  rounded-2xl md:rounded-3xl flex cursor-pointer">View Our Services<AiOutlineFolderOpen className="mt-1 ml-4 "/></button>
    </div>
   
    </div> 
<About/>
<div className="mt-20">
<Projects/></div>
<hr className="mt-5"/>
<Contact/>
<hr/>
<Footer/>
    </>)
}