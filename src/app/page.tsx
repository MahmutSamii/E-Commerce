import React from 'react';
import HeroSection from "../../containers/HomePage/HeroSection/HeroSection";
import FlashSale from "../../containers/HomePage/FlashSaleSection/FlashSale";
import BrowseCategories from "../../containers/HomePage/CategoriesSection/BrowseCategories";
import ProductSection from "../../containers/HomePage/ProductSection/ProductSection";
import PromoBanner from "../../containers/HomePage/PromoBannerSection/PromoBanner";
import OurProductSection from "../../containers/HomePage/OurProductSection/OurProduct";
import FeaturedSection from "../../containers/HomePage/FeaturedSection/FeaturedSection";

function Page(props) {
    return (
        <>
            <HeroSection/>
            <FlashSale/>
            <BrowseCategories/>
            <ProductSection/>
            <PromoBanner/>
            <OurProductSection/>
            <FeaturedSection/>
        </>
    );
}

export default Page;