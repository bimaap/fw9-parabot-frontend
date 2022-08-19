import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';


function Banner({basePath, basePathUrl, targetPath, targetPathUrl, titleBanner, subtitleBanner}) {
    return (
        <>
            <div className='h-64 flex justify-center'>
                <div className='w-[1200px] bg-white'>
                    <div className='my-10'>
                        <nav className='flex px-5 py-3'>
                            <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                                <li className='inline-flex items-center'>
                                    <Link href={basePathUrl??'#'} >
                                        <a className='text-sm font-medium text-gray-700 hover:text-gray-900 dark:hover:text-white'>
                                            {basePath}
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <div className='flex items-center'>
                                        {targetPath ? <FiChevronRight/> : null}
                                        <Link href={targetPathUrl??'#'}>
                                            <a className='ml-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:hover:text-white'>{targetPath}</a>
                                        </Link>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <span className='text-6xl'>{titleBanner}</span>
                            <span className='text-base'>{subtitleBanner}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;