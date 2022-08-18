
import { SiFacebook, SiTwitter, SiYoutube, SiDribbble } from "react-icons/si";
import { TbMail, TbPhone, TbClock } from "react-icons/tb";

export default function Footer(){
    return(
        <footer className="bg-zinc-600 flex justify-center items-center">
            <div className="w-[1200px] flex flex-col justify-between items-center text-slate-300">
                <div className="w-full py-20 flex justify-between">
                    <div className="flex flex-col w-80 gap-8">
                        <span className="text-3xl font-medium">ParaBot</span>
                        <span>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</span>
                        <div className="flex gap-3">
                            <div className="p-2 rounded-full border-cyan-50 border-2"><SiFacebook /></div>
                            <div className="p-2 rounded-full border-cyan-50 border-2"><SiTwitter /></div>
                            <div className="p-2 rounded-full border-cyan-50 border-2"><SiYoutube /></div>
                            <div className="p-2 rounded-full border-cyan-50 border-2"><SiDribbble /></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <span className="text-md font-medium">COMPANY</span>
                        <div className="flex flex-col gap-4">
                            <span className="text-sm">About Us</span>
                            <span className="text-sm">Help Center</span>
                            <span className="text-sm">Licenses</span>
                            <span className="text-sm">Market API</span>
                            <span className="text-sm">Site Map</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <span className="text-md font-medium">USERFUL</span>
                        <div className="flex flex-col gap-4">
                            <span className="text-sm">The Collections</span>
                            <span className="text-sm">Size Guide</span>
                            <span className="text-sm">Lookbook</span>
                            <span className="text-sm">Instagram Shop</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <span className="text-md font-medium">CONTACT US</span>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full w-fit border-cyan-50 border-2"><TbMail /></div>
                                <span className="text-sm">info@la-studioweb.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full w-fit border-cyan-50 border-2"><TbPhone /></div>
                                <span className="text-sm">+44.954.954.86</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full w-fit border-cyan-50 border-2"><TbClock /></div>
                                <span className="text-sm">9:00am - 19:00pm<br/>Monday - Sunday</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-1">© 2019 RAZ Store All rights reserved</div>
            </div>
        </footer>
    )
}