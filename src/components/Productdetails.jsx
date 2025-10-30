import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../slice/CartSlice";
import { ShoppingCart } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(add(product));
    alert("Product added to cart 🛒");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
        <p className="text-lg font-semibold text-gray-700 animate-pulse">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 py-16 px-6 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 border border-white/40">
        
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-80 h-80 object-contain transform transition duration-300 group-hover:scale-105 drop-shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{product?.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {product?.description}
            </p>
            <div className="flex items-center justify-between mt-6">
              <p className="text-2xl font-bold text-indigo-600">${product?.price}</p>
              <span className="text-yellow-500 font-semibold">
                ★ {product?.rating?.rate ?? "4.5"}
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-8 flex items-center justify-center gap-3 bg-indigo-600 text-white font-semibold px-8 py-3 rounded-2xl shadow-md hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
          >
            <ShoppingCart size={22} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
