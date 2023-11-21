import { FaHandPointRight, FaLeanpub } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from 'react-countup';
import { useState } from "react";

const Home = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className="md:mx-20">

            {/* Banner section */}

            <div className="md:flex bg-[#5F2DED] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  text-white font-bold py-2 px-4 rounded-2xl">
                <div>
                    <h3 className="text-3xl text-pink-500 mt-5 ml-4">Education solution</h3>
                    <h1 className="text-6xl mt-4 font-bold ml-4">Cloud-based LMS <br /> Trusted by 1000+</h1>
                    <h3 className="text-3xl mt-4 font-semibold ml-4">Lorem Ipsum is simply dummy text of the printing typesetting <br />industry. Lorem Ipsum has been</h3>

                    {/* Buttons */}

                    <div className="mt-6 ml-4">
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded text-xl mr-8">Click me</button>
                        <button className="hover:text-pink-500 font-semibold text-xl">Find out more</button>
                    </div>
                </div>

                <div>
                    <img className="h-[500px] md:pl-24 pr-10" src="https://cdn.pixabay.com/photo/2012/04/25/00/46/student-41444_640.png" alt="" />
                </div>
            </div>

            {/* sponsor section */}

            <div className="grid grid-cols-2 gap-5 mx-3 md:grid-cols-4 mt-10">
                <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287cd407e62bd_Group%2047.svg" alt="" />
                <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712874df97e6332_Vector-5.svg" alt="" />
                <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128746107e6310_Vector-3.svg" alt="" />
                <img className="h-14" src="https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287f1797e6321_Vector-4.svg" alt="" />
            </div>


            {/* About section */}

            <div className="hero-content lg:flex mt-20">
                <div className='lg:w-1/2 relative'>
                    <img src="https://cdn.pixabay.com/photo/2020/10/06/14/09/graduate-5632326_640.jpg" className="w-3/4 rounded-lg shadow-2xl h-[500px]" />
                    <img src="https://cdn.pixabay.com/photo/2017/08/07/22/28/man-2608588_640.jpg" className="w-1/2 absolute right-4 top-[300px] rounded-lg shadow-2xl border-4 border-white" />
                    <h1 className="absolute top-[410px] py-4 px-3 shadow-2xl bg-white text-lg animate-bounce font-bold text-pink-500 border-l-2 border-[#5F2DED]">30+ YEARS EXPERIENCE <br /> JUST ACHIVED</h1>
                </div>
                <div className='lg:w-1/2 pl-4'>
                    <h3 className='text-3xl text-[#5F2DED] font-bold'>About us</h3>
                    <h1 className="text-5xl font-bold mt-7">We are qualified & of experience in this field</h1>
                    <p className="pl-2 mt-7 border-l-2 border-[#5F2DED] text-gray-500">25+Contrary to popular belief, Lorem Ipsum is not simply random text roots in a piece of classical Latin literature from 45 BC.</p>
                    <p className="mt-8 flex"><FaHandPointRight className="mt-1" />  <span className="ml-8">Lorem Ipsum is simply dummy</span></p>
                    
                    <p className="mt-8 flex"><FaHandPointRight className="mt-1" />  <span className="ml-8">Lorem Ipsum is simply dummy</span></p>
                    
                    <p className="mt-8 flex"><FaHandPointRight className="mt-1" />  <span className="ml-8">Lorem Ipsum is simply dummy</span></p>
                    
                </div>
            </div>

            {/* countup */}

            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='py-14'>

                <h1 className=" text-4xl font-bold text-center pt-5 mt-10">
                Learn something new & Build Your Career From Anywhere In The World
                </h1>
                

            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-evenly gap-10 py-10'>
                <div className="flex">
                <FaLeanpub className="text-6xl mr-3 text-pink-600" />
                <div className='' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-3xl font-bold text-center' start={0} end={13} duration={2} delay={0}></CountUp>}  <span className='text-3xl font-bold'>K</span><br /><span>Total Acheivment</span>
                </div>
                </div>
                <div className="flex">
                <FaLeanpub className="text-6xl mr-3 text-pink-600" />
                <div className='' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-3xl font-bold text-center' start={0} end={12} duration={2} delay={0}></CountUp>}  <span className='text-3xl font-bold'>K</span><br /><span>TOTAL STUDENTS</span>
                </div>
                </div>
                <div className="flex">
                <FaLeanpub className="text-6xl mr-3 text-pink-600" />
                <div className='' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-3xl font-bold text-center' start={0} end={13} duration={2} delay={0}></CountUp>}  <span className='text-3xl font-bold'>K</span><br /><span>Total Acheivment</span>
                </div>
                </div>
                <div className="flex">
                <FaLeanpub className="text-6xl mr-3 text-pink-600" />
                <div className='' data-aos='flip-right'>
                    {counterOn && <CountUp className='text-3xl font-bold text-center' start={0} end={13} duration={2} delay={0}></CountUp>}  <span className='text-3xl font-bold'>K</span><br /><span>Total Acheivment</span>
                </div>
                </div>
            </div>
        </ScrollTrigger>
        </div>
    );
};

export default Home;