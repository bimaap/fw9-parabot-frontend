import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function product() {
    return (
        <>
            <Header />
            <Banner basePath='Shop' targetPath='product' titleBanner='Let’s Shopping' subtitleBanner='Find and buy the one you like'/>
            <div>product</div>
            <Footer />
        </>
    );
}

export default product;
