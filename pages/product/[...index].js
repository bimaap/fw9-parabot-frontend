import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SidebarProduct from '../../components/SidebarProduct';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from 'next/image';
import ImgDummy from '../../public/images/item-example.png';
import CardProduct from '../../components/CardProduct';
import cookies from 'next-cookie';
import axiosServer from '../../helpers/httpServer';

export async function getServerSideProps(context){
    try{
        const search = !context.query?.search?'':context.query.search;
        const page = !context.query?.page? 1 :context.query.page;
        const sortBy = !context.query?.sortBy? 'created_at': context.query.page;
        const sort = !context.query?.sort? 'asc': 'desc';
        const product = await axiosServer.get(
            `/products?search=${search}&sortBy=${sortBy}&sort=${sort}&page=${page}`
        );
        console.log(product);
        return{
            props:{
                dataProduct:product.data.result,
                dataPage:product.data.pageInfo
            }
        };
    }
    catch(err){
        console.log(err);
        return {
            props:{
                isError:true
            }
        };
    }
};

function Product(props) {
    const itemsCol = props.dataProduct;
    console.log(props.dataProduct);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [isActive, setIsActive] = React.useState(0);
    const buttonPaginate = ['01', '02', '03', '04', '05'];
    const [paginate, setPaginet] = React.useState(buttonPaginate[0]);
    return (
        <>
            <Header />
            <Banner basePath='Shop' targetPath='product' titleBanner='Let’s Shopping' subtitleBanner='Find and buy the one you like'/>
            <section className='grid row-auto grid-cols-12 gap-5 mx-20'>
                <SidebarProduct/>
                <main className='col-start-4 col-end-13 ml-10'>
                    <div className='flex justify-between font-semibold'>
                        <span className='text-sm'>Showing 1-16 of 39 Results</span>
                        <div className='flex flex-col items-end'>
                            <button onClick={()=>{setShowDropdown(!showDropdown);}} className='flex justify-center items-center gap-3'>
                                <span className='text-sm'>Sort by</span>
                                {showDropdown ? <FiChevronUp/> : <FiChevronDown/>}
                            </button>
                            {showDropdown?<div className='bg-black w-40 flex flex-col py-10 px-5 gap-7 mt-10 absolute z-10 rounded-lg'>
                                <span onClick={()=>{setIsActive(1); setShowDropdown(false);}} className={`${isActive == 1 ? 'text-white' : 'text-gray-400' } hover:text-white cursor-pointer`}>Latest Product</span>
                                <span onClick={()=>{setIsActive(2); setShowDropdown(false);}} className={`${isActive == 2 ? 'text-white' : 'text-gray-400' } hover:text-white cursor-pointer`}>More Expensive</span>
                                <span onClick={()=>{setIsActive(3); setShowDropdown(false);}} className={`${isActive == 3 ? 'text-white' : 'text-gray-400' } hover:text-white cursor-pointer`}>More Cheap</span>
                            </div> : null}
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        {itemsCol?.map((e,i)=>{
                            return(
                                <>
                                    <CardProduct productUrl={`/product/${i}/details`} img={<Image src={e.product_images} width={100} height={100} alt='img-product'/>} title={e.product_name} subtitle={e.price} />
                                </>
                            );
                        })}
                        <div className='flex gap-5 py-40'>
                            {buttonPaginate.map(e=>{
                                return (
                                    <>
                                        <button onClick={()=>setPaginet(e)} className={`${paginate == e ? 'bg-black' : 'bg-white'} border border-gray-400 py-3 px-4 rounded-lg`}>
                                            <span className={`${paginate == e ? 'text-white' : 'text-black' } `}>{e}</span>
                                        </button>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </main>
            </section>
            <Footer />
        </>
    );
}

export default Product;
