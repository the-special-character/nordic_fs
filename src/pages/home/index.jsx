<<<<<<< HEAD
import React, { useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/productsAction';
import {
  addCart,
  deleteCart,
  loadCart,
  updateCart,
} from '../../actions/cartAction';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
=======
import React, { useContext, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { ProductsContext } from '../../context/productsContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Home() {
  const { loadProducts, products, loading, error } =
    useContext(ProductsContext);

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  console.log(products);

  return (
    <div>
      {products ? (
        products.map(product => (
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover object-center"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {product.title}
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading">{product.description}</h3>

                <p className="text-2xl text-gray-900">{product.price}</p>

                {/* Reviews */}
                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map(rating => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.rating.rate > rating
                              ? 'text-gray-900'
                              : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">
                      {product.rating.rate} out of 5 stars
                    </p>
                    <a
                      href="#reviews"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {product.rating.count} reviews
                    </a>
                  </div>
                </div>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </section>
            </div>
          </div>
        ))
      ) : (
        <h1>No Products Available</h1>
      )}
    </div>
  );
>>>>>>> 1e1eb24a7011c5973955e6c23f91f7c387816f71
}

function Home({
  products: { loading: productsLoading, products, error: productsError },
  cart: { loading: cartLoading, cart, error: cartError },
  loadProducts,
  loadCart,
  addCart,
  updateCart,
  deleteCart,
}) {
  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  if (productsLoading || cartLoading) {
    return <h1>Loading...</h1>;
  }

  if (productsError || cartError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      {products ? (
        products.map(product => {
          const cartItem = cart.find(x => x.productId === product.id);

          return (
            <div
              key={product.id}
              className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8"
            >
              <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover object-center"
                />
              </div>
              <div className="sm:col-span-8 lg:col-span-9">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                  {product.title}
                </h2>

                <section aria-labelledby="information-heading" className="mt-2">
                  <h3 id="information-heading">{product.description}</h3>

                  <p className="text-2xl text-gray-900">
                    {new Intl.NumberFormat('en-IN', {
                      currency: 'INR',
                      style: 'currency',
                    }).format(product.price)}
                  </p>

                  {/* Reviews */}
                  <div className="mt-6">
                    <h4 className="sr-only">Reviews</h4>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map(rating => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              product.rating.rate > rating
                                ? 'text-gray-900'
                                : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {product.rating.rate} out of 5 stars
                      </p>
                      <a
                        href="#reviews"
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {product.rating.count} reviews
                      </a>
                    </div>
                  </div>
                </section>

                <section aria-labelledby="options-heading" className="mt-10">
                  {cartItem ? (
                    <div className="flex items-center">
                      <button
                        onClick={() => {
                          updateCart({
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                          });
                        }}
                        type="button"
                        className="flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        +
                      </button>
                      <p className="flex-1 text-center text-3xl font-bold">
                        {cartItem.quantity}
                      </p>
                      <button
                        onClick={() => {
                          if (cartItem.quantity <= 1) {
                            deleteCart(cartItem);
                          } else {
                            updateCart({
                              ...cartItem,
                              quantity: cartItem.quantity - 1,
                            });
                          }
                        }}
                        type="button"
                        className="flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        addCart({
                          productId: product.id,
                          quantity: 1,
                        });
                      }}
                      type="button"
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add to bag
                    </button>
                  )}
                </section>
              </div>
            </div>
          );
        })
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
  addCart: data => addCart(data)(dispatch),
  updateCart: data => updateCart(data)(dispatch),
  deleteCart: data => deleteCart(data)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
