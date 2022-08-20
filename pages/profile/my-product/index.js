import { Formik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ModalProduct from '../../../components/ModalProduct';
import ImgDummy from '../../../public/images/item-example.png';
import * as Yup from 'yup';

const editProductSchema = Yup.object().shape({
    nameProduct: Yup.string().min(5, 'Name must at least 5 characters'), 
    stockProduct: Yup.number().min(1, 'Minimum stock is 1'), 
    priceProduct: Yup.number().min(1000, 'minimum price is 1000')
});

const EditModalForm = ({errors, handleChange, handleSubmit}) => {
    const [moneyNumber, setMoneyNumber] = React.useState();
    const [nameField, setNameField] = React.useState('');
    const [stockField, setStockField] = React.useState('');
    const [priceField, setPriceField] = React.useState('');

    return (
        <>
            <form noValidate onSubmit={handleSubmit} onChange={handleChange} className='flex flex-col gap-5'>
                <span className='text-sm w-1/2'>You can edit your product here. Every change will be saved after you edit and save your data.</span>
                <div className='flex flex-col gap-4'>
                    <span className='text-black font-semibold text-md'>
                        Name Product
                    </span>
                    <input
                        type='text'
                        name='nameProduct'
                        value={nameField}
                        onChange={(e)=>setNameField(e.currentTarget.value)}
                        className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                        placeholder='Name of goods *'
                                    
                    />
                    {errors.nameProduct ? <span className='text-red-600'>{errors.nameProduct}</span> : null}
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-black font-semibold text-md'>
                        Stock Product
                    </span>
                    <span className='flex relative'>
                        <input
                            type='number'
                            name='stockProduct'
                            value={stockField}
                            onChange={(e)=>setStockField(e.currentTarget.value)}
                            className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                            placeholder='Unit Stock *'
                                        
                        />
                        <span className='absolute flex-wrap right-2 top-2 text-gray-600'>
                                    /pcs
                        </span>
                    </span>
                    {errors.stockProduct ? <span className='text-red-600'>{errors.stockProduct}</span> : null}
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-black font-semibold text-md'>
                        Price Product
                    </span>
                    <input
                        type='number'
                        name='priceProduct'
                        value={priceField}
                        onChange={(e) =>
                            setPriceField((e.currentTarget.value))
                        }
                        className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                        placeholder='Unit price *'
                    />
                    {errors.priceProduct ? <span className='text-red-600'>{errors.priceProduct}</span> : null}
                </div>
                <div className='flex justify-end py-10'>
                    <button
                        className={`${nameField || stockField || priceField ? 'bg-emerald-500' : 'bg-gray-300' } text-white active:bg-emerald-600 text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                        type='submit'
                        disabled={nameField || stockField || priceField ? false : true}
                    >
                    Save Changes
                    </button>
                </div>
            </form>
        </>
    );
};

export const TableProduct = () => {
    const item = [1,2,3,4];
    const [showModal, setShowModal] = React.useState(false);
    const submitEditModal = (val) => {console.log(val);};
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
                                            <td className='w-1/6  pt-8 flex gap-4'>
                                                <button
                                                    type='button'
                                                    onClick={() => setShowModal(true)}
                                                    className='border border-yellow-500 bg-yellow-500 text-white rounded-md px-7 py-2 my-2 transition duration-500 ease select-none hover:bg-yellow-400 focus:outline-none focus:shadow-outline'
                                                >
                                            Edit
                                                </button>
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
                    {showModal ? (
                        <>
                            <ModalProduct title={'Edit my product'} onHide={()=>setShowModal(false)} content={
                                (
                                    <>
                                        <Formik onSubmit={submitEditModal} initialValues={{nameProduct: '', stockProduct: '', priceProduct: ''}} validationSchema={editProductSchema}>
                                            {(props)=> <EditModalForm {...props} />}
                                        </Formik>
                                    </>
                                )
                            }/>
                        </>
                    ): null}
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
