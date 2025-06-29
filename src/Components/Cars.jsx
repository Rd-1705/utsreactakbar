import React, { useState } from 'react';
import { Info, Heart, MessageCircle, ShoppingCart } from 'lucide-react';

const Cars = ({ name, price, color, image }) => {
  const [liked, setLiked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleInfo = () => {
    alert(`📦 Product Info:\n\nName: ${name}\nPrice: Rp${price}\nColor: ${color}`);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = () => {
    const comment = prompt(`💬 Leave a comment for ${name}:`);
    if (comment) {
      alert(`📝 Your comment:\n"${comment}"\nhas been submitted.`);
    }
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="bg-white hover:shadow-2xl shadow-md rounded-2xl p-4 w-full max-w-xs m-auto transition duration-300 ease-in-out">
      <img
        src={image}
        alt={name}
         className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4 hover:scale-105 transition duration-300"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500 mt-1">Color: <span className="font-medium">{color}</span></p>
      <p className="text-lg text-indigo-600 font-bold mt-1 mb-4">Rp{price.toLocaleString()}</p>

      <div className="flex justify-between items-center mt-2">
        <button onClick={handleInfo} title="Info">
          <Info className="w-5 h-5 text-blue-500 hover:scale-125 transition" />
        </button>
        <button onClick={handleLike} title="Like">
          <Heart
            className={`w-5 h-5 hover:scale-125 transition ${liked ? 'text-red-500' : 'text-gray-400'}`}
          />
        </button>
        <button onClick={handleComment} title="Comment">
          <MessageCircle className="w-5 h-5 text-green-600 hover:scale-125 transition" />
        </button>
        <button onClick={handleAddToCart} className="relative group" title="Add to Cart">
          <ShoppingCart className="w-5 h-5 text-yellow-500 group-hover:scale-125 transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Cars;
