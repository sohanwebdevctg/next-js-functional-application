import ShopBanner from '../components/shop/ShopBanner';
import ViewProduct from '../components/shop/ViewProduct';

const ShopPage = () => {
  return (
    <div>
      {/* shop section start */}
      <ShopBanner></ShopBanner>
      {/* shop section end */}
      {/* viewProduct section start */}
      <ViewProduct></ViewProduct>
      {/* viewProduct section end */}
    </div>
  );
};

export default ShopPage;