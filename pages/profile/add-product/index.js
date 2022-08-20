import { Formik, useFormik  } from 'formik';
import Image from 'next/image';
import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import * as Yup from 'yup';

export const convertMoney = (number) => 
    Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(number);

const productSchema = Yup.object().shape({
    nameProduct: Yup.string().required('Fields is requied.'),
    descProduct: Yup.string().required('Fields is requied.'),
    priceProduct: Yup.string().required('Fields is requied.'),
    stockProduct: Yup.string().required('Fields is requied.'),
});

const ProductForm = ({errors, handleSubmit, handleChange, image}) => {
    
    const [moneyNumber, setMoneyNumber] = React.useState();
    return(
        <>
            <form onSubmit={handleSubmit} onChange={handleChange} className='flex justify-center py-24'>
                <div className='w-7/12 flex flex-col gap-20'>
                    <div className='flex flex-col gap-10'>
                        <span className='text-black font-semibold text-2xl'>
                                Inventory
                        </span>
                        <input
                            type='text'
                            name='nameProduct'
                            className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                            placeholder='Name of goods *'
                                    
                        />
                        {errors.nameProduct ? <span className='text-red-600'>{errors.nameProduct}</span> : null}
                        <textarea
                            id='message'
                            name='descProduct'
                            rows='4'
                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Description Product *'
                        ></textarea>
                        {errors.descProduct ? <span className='text-red-600'>{errors.descProduct}</span> : null}
                    </div>
                    <div className='flex flex-col gap-10'>
                        <span className='text-black font-semibold text-2xl'>
                                Item Details
                        </span>
                        <input
                            type='number'
                            name='priceProduct'
                            value={moneyNumber}
                            onChange={(e) =>
                                setMoneyNumber((e.currentTarget.value))
                            }
                            className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                            placeholder='Unit price *'
                        />
                        {errors.priceProduct ? <span className='text-red-600'>{errors.priceProduct}</span> : null}
                        <span className='flex relative'>
                            <input
                                type='number'
                                name='stockProduct'
                                className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                                placeholder='Unit Stock *'
                                        
                            />
                            <span className='absolute flex-wrap right-2 top-2 text-gray-600'>
                                    /pcs
                            </span>
                        </span>
                        {errors.stockProduct ? <span className='text-red-600'>{errors.stockProduct}</span> : null}
                        <div className='flex flex-col gap-10'>
                            <span className='text-xs'>Stock Condition</span>
                            <div className='flex gap-20'>
                                <div className='flex gap-2'>
                                    <input type='checkbox' name='newProduct' />
                                    <span className='text-xs'>New Product</span>
                                </div>
                                <div className='flex gap-2'>
                                    <input type='checkbox' name='secondProduct'/>
                                    <span className='text-xs'>
                                            Second Product
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <span className='text-black font-semibold text-2xl'>
                                Photo of Goods
                        </span>
                        {image}
                    </div>
                    <div className='flex justify-start'>
                        <button
                            type='submit'
                            className='border border-gray-700 bg-[#1a1a1a] text-white rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'
                        >
                                Sell Product
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

let arrImg = [];
function AddNewProduct() {
    const [imgFile, setImgFile] = React.useState();
    
    const [moneyNumber, setMoneyNumber] = React.useState([]);
    const [imgArr, setImgArr] = React.useState([]);
    
    const onSubmitProduct = (val, e) => {
        // console.log(val);
        // console.log(imgFile);
    };
    const deleteImg = (i)=>{
        setImgArr((state)=>state.filter((item, index)=>index !== i));
    };

    React.useEffect(()=>{
        setImgArr(arrImg);
    }, []);
    return (
        <>
            <Header />
            <Banner
                titleBanner='Selling Product'
                subtitleBanner='See your notifications for the latest updates'
            />
            <section>
                <Formik onSubmit={onSubmitProduct} validationSchema={productSchema} initialValues={{nameProduct: '', descProduct: '', priceProduct: '', stockProduct: '', newProduct: false, secondProduct: false, imgProduct: null}}>
                    {(props)=><ProductForm {...props} image={
                        <div className='flex gap-3'>
                            {imgArr.map((e,i)=>{
                                return(
                                    <>
                                        <div className='w-1/4 h-40 m-2 flex flex-col justify-center items-start relative'>
                                            <Image
                                                src={`${URL.createObjectURL(e)}`}
                                                alt='img'
                                                width={150}
                                                height={170}
                                            />
                                            <div className='absolute w-full flex justify-center z-10 cursor-pointer' onClick={()=>deleteImg(i)}>
                                                <div className='w-fit p-2 bg-black opacity-90 rounded-full'>
                                                    <FiTrash2 size={40} className={'text-red-600'}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            <div className='flex flex-col gap-4'>
                                <div className='flex w-full h-40 items-center justify-center bg-grey-lighter m-2 '>
                                    <label className={`w-full h-full flex flex-col items-center justify-center bg-white text-blue rounded-lg tracking-wide uppercase outline-gray-200 outline-dashed outline-2 outline-offset-0 ${arrImg.length > 2 ? 'pointer-events-none' : 'cursor-pointer'}  hover:bg-gray-100`}>
                                        <FiPlus
                                            size={60}
                                            className='text-gray-300 '
                                        />
                                        <span className='mt-2 text-base leading-normal text-gray-300'>
                                        Add more image
                                        </span>
                                        <input
                                            type='file'
                                            name='imgProduct'
                                            disabled={arrImg.length > 2 ? true : false}
                                            onChange={(e) =>
                                            { 
                                                if(e.target.files[0].type.split('/')[1] === 'png' || e.target.files[0].type.split('/')[1] === 'jpg' || e.target.files[0].type.split('/')[1] === 'jpeg'){
                                                    setImgFile(e.target.files[0]);
                                                    arrImg.push(e.target.files[0]);
                                                } else {
                                                    window.alert('You can uploud only image file');
                                                }
                                            }
                                            }
                                            className='hidden'
                                        />
                                    </label>
                                </div>
                                {arrImg.length > 2 ? <span className='text-red-700'>Maximum uploud images</span> : null}
                            </div>
                        </div>
                    } />}
                </Formik>
            </section>
            <Footer />
        </>
    );
}

export default AddNewProduct;
