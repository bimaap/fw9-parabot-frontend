import Image from 'next/image';
import React from 'react';

const Chats = () => {
    return (
        <>
            <section>
                <div className='  mt-28 mx-36 bg-stone-400'>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-2'>
                            <div className=' p-11 flex items-center'>
                                <div className=''>
                                    <Image src='/vercel.svg' width={60} height={60} alt='profile'/>
                                </div>
                                <div className=' ml-5'>
                                    <p className=' font'>Syifa Guys</p>
                                    <p>Selamat datang</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className=' p-11 flex items-center'>
                                <div className=''>
                                    <Image src='/vercel.svg' width={60} height={60}  alt='profile'/>
                                </div>
                                <div className=' ml-5'>
                                    <p className=' font'>Syifa Guys</p>
                                    <p>Selamat datang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Chats;