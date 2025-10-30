import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../slice/Wishlistslice1";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const REM = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <div className="flex flex-col gap-10 pt-20 justify-center mt-10 px-4">
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-500">No items in wishlist</p>
        ) : (
          wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-row"
            >
              {/* Image */}
              <div className="h-14 flex justify-center items-center bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm">{product.name}</h3>

                  <div className="flex items-center gap-3">
                    <button
                      className="ml-5 px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white"
                      onClick={() => REM(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

               
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
