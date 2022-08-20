
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Menu from "../components/Menu";
import Image from "next/image";
import chair from "../public/images/chair_order.png"
import { TbCheck } from 'react-icons/tb';

export default function Order(){
    const data = [
        {
            product_name: 'Fabric Mid Century Chair',
            price: '10.50',
            quantity: '5',
            status: 'Sent',
        },
        {
            product_name: 'Chair in Dark Grey',
            price: '4.50',
            quantity: '2',
            status: 'Processed',
        },
        {
            product_name: 'Dining Side Chair in Beige',
            price: '765.99',
            quantity: '7',
            status: 'Pending',
        }
    ]
    return(
        <div>
            <Header />
            <Banner titleBanner="My Order" subtitleBanner="See your notifications for the latest updates"/>
            <main className="flex flex-col justify-center w-full pb-20">
                <Menu />
                <div className="flex flex-col items-center w-full">
                    <div className="bg-gray-50 max-w-[1400px] w-full p-5">
                        <div className="flex w-full justify-between">
                            <div className="flex items-center max-w-[300px] w-full"><span>PRODUCTS</span></div>
                            <div className="flex items-center max-w-[80px] w-full"><span>PRICE</span></div>
                            <div className="flex items-center max-w-[80px] w-full"><span>QUANTITY</span></div>
                            <div className="flex items-center max-w-[200px] w-full"><span>STATUS ORDER</span></div>
                            <div className="flex items-center max-w-[80px] w-full"><span>TOTAL</span></div>
                        </div>
                        <div className="flex flex-col w-full gap-3">
                            {
                                data.map(e => {
                                    return(
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-4 max-w-[300px] w-full">
                                                <Image src={chair} width={'80'} height={'100'} layout='fixed' />
                                                <span>{e.product_name}</span>
                                            </div>
                                            <div className="flex items-center max-w-[80px] w-full font-bold"><span>${e.price}</span></div>
                                            <div className="flex items-center justify-center max-w-[80px] w-full"><span>{e.quantity}</span></div>
                                            <div className="flex gap-2 items-center max-w-[200px] w-full">
                                                <div className="border-2 rounded-full border-gray-900 p-[0.5px] h-fit"><TbCheck /></div>
                                                <span>{e.status}</span>
                                            </div>
                                            <div className="flex items-center max-w-[80px] w-full font-bold"><span>${Number(e.price)*Number(e.quantity)}</span></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}