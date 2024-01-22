import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 500 })
        window.scroll(0, 0)
    }, [])
    return (
        <div className="mx-20">
            <h1 className='text-5xl font-bold text-blue-950 mt-20 text-center border-b-[1px] border-gray-500 pb-10'>Get in Touch With us</h1>

            <div className="flex gap-40">
                <div>
                    <h1 className='text-3xl font-bold text-blue-950 mt-10'>Our Office</h1>
                    <p className='text-blue-500 mt-5'>Call us or WhatsApp at:</p>
                    <div className="flex mt-4">
                        <FaPhone className="mt-2 mr-3 text-xl" />
                        <p className='text-2xl font-semibold'>01775 760 496</p>
                    </div>
                    <div className="flex mt-4">
                        <p className="font-bold text-2xl mr-3 mt-1">@</p>
                        <p className='text-3xl font-semibold'>sales@minimallimited.com</p>
                    </div>
                    <div className="flex mt-5">
                        <MdOutlineLocationOn className="mt-2 mr-3 text-2xl" />
                        <p className=' font-semibold'>KA-6/A, 2nd Floor, Bashundhara R/A Main Road,<br /> Vatara, Dhaka-1229</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-bold text-blue-950 mt-10'>Contact us</h1>
                    
                    <input placeholder="Name" type="text" name="" id="" className="border-[3px] px-40 py-2 mt-3"/>
                    <input placeholder="Phone Number" type="text" name="" id="" className="border-[3px] px-40 py-2 mt-3"/>
                    <input placeholder="Email" type="email" name="" id="" className="border-[3px] px-40 py-2 mt-3"/>
                    <input placeholder="Email" type="email" name="" id="" className="border-[3px] px-40 py-2 mt-3"/>
                    
                </div>
            </div>
        </div>
    );
};

export default About;