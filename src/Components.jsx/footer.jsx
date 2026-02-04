import { MdAddCall } from "react-icons/md";

import { MdLanguage } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer(){
    return(<div className=" bg-gray-900 text-white  p-5">
    <footer className="md:flex  justify-between p-10 ">
        <div className="">
            <h1>Copy Rights Reserved By</h1>
<h1>@2026 StrategicReach</h1>
<h1 className="mt-5">Contact Us:</h1><div className="flex gap-5 mt-2">
<MdAddCall/><MdLanguage/><FaInstagramSquare/><FaLinkedinIn/></div>
        </div>
        <div className="mt-2">
<h1 className="text-xl">Address:</h1>
<p>123 Green Valley Road,Near City Mall </p>  

<p>Andheri West  
Mumbai, </p>
<p>Maharashtra – 400053</p>  
<p>India.
</p>
        </div>
        <div className="mt-2">
<h1 className=" text-xl">Our Services:</h1>
<ul>
    <li>Digital Marketing</li>
    <li>CRO</li>
    <li>Content Creation</li>
    <li>SEO</li>
    <li>PPC</li>
    <li>Mail Optimization</li>
</ul>
        </div>
    </footer>
</div>)
}