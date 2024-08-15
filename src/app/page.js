import Banner from "@/components/home/Banner";
import Support from "@/components/home/Support";
import OurGallery from "@/components/home/OurGallery";
import OurProduct from "@/components/home/OurProduct";
import BrandLogo from "@/components/home/BrandLogo";
import RecentlyView from "@/components/home/RecentlyView";

const HomePage = () => {
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* support section start */}
      <Support></Support>
      {/* support section end */}
      {/* ourGallery section start */}
      <OurGallery></OurGallery>
      {/* ourGallery section end */}
      {/* ourProduct section start */}
      <OurProduct></OurProduct>
      {/* ourProduct section end */}
      {/* brandLogo section start */}
      <BrandLogo></BrandLogo>
      {/* brandLogo section end */}
      {/* recentlyView section start */}
      <RecentlyView></RecentlyView>
      {/* recentlyView section end */}
    </div>
  );
};

export default HomePage;
