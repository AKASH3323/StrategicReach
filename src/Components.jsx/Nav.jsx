// import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa6";
// import { ImCross } from "react-icons/im";
// import { useState } from "react";
// export default function Nav(){
//   const[mobile,setMobile]=useState(false)
//     return(<>
    
//     <div className="mt-2 bg-white p-2 sm:p-5 rounded-4xl flex justify-between mx-5 sticky top-0  z-50 ">
//       <h1 className="text-2xl  text-gray-500 font-bold">StrategicReach</h1>
//       <nav className="justify-between hidden md:flex ">
        
//         <ul className="
//          flex
//           justify-center 
//           gap-4 sm:gap-10 md:gap-20
//           text-sm sm:text-base
//           text-gray-600
          
         
//         ">
//           <li><Link to="/" hrefLang="#">Home</Link></li>
//           <li><Link to="/About">About</Link></li>
//           <li><Link to="/Projects">Services</Link></li>
          
//           <li><Link to="/Contact" hrefLang="#">Contact</Link></li>
         
//         </ul>
        
        
//       </nav>
//       <button className="p-2">
//         {mobile? }
//         <FaBars />
//       </button>
//     </div>
//     </>)
// }
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function Nav() {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div className="mt-2 bg-white p-10 rounded-4xl flex justify-between items-center mx-5 sticky top-0 z-50">
        <h1 className="text-2xl text-gray-900 font-bold">
          StrategicReach
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-15 text-gray-600">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-xl ml-5"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (shows ONLY when icon is clicked) */}
      {mobile && (
        <nav className="md:hidden bg-white mx-5 mt-2 rounded-xl">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-600">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      )}
    </>
  );
}
