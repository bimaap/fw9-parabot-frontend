
import React from 'react';
import { TbSearch, TbHeart, TbShoppingCart, TbAlignRight, TbChevronDown } from 'react-icons/tb';
import Link from 'next/link';

export default function Header(){
    const [page, setPage] = React.useState({active: false, left: 0, top: 0})
    const [shop, setShop] = React.useState({active: false, left: 0, top: 0})
    const [burger, setBurger] = React.useState({active: false, left: 0, top: 0})

    const pagePos = (e) => {
        setPage({active: !page.active, left: e.pageX - 60, top: e.pageY + 30})
    }

    const pageShop = (e) => {
        setShop({active: !shop.active, left: e.pageX - 60, top: e.pageY + 30})
    }

    const pageBurger = (e) => {
        setBurger({active: !burger.active, left: e.pageX - 60, top: e.pageY + 30})
    }
    return(
        <header className="bg-slate-100 h-28 flex items-center justify-center px-5">
            <div className="max-w-[1400px] flex-1 flex justify-between items-center">
                <Link href={'/'}><span className="text-3xl font-medium cursor-pointer">ParaBot</span></Link>
                <div className="flex gap-10 text-gray-700">
                    <Link href={'/#'}><span className="font-semibold cursor-pointer">HOME</span></Link>
                    <div className="flex items-center gap-1 cursor-pointer" id="page" onClick={(e)=> pagePos(e)}>
                        <span className="font-semibold">PAGES</span>

                        <TbChevronDown />
                    </div>
                    {
                        page.active&&
                        <div style={{top: page.top, left: page.left}} className={`absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}>
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</a>
                            </div>
                        </div>
                    }
                    <div className='flex items-center gap-1 cursor-pointer' onClick={(e)=> pageShop(e)}>
                        <span className='font-semibold'>SHOP</span>
                        <TbChevronDown />
                    </div>
                    {
                        shop.active&&
                        <div style={{top: shop.top, left: shop.left}} className={`absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}>
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</a>
                            </div>
                        </div>
                    }
                    <Link href={'/#'}><span className='font-semibold cursor-pointer'>BLOG</span></Link>
                </div>
                <div className='flex gap-8 text-center justify-center text-gray-700'>
                    <Link href={'/#'}><TbSearch className='text-2xl cursor-pointer' /></Link>
                    <Link href={'/#'}><TbHeart className='text-2xl cursor-pointer' /></Link>
                    <Link href={'/#'}><TbShoppingCart className='text-2xl cursor-pointer' /></Link>
                    <TbAlignRight className='text-2xl cursor-pointer' onClick={(e)=> pageBurger(e)} />
                    {
                        burger.active&&
                        <div style={{top: burger.top, left: burger.left}} className={`absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}>
                            <div className="py-1" role="none">
                                <Link href={'/login'}><span className="text-gray-700 px-4 py-2 text-sm cursor-pointer flex" role="menuitem" id="menu-item-0">Login</span></Link>
                                <Link href={'/register'}><span className="text-gray-700 px-4 py-2 text-sm cursor-pointer flex" role="menuitem" id="menu-item-1">Register</span></Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}