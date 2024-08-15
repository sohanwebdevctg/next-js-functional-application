import CartTable from '@/components/cartTable/CartTable';
import React from 'react';

export const metadata = {
  title: "Urnitur | Cart",
  description: "This is cart page",
};

const Cart = () => {
  return (
    <div>
      {/* cart section start */}
      <CartTable></CartTable>
      {/* cart section end */}
    </div>
  );
};

export default Cart;