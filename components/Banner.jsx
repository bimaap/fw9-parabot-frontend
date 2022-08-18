import React from 'react';

function Banner() {
    return (
        <>
            <div className='h-64 flex justify-center'>
                <div className='w-[1200px] flex justify-between bg-white'>
                    <div className='my-10'>
                        <nav className='flex px-5 py-3'>
                            <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                                <li className='inline-flex items-center'>
                                    Shop
                                </li>
                                <li>
                                    <div className='flex items-center'>

                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* <div className='grid grid-cols-12 gap-3'>
                        <div className='col-start-2 col-end-5'>
                            a
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <nav className='flex px-5 py-3 text-gray-700'>
                aa
            </nav> */}
        </>
    );
}

export default Banner;