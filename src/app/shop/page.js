import FeaturedProducts from '../components/shop/FeaturedProducts';
import ShopBanner from '../components/shop/ShopBanner';
import ShopBrand from '../components/shop/ShopBrand';
import ShopSupport from '../components/shop/ShopSupport';
import ViewProduct from '../components/shop/ViewProduct';

const ShopPage = () => {
  return (
    <div>
      {/* shop section start */}
      <ShopBanner></ShopBanner>
      {/* shop section end */}
      {/* shopBrand section start */}
      <ShopBrand></ShopBrand>
      {/* shopBrand section end */}
      {/* viewProduct section start */}
      <ViewProduct></ViewProduct>
      {/* viewProduct section end */}
      {/* featured products section start */}
      <FeaturedProducts></FeaturedProducts>
      {/* featured products section end */}
      {/* shopSupport section start */}
      <ShopSupport></ShopSupport>
      {/* shopSupport section end */}
    </div>
  );
};

export default ShopPage;