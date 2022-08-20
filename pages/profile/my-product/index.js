import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ImgDummy from '../../../public/images/item-example.png';

export const TableProduct = () => {
    const item = [1,2,3,4];
    return(
        <>
            <section className='mx-20'>
                <div className='overflow-x-auto shadow-none sm:rounded-lg py-20'>
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-black uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-t border-b h-16'>
                            <tr>
                                <th>Product</th>
                                <th>Stock Status</th>
                                <th>Price</th>
                                <th>
                                    <span className='sr-only'>Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-black'>
                            {item.map(e=>{
                                return(
                                    <>
                                        <tr className='bg-white dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='w-1/3 pt-8'>
                                                <div className='flex items-center gap-4'>
                                                    <Image src={ImgDummy} alt='img-dummy' width={130} height={150}/>
                                                    <span>Dining Side Chair in Beige</span>
                                                </div>
                                            </td>
                                            <td className='w-1/6 pt-8'>
                                                <div className='flex items-center gap-3'>
                                                    <FiCheckCircle/>
                                                    <span>10 Stock</span>
                                                </div>
                                            </td>
                                            <td className='w-1/6  pt-8'>$765.99</td>
                                            <td className='w-1/6  pt-8'>
                                                <button
                                                    type='button'
                                                    className='border border-red-500 bg-red-500 text-white rounded-md px-7 py-2 my-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'
                                                >
                                            Delete
                                                </button>
                                                {/* <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Edit</a> */}
                                            </td>   
                                        </tr>
                                    </>
                                );
                            })} 
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

function MyProduct() {
    return (
        <>
            <Head>
                <title>Profile - MyProduct</title>
            </Head>
            <Header />
            <Banner titleBanner='My Product' subtitleBanner='See your notifications for the latest updates' />
            <TableProduct/>
            <Footer />
        </>
    );
}

export default MyProduct;
