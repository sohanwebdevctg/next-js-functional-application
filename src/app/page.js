
import BrandLogo from "./components/home/BrandLogo";
import OurGallery from "./components/home/OurGallery";
import RecentlyView from "./components/home/RecentlyView";
import Support from "./components/home/Support";



const HomePage = () => {
  return (
    <div>
      {/* support section start */}
      <Support></Support>
      {/* support section end */}
      {/* ourGallery section start */}
      <OurGallery></OurGallery>
      {/* ourGallery section end */}
      {/* recentlyView section start */}
      <RecentlyView></RecentlyView>
      {/* recentlyView section end */}
      {/* brandLogo section start */}
      <BrandLogo></BrandLogo>
      {/* brandLogo section end */}
    </div>
  );
};

export default HomePage;
