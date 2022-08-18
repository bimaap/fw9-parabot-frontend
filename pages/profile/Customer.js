import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import {FiEdit3, FiLogOut} from 'react-icons/fi';

function Customer() {
    return (
        <>
            <Header />
            
            <Head>Profile Customer</Head>

            <div className='flex flex-col justify-between items-center w-[100%] h-[250px] relative'>
                <Image
                    src='/images/bg.png'
                    layout='fill'
                    className=''
                    alt='bg profile'
                />
                <div className='flex flex-col'>
                    <p className='absolute '>Profile</p>
                    <p className='absolute '>See your notifications for the latest updates</p>
                </div>
            </div>

            <div>
                <div className='flex flex-row p-5 mx-[150px] my-10'>
                    <div>
                        <Image src='/images/Ellipse3.png' 
                            width={80} 
                            height={70}
                            alt='photo profile'
                            className='rounded-full'
                        />
                    </div>
                    <div >
                        <div className='flex flex-row p-3 ml-7'>
                            <Link href='./Seller'><a>Syifa</a></Link>
                            <FiEdit3 />
                        </div>
                        <div>
                            <p className='ml-9'>as costumer</p>
                        </div>
                    </div>
                </div>
            
                <div className='flex flex-row justify-between border-4  p-10 mx-[150px]'>
                    <div className='flex flex-col '>
                        <div className=''>Gender</div>
                        <div className=''>Female</div>
                    </div>
                    <div className='flex flex-row'>
                        <Link href='./Seller'><a>EDIT</a></Link>
                        <FiEdit3 />
                    </div>

                </div>
                <div className='flex flex-row justify-between border-4  p-10 mx-[150px]'>
                    <div className='flex flex-col '>
                        <div className=''>Your Email</div>
                        <div className=''>syifa@gamil.com</div>
                    </div>
                    <div className='flex flex-row'>
                        <Link href='./Seller'><a>EDIT</a></Link>
                        <FiEdit3 />
                    </div>

                </div>
                <div className='flex flex-row justify-between border-4  p-10 mx-[150px]'>
                    <div className='flex flex-col '>
                        <div className=''>Store Description</div>
                        <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    <div className='flex flex-row'>
                        <Link href='./Seller'><a>EDIT</a></Link>
                        <FiEdit3 />
                    </div>
                </div>
            
            </div>
            <div className='flex flex-col mx-[150px] my-20 w-30 h-30 '>
                
                <button className='bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-4 rounded-lg w-[210px] h-[70px] justify-center items-center text-center'>
                    <FiLogOut />  Logout
                </button>
            </div>

            <Footer />
        </>
        
    );
}

export default Customer;