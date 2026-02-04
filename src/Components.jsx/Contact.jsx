import { MdAddCall } from "react-icons/md";

import { MdLanguage } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact(){
   
    return(
        
    < >
    
    <div className="items-center w-auto h-auto  justify-center pr-2">
    <h1 className="text-center text-2xl md:text-5xl font-bold mt-10">Contact <span className="text-gray-500">Us</span></h1>
    <div className=" flex-none md:flex p-10  gap-16  animation-fade-in animation delay-700 justify-center items-center">
        
        <div className="w-5xl">
            <ul className="ml-5">
                
                <li  className=" text-md flex md:text-xl font-bold text-gray-500">  <FaLinkedinIn  className="mr-5 size-6"/>LinkedIn </li>
                <h1 className="pt-3 text-sm">StrategicReach Digital Marketing Company.</h1>
                <li className=" text-md flex md:text-xl font-bold mt-5 text-gray-500"> <MdAddCall className="mr-5 mt-1 size-6"/>Phone</li>
                <h1 className="pt-3 text-sm">9876543210</h1>
                
                <li className=" text-md flex md:text-xl font-bold mt-5 text-gray-500"> <FaInstagramSquare  className="mr-5 size-6"/>Instagram</li>
                <h1 className="pt-3 text-sm">StrategicReach</h1>
                <li className=" text-md flex md:text-xl font-bold mt-5 text-gray-500"> <MdLanguage  className="mt-0 mr-5 size-6"/>Website</li>
                <h1 className="pt-3 text-sm">www.StrategicReach.com</h1>
            </ul>

        </div>
        <div className="mt-10 md:mt-0 ">
<form>
    <div className="">
        <div className="">
    <label className="mr-5 mt-2">Name:</label>
    <input className="bg-gray-300  w-50 md:w-md h-10 rounded-2xl "/></div>
    <div className=" mt-5">
    <label className="mr-5 mt-2 ">Mobile:</label>
    <input className="bg-gray-300  w-50 md:w-md h-10 rounded-2xl"/></div>
    <div className=" mt-5">
    <label className="mr-5 mt-2 ">Text Area:</label>
    {/* <input className="bg-gray-300 w-md h-10 rounded-2xl"/></div> */}
    <textarea className=" w-70 h-40 md:w-110 md:h-45 bg-gray-300 flex rounded-2xl"></textarea>
</div>
<button className="bg-gray-800 hover:bg-gray-950 ease-in-out-2s text-white p-2 mt-3 h-10 w-40 rounded-2xl ">Submit</button>
    </div>

</form>
        </div>
    </div></div></>)
}