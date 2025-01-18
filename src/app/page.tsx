import React from 'react';
import HeroSection from "../../containers/HomePage/HeroSection/HeroSection";
import FlashSale from "../../containers/HomePage/FlashSaleSection/FlashSale";
import BrowseCategories from "../../containers/HomePage/CategoriesSection/BrowseCategories";
import ProductSection from "../../containers/HomePage/ProductSection/ProductSection";
import PromoBanner from "../../containers/HomePage/PromoBannerSection/PromoBanner";
import OurProductSection from "../../containers/HomePage/OurProductSection/OurProduct";

function Page(props) {
    return (
        <>
            <HeroSection/>
            <FlashSale/>
            <BrowseCategories/>
            <ProductSection/>
            <PromoBanner/>
            <OurProductSection/>
        </>
    );
}

export default Page;