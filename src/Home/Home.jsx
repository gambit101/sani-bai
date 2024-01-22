// import { FaHandPointRight, FaLeanpub, FaLightbulb, FaQuoteLeft } from "react-icons/fa";
// import ScrollTrigger from "react-scroll-trigger";
// import CountUp from 'react-countup';
// import { useEffect, useState } from "react";
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// import './styles.css';
// import { Parallax, Pagination, Navigation } from 'swiper/modules';
// import { Link } from "react-router-dom";
// import { MdLibraryBooks } from "react-icons/md";
// import { PiStudentFill } from "react-icons/pi";
// import { FcPositiveDynamic, FcShipped, FcSmartphoneTablet, FcSms } from "react-icons/fc";


const Home = () => {

    // const [counterOn, setCounterOn] = useState(false);

    // useEffect(() => {
    //     AOS.init({ duration: 500 })
    // }, [])

    return (
        <div>

            {/* Banner section */}

            <div className="flex justify-end pt-8 pr-5">
                <div className="sm:w-full md:w-6/12 bg h-full flex flex-col justify items-center">
                    <nav className="w-full flex">
                        <ul className="flex w-full">
                            <li className="cursor-pointer px-2 hover:text-green-600 transition-all duration 150">Home</li>
                            <li className="cursor-pointer px-2 hover:text-green-600 transition-all duration 150">About</li>
                            <li className="cursor-pointer px-2 hover:text-green-600 transition-all duration 150">Services</li>
                            <li className="cursor-pointer px-2 hover:text-green-600 transition-all duration 150">Home</li>
                        </ul>
                        <a href="#" className="font-bold text-xl hover:text-green-600 transition-all duration 150">Logo</a>
                    </nav>
                    <h3 className="text-2xl italic text-green-400">Interior Design</h3>
                    <h1 className="text-6xl font-bold">Your space, Your style</h1>
                    <h3 className="text-2xl italic text-green-400">Art and Science</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quaerat provident nemo omnis earum placeat ducimus voluptas recusandae laboriosam delectus.</p>
                    <button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                        <span className="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                        Read More
                    </button>
                </div>
            </div>

            {/* sponsor section */}




            {/* About section */}



            {/* countup */}

            {/* <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='py-14'>

                    <h1 className=" text-4xl font-bold text-center pt-5 mt-10 text-[#5F2DED]">
                        Learn something new & Build Your Career From Anywhere In The World
                    </h1>


                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 justify-evenly gap-10 py-10'>
                    <div className="flex" data-aos="flip-up">
                        <FaLeanpub className="text-6xl mr-3 text-pink-600" />
                        <div className='' data-aos='flip-right'>
                            {counterOn && <CountUp className='text-3xl font-bold text-center' start={0} end={13} duration={2} delay={0}></CountUp>}  <span className='text-3xl font-bold'>K</span><br /><span>Total Acheivment</span>
                        </div>
                    </div>
                    <div className="flex" data-aos="flip-down">
                        <FaLightbulb className="text-6xl mr-3 text-pink-600" />
                        <div className='' data-aos='flip-right'>
                            {counterOn && <CountUp className='text-3xl font-bold text-center' start={0} end={74} duration={2} delay={0}></CountUp>}  <span className='text-3xl font-bold'>K</span><br /><span>TOTAL STUDENTS</span>
                        </div>
                    </div>
                    <div className="flex" data-aos="flip-up">
                        <MdLibraryBooks className="text-6xl mr-3 text-pink-600" />
                        <div className='' data-aos='flip-right'>
                            {counterOn && <CountUp className='text-3xl font-bold text-center' start={0} end={30} duration={2} delay={0}></CountUp>}  <span className='text-3xl font-bold'>K</span><br /><span>Total Acheivment</span>
                        </div>
                    </div>
                    <div className="flex" data-aos="flip-up">
                        <PiStudentFill className="text-6xl mr-3 text-pink-600" />
                        <div className='' data-aos='flip-right'>
                            {counterOn && <CountUp className='text-3xl font-bold text-center' start={0} end={1300} duration={2} delay={0}></CountUp>}  <span className='text-3xl font-bold'>K</span><br /><span>Total Acheivment</span>
                        </div>
                    </div>
                </div>
            </ScrollTrigger> */}



            {/* swiper */}

            {/* <div className='w-2/3 mx-auto my-24' data-aos="zoom-out-down">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#5F2DED',
                        '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            'background-image':
                                'url(https://swiperjs.com/demos/images/nature-1.jpg)',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide>

                        <div>
                            <div className="text flex px-10 gap-3" data-swiper-parallax="-100">
                                <FaQuoteLeft className='text-9xl pb-20'></FaQuoteLeft>
                                <p className=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                </p>

                            </div>
                            <hr className='text-[#5F2DED] border-[#5F2DED] mt-5 w-3/4 mx-auto' />
                            <div className='flex gap-5 items-center w-2/3 mx-auto'>
                                <img className='h-28 w-28 rounded-full mt-5 border-4 border-[#5F2DED]' src="https://orga.wpengine.com/wp-content/uploads/2015/06/clients7.jpg" alt="" />
                                <p className='text-lg font-bold text-[#5F2DED] '>Garry holmes</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div>
                            <div className="text flex px-10 gap-3" data-swiper-parallax="-100">
                                <FaQuoteLeft className='text-9xl pb-20'></FaQuoteLeft>
                                <p className=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                </p>

                            </div>
                            <hr className='text-[#5F2DED] border-[#5F2DED] mt-5 w-3/4 mx-auto' />
                            <div className='flex gap-5 items-center w-2/3 mx-auto'>
                                <img className='h-28 w-28 rounded-full mt-5 border-4 border-[#5F2DED]' src="https://orga.wpengine.com/wp-content/uploads/2015/06/clients7.jpg" alt="" />
                                <p className='text-lg font-bold text-[#5F2DED] '>Garry holmes</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div>
                            <div className="text flex px-10 gap-3" data-swiper-parallax="-100">
                                <FaQuoteLeft className='text-9xl pb-20'></FaQuoteLeft>
                                <p className=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                </p>

                            </div>
                            <hr className='text-[#5F2DED] border-[#5F2DED] mt-5 w-3/4 mx-auto' />
                            <div className='flex gap-5 items-center w-2/3 mx-auto'>
                                <img className='h-28 w-28 rounded-full mt-5 border-4 border-[#5F2DED]' src="https://orga.wpengine.com/wp-content/uploads/2015/06/clients7.jpg" alt="" />
                                <p className='text-lg font-bold text-[#5F2DED] '>Garry holmes</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> */}

            {/* <div>
                <li className="bg-blue-950 text-white text-center"><Link to='/about'>About</Link></li>
            </div> */}
        </div>
    );
};

export default Home;