import ShopBanner from '../components/shop/ShopBanner';
import ShopBrand from '../components/shop/ShopBrand';
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
    </div>
  );
};

export default ShopPage;