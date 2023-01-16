import React from 'react';
import { connect } from 'react-redux';
import Reviews from '../../components/Reviews';
import { addCart, deleteCart, updateCart } from '../../actions/cartAction';

function Product({ product, cartItem, addCart, updateCart, deleteCart }) {
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
          <Reviews {...product.rating} />
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
}

const mapStateToProps = (store, { product }) => {
  const cartItem = store.cart.cart.find(x => x.productId === product.id);
  return {
    cartItem,
  };
};

const mapDispatchToProps = dispatch => ({
  addCart: data => addCart(data)(dispatch),
  updateCart: data => updateCart(data)(dispatch),
  deleteCart: data => deleteCart(data)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
