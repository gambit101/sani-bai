import { FaPeopleArrows } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineBorderColor } from "react-icons/md";
import { RiInstallFill } from "react-icons/ri";
import { MdOutlineFireTruck } from "react-icons/md";

const Services = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-blue-950 mt-20 text-center border-b-[1px] border-gray-500 pb-10 mx-20'>The Inception</h1>
            <p className="text-gray-500 text-center md:mx-40 mt-10">It’s 2016, when six young minds with different educational backgrounds have come together to build a meaningful thing that inspires them, cherishes their dreams and creates solvency, by allowing creative gestures.</p>
            <p className="text-gray-500 text-center md:mx-40 mt-10">7 years after the inception of Minimal Limited, we have a greater vision to become the foremost lifestyle brand, introducing a great way of living.</p>
            <p className="text-gray-500 text-center md:mx-40 mt-10">Minimal is uniquely identified with sensible design thinking and a connection to heritage and culture. Our goal is to make your space feel connected and alive, while maintaining balance and harmony, by having less but meaningful items.</p>

            <h1 className='text-4xl font-bold text-blue-950 mt-20 text-center  border-gray-500 mx-20'>Your Desired Interior <br /> in 5 Simple Steps</h1>
            <p className="text-sm text-gray-500 text-center mt-5">Thinking of building a new home or workplace? <br /> Here’s how you can get started.</p>

            {/* icons */}


            <div className="flex mx-20 justify-around mt-20">
                <div className="w-36">
                    <FaPeopleArrows className="text-6xl mx-auto text-amber-700" />
                    <p className="text-center mt-3 italic">Meet and Greet</p>
                </div>
                <div>
                    <IoMdArrowForward className="text-4xl mt-5" />
                </div>
                <div className="w-36">
                    <MdOutlineDesignServices className="text-6xl mx-auto text-amber-700" />
                    <p className="text-center mt-3 italic">Design Development</p>
                </div>
                <div>
                    <IoMdArrowForward className="text-4xl mt-5" />
                </div>
                <div className="w-36">
                    <MdOutlineBorderColor className="text-6xl mx-auto text-amber-700" />
                    <p className="text-center mt-3 italic">Place Order</p>
                </div>
                <div>
                    <IoMdArrowForward className="text-4xl mt-5" />
                </div>
                <div className="w-36">
                    <RiInstallFill className="text-6xl mx-auto text-amber-700" />
                    <p className="text-center mt-3 italic">Installation Process</p>
                </div>
                <div>
                    <IoMdArrowForward className="text-4xl mt-5" />
                </div>
                <div className="w-36">
                    <MdOutlineFireTruck className="text-6xl mx-auto text-amber-700" />
                    <p className="text-center mt-3 italic">Moving In</p>
                </div>

            </div>

            {/* services */}

            <div className="mx-20">
                <div className="flex justify-items-start gap-10">
                    <img className="w-1/2 h-96" src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Meet-and-Greet.svg" alt="" />
                    <div className="mt-20">
                        <h1 className="text-3xl font-semibold">
                            Meet and Greet
                        </h1>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500">It all begins with a form</p>
                            <p className="text-sm text-gray-500 border-b-[1px] border-gray-500 pb-6">Tell us the story you want to build, and we will take care of the <br /> rest. The more we learn about you, the better.</p>
                        </div>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500 pt-8">Get Free Consultation</p>
                            <p className="text-sm text-gray-500">Our designers will sit down with you for a personalized one-to-one session. <br /> They will suggest layouts and estimations tailored to your project.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-items-start gap-10">
                    <img className="w-1/2 h-96" src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Meet-and-Greet.svg" alt="" />
                    <div className="mt-20">
                        <h1 className="text-3xl font-semibold">
                            Meet and Greet
                        </h1>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500">It all begins with a form</p>
                            <p className="text-sm text-gray-500 border-b-[1px] border-gray-500 pb-6">Tell us the story you want to build, and we will take care of the <br /> rest. The more we learn about you, the better.</p>
                        </div>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500 pt-8">Get Free Consultation</p>
                            <p className="text-sm text-gray-500">Our designers will sit down with you for a personalized one-to-one session. <br /> They will suggest layouts and estimations tailored to your project.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-items-start gap-10">
                    <img className="w-1/2 h-96" src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Meet-and-Greet.svg" alt="" />
                    <div className="mt-20">
                        <h1 className="text-3xl font-semibold">
                            Meet and Greet
                        </h1>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500">It all begins with a form</p>
                            <p className="text-sm text-gray-500 border-b-[1px] border-gray-500 pb-6">Tell us the story you want to build, and we will take care of the <br /> rest. The more we learn about you, the better.</p>
                        </div>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500 pt-8">Get Free Consultation</p>
                            <p className="text-sm text-gray-500">Our designers will sit down with you for a personalized one-to-one session. <br /> They will suggest layouts and estimations tailored to your project.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-items-start gap-10">
                    <img className="w-1/2 h-96" src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Meet-and-Greet.svg" alt="" />
                    <div className="mt-20">
                        <h1 className="text-3xl font-semibold">
                            Meet and Greet
                        </h1>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500">It all begins with a form</p>
                            <p className="text-sm text-gray-500 border-b-[1px] border-gray-500 pb-6">Tell us the story you want to build, and we will take care of the <br /> rest. The more we learn about you, the better.</p>
                        </div>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500 pt-8">Get Free Consultation</p>
                            <p className="text-sm text-gray-500">Our designers will sit down with you for a personalized one-to-one session. <br /> They will suggest layouts and estimations tailored to your project.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-items-start gap-10">
                    <img className="w-1/2 h-96" src="https://www.minimallimited.com/wp-content/uploads/2022/10/Minimal-Meet-and-Greet.svg" alt="" />
                    <div className="mt-20">
                        <h1 className="text-3xl font-semibold">
                            Meet and Greet
                        </h1>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500">It all begins with a form</p>
                            <p className="text-sm text-gray-500 border-b-[1px] border-gray-500 pb-6">Tell us the story you want to build, and we will take care of the <br /> rest. The more we learn about you, the better.</p>
                        </div>
                        <div className="pl-10 mt-5 border-l-4 border-dashed border-gray-500 text-lg">
                            <p className=" font-semibold text-gray-500 pt-8">Get Free Consultation</p>
                            <p className="text-sm text-gray-500">Our designers will sit down with you for a personalized one-to-one session. <br /> They will suggest layouts and estimations tailored to your project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;