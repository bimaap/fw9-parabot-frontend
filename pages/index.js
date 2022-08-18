
import Header from "../components/Header"
import Footer from "../components/Footer"
import { TbChevronDown } from "react-icons/tb";
import Image from "next/image";
import bg from "../public/images/bg.png"

export default function LandingPage(){
    return(
        <>
            <Header />
            <main className="absolute top-0 w-full flex flex-col items-center">
                <div className="absolute -z-10 w-full h-[100vh]">
                    <img src='/images/bg.png' alt='bg' className="w-[100%] h-[100%]" />
                </div>
                <div className="h-[100vh] flex flex-col items-center justify-end gap-36 pb-40">
                    <div className="flex flex-col items-center gap-20">
                        <span className="text-center text-7xl font-bold">Minimal Furniture Store</span>
                        <span className="text-center text-lg">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.<br />Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">Explore now</span>
                        <TbChevronDown />
                    </div>
                </div>
                <div className="w-[1400px]">
                    <div className="flex">
                        <img src='/images/sofa.png' alt='bg' className="sofa" />
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="max-w-2xl flex flex-col gap-7">
                                <span className="text-7xl font-semibold">Mid-Century 1929 Sofa with Pilow</span>
                                <span className="text-lg">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</span>
                                <div>
                                    <span className="h-[2px] w-5 bg-cyan-900" />
                                    <span className="font-semibold">SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="max-w-2xl flex flex-col gap-7">
                                <span className="text-7xl font-semibold">Mini Modern Lamp</span>
                                <span className="text-lg">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</span>
                                <div>
                                    <span className="h-[2px] w-5 bg-cyan-900" />
                                    <span className="font-semibold">SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                        <img src='/images/lamp.png' alt='bg' className="lamp" />
                    </div>
                    <div className="flex">
                        <img src='/images/chair.png' alt='bg' className="chair" />
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="max-w-2xl flex flex-col gap-7">
                                <span className="text-7xl font-semibold">Blue Living Vintage Chair</span>
                                <span className="text-lg">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</span>
                                <div>
                                    <span className="h-[2px] w-5 bg-cyan-900" />
                                    <span className="font-semibold">SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="max-w-2xl flex flex-col gap-7">
                                <span className="text-7xl font-semibold">Japanese style blue ceramic</span>
                                <span className="text-lg">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</span>
                                <div>
                                    <span className="h-[2px] w-5 bg-cyan-900" />
                                    <span className="font-semibold">SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                        <img src='/images/ceramic.png' alt='bg' className="ceramic" />
                    </div>
                    <div className="flex">
                        <img src='/images/plate.png' alt='bg' className="plate" />
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="max-w-2xl flex flex-col gap-7">
                                <span className="text-7xl font-semibold">Japanese plate floral</span>
                                <span className="text-lg">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</span>
                                <div>
                                    <span className="h-[2px] w-5 bg-cyan-900" />
                                    <span className="font-semibold">SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="max-w-2xl flex flex-col gap-7">
                                <span className="text-7xl font-semibold">Modern Floor Lamp</span>
                                <span className="text-lg">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</span>
                                <div>
                                    <span className="h-[2px] w-5 bg-cyan-900" />
                                    <span className="font-semibold">SHOP NOW</span>
                                </div>
                            </div>
                        </div>
                        <img src='/images/floor_lamp.png' alt='bg' className="floor_lamp" />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}