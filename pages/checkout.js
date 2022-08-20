
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Menu from "../components/Menu";
import { SiVisa } from "react-icons/si";
import { Formik } from "formik";
import * as Yup from "yup"

export default function Order(){
    const checkoutSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        card: Yup.string().required('Required'),
    })

    return(
        <div>
            <Header />
            <Banner titleBanner="Check Out" subtitleBanner="See your notifications for the latest updates"/>
            <main className="flex flex-col justify-center w-full pb-20">
                <Menu />
                <Formik
                    initialValues={{name: '', address: '', phone: '', card: ''}}
                    validationSchema={checkoutSchema}>
                    {(props)=>
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-gray-50 max-w-[1400px] w-full p-5 flex flex-col items-center">
                                <span className="text-2xl font-semibold">Self Information</span>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <span className="text-xs">Your Name *</span>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" name="name" />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500">error</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <span className="text-xs">Address *</span>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" name="address" />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500">error</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <select name="phone" className="bg-transparent outline-none text-xs w-[60px]">
                                                <option value="indo">+62</option>
                                                <option value="ngawi">+96</option>
                                            </select>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500">error</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <SiVisa className="text-[40px]" />
                                        </div>
                                        <select name="card" className="bg-transparent outline-none text-xs flex flex-1">
                                            <option value="indo">Pay with Visa</option>
                                            <option value="ngawi">Pay with Gopay</option>
                                        </select>
                                    </div>
                                    <span className="text-xs pl-1 text-red-500">error</span>
                                </div>
                                <div>
                                    <button class="bg-gray-800 w-[120px] h-[40px] text-white">Check Out</button>
                                </div>
                            </div>
                        </div>
                    }
                </Formik>
            </main>
            <Footer />
        </div>
    )
}