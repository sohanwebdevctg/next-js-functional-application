import BrandLogo from "./components/home/BrandLogo";
import Support from "./components/home/Support";



const HomePage = () => {
  return (
    <div>
      {/* support section start */}
      <Support></Support>
      {/* support section end */}
      {/* brandLogo section start */}
      <BrandLogo></BrandLogo>
      {/* brandLogo section end */}
    </div>
  );
};

export default HomePage;
