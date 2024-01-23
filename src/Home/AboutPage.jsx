// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import 'swiper/swiper-bundle.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const AboutPage = () => {

    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])

    return (
        <div>
            <div className='bg-gradient-to-r from-blue-600 to-blue-900 text-white h-96 w-1/2 absolute top-0'>

            </div>

            <div className='flex'>
                <div className='w-1/2 px-16 relative top-10 '>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className='h-72 w-full' src="https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-72 w-full' src="https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-72 w-full' src="https://i.ibb.co/pQzXD7g/Screenshot-2023-06-27-110048.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-72 w-full' src="https://i.ibb.co/2PCRJR1/Screenshot-2023-06-27-110112.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-72 w-full' src="https://i.ibb.co/C6FDCLS/Screenshot-2023-06-27-110131.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-72 w-full' src="https://i.ibb.co/Fs4t6tL/Screenshot-2023-06-27-110150.png" alt="" /></SwiperSlide>
                    </Swiper>
                </div>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-1/2"
                >
                    <SwiperSlide><img className='h-96 w-full' src="https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-96 w-full' src="https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-96 w-full' src="https://i.ibb.co/pQzXD7g/Screenshot-2023-06-27-110048.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-96 w-full' src="https://i.ibb.co/2PCRJR1/Screenshot-2023-06-27-110112.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-96 w-full' src="https://i.ibb.co/C6FDCLS/Screenshot-2023-06-27-110131.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-96 w-full' src="https://i.ibb.co/Fs4t6tL/Screenshot-2023-06-27-110150.png" alt="" /></SwiperSlide>
                </Swiper>

            </div>


            <div className=''>
                <h1 className='text-2xl mx-20 mt-20 text-gray-600' data-aos="zoom-out-down">
                    For the past 30 years, Jayne Design Studio has designed rooms that reflect a strong connection to history and place. Drawing upon their past for inspiration and seeking details that will deepen and enhance their decoration. Whether the site is a SoHo loft in a late-19th-century industrial building or a historic Federal house built by a New England whaling merchant, the settings become part of the narrative, their history providing the impetus for the design.
                </h1>

                <div className='flex gap-20 justify-center mt-20'>
                    <img className='h-[520px] w-[400px]' src="https://jaynedesignstudio.com/wp-content/uploads/2016/04/Rubenstein_AD_DR-detail-1280x1744.jpg" alt="" data-aos="zoom-out-down"/>
                    <img className='h-[520px] w-[600px]' src="https://jaynedesignstudio.com/wp-content/uploads/2016/04/Perelman_JAYNE_-42566-FINAL-A-crop-1280x1419.jpg" alt="" data-aos="zoom-out-down"/>
                </div>

                <p className='text-gray-600 mx-40 mt-20' data-aos="zoom-out-down">
                    Thomas Jayne reflects: “I have always been attracted to history and to objects linked with it. I find their connections and evolution fascinating.” The emphasis in his work has always been to discover relationships and associations that add texture, richness, and depth; the elements that give a room its spirit and character.
                </p>
                <p className='text-gray-600 mx-40 mt-10' data-aos="zoom-out-down">
                    Thomas Jayne reflects: “I have always been attracted to history and to objects linked with it. I find their connections and evolution fascinating.” The emphasis in his work has always been to discover relationships and associations that add texture, richness, and depth; the elements that give a room its spirit and character.
                </p>

                <img className='w-[900px] mx-auto mt-20' src="https://jaynedesignstudio.com/wp-content/uploads/2016/04/French-Taste-JAYNE-37662-FINAL-1280x768.jpg" alt="" data-aos="zoom-out-down"/>
                <p className='text-gray-600 mx-40 mt-20' data-aos="zoom-out-down">
                    Jayne’s academic training greatly influenced his design philosophy. A graduate of the University of Oregon School of Architecture and Allied Arts, he studied with the noted architectural historian Marian Card Donnelly. Trained in American material culture and the decorative arts at Winterthur, Jayne earned his master’s degree from the University of Delaware and pursued advanced fellowships at the American Wing of the Metropolitan Museum of Art, Historic Deerfield, and the J. Paul Getty Museum before moving on to a position at Christie’s estates and appraisal department. His interest in architecture and the decorative arts eventually lead him to pursue a career in interior design. He was fortunate to work in two of the most influential design studios in America–Parish-Hadley & Associates and Kevin McNamara, Inc.–before opening Jayne Design Studio in 1990.


                </p>


            </div>
            <div className='flex gap-20 justify-center mx-20 mt-20'>
                <img className='w-6/12' src="https://jaynedesignstudio.com/wp-content/uploads/2016/01/160404_ThomasJayne_R-25-1280x852.jpg" alt="" data-aos="zoom-out-down"/>
                <p className='text-gray-600 mt-20' data-aos="zoom-out-down">
                    Jayne’s academic training greatly influenced his design philosophy. A graduate of the University of Oregon School of Architecture and Allied Arts, he studied with the noted architectural historian Marian Card Donnelly. Trained in American material culture and the decorative arts at Winterthur, Jayne earned his master’s degree from the University of Delaware and pursued advanced fellowships at the American Wing of the Metropolitan Museum of Art, Historic Deerfield, and the J. Paul Getty Museum before moving on to a position at Christie’s estates and appraisal department. His interest in architecture and the decorative arts eventually lead him to pursue a career in interior design. He was fortunate to work in two of the most influential design studios in America–Parish-Hadley & Associates and Kevin McNamara, Inc.–before opening Jayne Design Studio in 1990.


                </p>
            </div>
        </div>
    );
};

export default AboutPage;