import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart(){
    return(
        <>
            <Header />
            <div>
                <div className='bg-cart flex-col absolute pt-[74px] pr-[521] pb-[74px] pl-[521]'>
                    <h className='cart-text mb-5 flex items-center justify-center'>Your Cart</h>
                    <h4 className='cart-text2 flex items-center justify-center'>Buy everything in your cart now!</h4>
                </div>
                <div>Items</div>
            </div>
            <Footer />
        </>
    );
}