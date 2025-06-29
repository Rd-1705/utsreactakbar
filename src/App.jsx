import React from 'react';
import Cars from './Components/Cars';

const clothes = [
  {
    id: 1,
    name: "Vintage Skirt",
    price: 100000,
    color: "Caramel",
    image: "https://i.pinimg.com/564x/da/c0/f9/dac0f934239096cfa93c9420576c5210.jpg",
  },
  {
    id: 2,
    name: "Ezza Dress Pants",
    price: 100000,
    color: "Black",
    image: "https://i.pinimg.com/736x/3a/6e/96/3a6e960ee7613033d9bd30a81f3efd7d.jpg",
  },
  {
    id: 3,
    name: "Midi Wrap Skirt",
    price: 150000,
    color: "Pink",
    image: "https://i.pinimg.com/564x/10/31/88/103188dce048154ceb283b1b801ffb0c.jpg",
  },
  {
    id: 4,
    name: "Classic Denim Jacket",
    price: 200000,
    color: "Blue",
    image: "https://i.pinimg.com/736x/bf/9c/07/bf9c071ec88c6e4f47b5ccbe40e92956.jpg",
  },
  {
    id: 5,
    name: "Oversized Hoodie",
    price: 175000,
    color: "Grey",
    image: "https://i.pinimg.com/736x/61/6e/d7/616ed74682339977a0326b8d80e4268f.jpg",
  },
  {
    id: 6,
    name: "Pleated Skirt",
    price: 120000,
    color: "Beige",
    image: "https://i.pinimg.com/736x/33/e0/10/33e010b9c325715b66605d34aeb9f960.jpg",
  },
  {
    id: 7,
    name: "Basic White T-shirt",
    price: 50000,
    color: "White",
    image: "https://i.pinimg.com/736x/8c/fd/bc/8cfdbc7d74cc5f7be78b651c8260e8f3.jpg",
  },
  {
    id: 8,
    name: "Flannel Shirt",
    price: 130000,
    color: "Red",
    image: "https://i.pinimg.com/736x/40/ba/96/40ba96478fe4928ef1ba802d22c3bdab.jpg",
  },
  {
    id: 9,
    name: "Cropped Sweater",
    price: 160000,
    color: "Olive",
    image: "https://i.pinimg.com/736x/13/a3/d5/13a3d5f727f843a990a64aac1bfeaa14.jpg",
  },
  {
    id: 10,
    name: "Linen Button Shirt",
    price: 140000,
    color: "Cream",
    image: "https://i.pinimg.com/736x/ca/a9/41/caa94114ef4d4911aa13a18cb54d8540.jpg",
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold mb-6 text-center">Clothing Catalog</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {clothes.map((item) => (
      <Cars
        key={item.id}
        name={item.name}
        price={item.price}
        color={item.color}
        image={item.image}
      />
    ))}
  </div>
</div>
  );
};


export default App;
