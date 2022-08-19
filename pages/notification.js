import React from 'react';
import Header  from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Notification = () => {
    const buttonPaginate = ['01', '02', '03', '04', '05'];
    const [paginate, setPaginet] = React.useState(buttonPaginate[0]);
    return (
        <>
            <Header/>
            <Banner titleBanner={'Notification'} subtitleBanner={'See your notifications for the latest updates'}/>
            <section>
                <div className='my-28 mx-36 '>
                    {/* Map notificationnya disini COY!!! */}
                    <div className='border border-[#D1D1D1]'>
                        <div className=' my-10 mx-16'>
                            <p className=' text-[24px] font-[700] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className=' text-[16px] font-[400] leading-[35px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                        </div>
                    </div>
                    <div className='border border-[#D1D1D1]'>
                        <div className=' my-10 mx-16'>
                            <p className=' text-[24px] font-[700] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className=' text-[16px] font-[400] leading-[35px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                        </div>
                    </div>
                    <div className='border border-[#D1D1D1]'>
                        <div className=' my-10 mx-16'>
                            <p className=' text-[24px] font-[700] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className=' text-[16px] font-[400] leading-[35px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus non elementum arcu tortor...</p>
                        </div>
                    </div>
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
            </section>
            <Footer/>
        </>
    );
};

export default Notification;