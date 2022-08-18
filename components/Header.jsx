
import { TbSearch, TbHeart, TbShoppingCart, TbAlignRight, TbChevronDown } from 'react-icons/tb';

export default function Header(){
    return(
        <header className='bg-slate-100 h-28 flex items-center justify-center'>
            <div className='w-[1400px] flex justify-between items-center'>
                <span className='text-3xl font-medium text-gray-700'>ParaBot</span>
                <div className='flex gap-10 text-gray-700'>
                    <span className='font-semibold'>HOME</span>
                    <div className='flex items-center gap-1'>
                        <span className='font-semibold'>PAGES</span>
                        <TbChevronDown />
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='font-semibold'>SHOP</span>
                        <TbChevronDown />
                    </div>
                    <span className='font-semibold'>BLOG</span>
                </div>
                <div className='flex gap-8 text-center justify-center text-gray-700'>
                    <TbSearch className='text-2xl' />
                    <TbHeart className='text-2xl' />
                    <TbShoppingCart className='text-2xl' />
                    <TbAlignRight className='text-2xl' />
                </div>
            </div>
        </header>
    );
}