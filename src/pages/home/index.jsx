import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/productsAction';
import { loadCart } from '../../actions/cartAction';
import Product from './Product';

function Home({
  products: { loading: productsLoading, products, error: productsError },
  loadProducts,
  loadCart,
}) {
  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  if (productsLoading) {
    return <h1>Loading...</h1>;
  }

  if (productsError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      {products ? (
        products.map(product => <Product key={product.id} product={product} />)
      ) : (
        <h1>No Products Available</h1>
      )}
    </div>
  );
}

const mapStateToProps = store => ({
  cart: store.cart,
  products: store.products,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => loadProducts()(dispatch),
  loadCart: () => loadCart()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
