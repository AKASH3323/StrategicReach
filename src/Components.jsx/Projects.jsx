import cro from "../assets/cro.jpg";
import Creative from "../assets/Creative-Digital-Marketing-Agency.jpg"
import Digital  from "../assets/digital-marketing.jpg"
import seo from "../assets/seo.jpg"
import ppc from "../assets/ppc.jpg"
import mail from "../assets/mail.jpg"

<img src={cro} />

export default function Projects(){
    return( <div className="mt-20 ">
            <h1 className="text-center  text-2xl md:text-5xl text-gray-900 font-bold animation-fade-in animation delay-100">Our Services...</h1>
            <div className="flex items-center  p-5 animation-fade-in animation delay-700">
            <div className=" justify-center items-center grid grid-cols-1 md:grid-cols-3 md:p-20 mx-auto text-center gap-15">
            <div className=" bg-gray-900 text-white p-10 rounded-2xl "><img src={Creative} className="mx-auto h-50 rounded-2xl"></img>
            <h1 className="text-2xl font-bold mt-2">Digital Marketing</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea quidem fugit itaque quasi dolores sequi fugiat non voluptatibus veritatis!</p>
            </div>
            <div className=" bg-gray-900 text-white p-10 rounded-2xl"><img src={cro} className="mx-auto h-50 rounded-2xl"></img>
            <h1 className="text-2xl font-bold mt-2">CRO</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea quidem fugit itaque quasi dolores sequi fugiat non voluptatibus veritatis!</p></div>
            <div className=" bg-gray-900 text-white p-10 rounded-2xl"><img src={Digital} className="mx-auto h-50 rounded-2xl"></img>
            <h1 className="text-2xl font-bold mt-2">Content Creation</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea quidem fugit itaque quasi dolores sequi fugiat non voluptatibus veritatis!</p>
            </div>
            <div className=" bg-gray-900 text-white p-10 rounded-2xl"><img src={seo}className="mx-auto h-50 rounded-2xl"></img>
            <h1 className="text-2xl font-bold mt-2">SEO</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea quidem fugit itaque quasi dolores sequi fugiat non voluptatibus veritatis!</p>
            </div>
            <div className=" bg-gray-900 text-white p-10 rounded-2xl"><img src={ppc} className="mx-auto h-50 rounded-2xl"></img>
            <h1 className="text-2xl font-bold mt-2">PPC</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea quidem fugit itaque quasi dolores sequi fugiat non voluptatibus veritatis!</p>
            </div>
            <div className=" bg-gray-900 text-white p-10 rounded-2xl"><img src={mail} className="mx-auto h-50 rounded-2xl"></img>
            <h1 className="text-2xl font-bold mt-2">Mail Optimization</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea quidem fugit itaque quasi dolores sequi fugiat non voluptatibus veritatis!</p>
            </div>
            
            
            </div>
            </div>
           
        </div>
        )
}