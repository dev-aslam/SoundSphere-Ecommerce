import ProductCard from "../Shared/ProductCard";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Astell&Kern - A&ultima",
    image: "./productPlaceholder1.jpg",
    rating: 4,
    price: "₹ 279,999",
  },
  {
    id: 2,
    name: "Sony WH-1000XM4",
    image: "./productPlaceholder1.jpg",
    rating: 4.5,
    price: "₹ 29,999",
  },
  {
    id: 3,
    name: "Bose QuietComfort 35 II",
    image: "./productPlaceholder1.jpg",
    rating: 4.3,
    price: "₹ 34,999",
  },
  {
    id: 4,
    name: "Apple AirPods Pro",
    image: "./productPlaceholder1.jpg",
    rating: 4.7,
    price: "₹ 24,999",
  },
  {
    id: 5,
    name: "Apple AirPods Pro",
    image: "./productPlaceholder1.jpg",
    rating: 4.7,
    price: "₹ 24,999",
  },
  {
    id: 6,
    name: "Apple AirPods Pro",
    image: "./productPlaceholder1.jpg",
    rating: 4.7,
    price: "₹ 24,999",
  },
  {
    id: 7,
    name: "Apple AirPods Pro",
    image: "./productPlaceholder1.jpg",
    rating: 4.7,
    price: "₹ 24,999",
  },
];

const Shop = () => {
  const navigate = useNavigate();
  const handleOnClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="px-24 py-10 w-full">
      <div className="text-2xl font-bold mb-6">Shop</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 justify-between">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer p-2 shadow rounded flex justify-center"
            onClick={() => handleOnClick(product.id)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
