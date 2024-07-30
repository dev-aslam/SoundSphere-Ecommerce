import { useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import TestimonialsCard from "../Shared/TestimonialCard";
import ProductCard from "../Shared/ProductCard";
import "./styles.css";

const ProductDetails = () => {
  const [itemNumber, setItemNumber] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    "/productPlaceholder2.jpg"
  );
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const product = {
    id: 1,
    name: "Astell&Kern - A&ultima",
    image: [
      "/productPlaceholder2.jpg",
      "/productPlaceholder1.jpg",
      "/productPlaceholder3.jpg",
    ],
    rating: 4,
    price: "₹ 279,999",
    description:
      "The FatFreq Scarlet is a hybrid IEM with a driver configuration of 1 Hyper Tweeter, 1 Balanced Armature and 1 Dynamic Driver using Basscannon Technology. It features a 3-way Crossover design, with an impedance of 38Ω and a frequency response range of 20Hz-45kHz. The Hyper Tweeter delivers clarity up to 40kHz, while Bass Cannon Subwoofer technology achieves deep bass of over 30dB, controlled below 200Hz without mid-range bleed.",
  };

  const testimonials = [
    {
      name: "Alex K.",
      review:
        "I've been using the Sennheiser HD 620S headphones for a few weeks now, and I'm incredibly impressed with their performance. The exceptional sound clarity and balanced audio ensure an immersive listening experience, whether I'm working in a noisy environment or streaming high-fidelity music.",
      stars: 5,
      verified: true,
    },
    {
      name: "Jamie L.",
      review:
        "These headphones have redefined how I experience music. The build quality is excellent, and the sound is crystal clear. Worth every penny!",
      stars: 4.5,
      verified: true,
    },
    {
      name: "Taylor M.",
      review:
        "The noise cancellation on these headphones is fantastic. I can listen to my music without any interruptions. Highly recommend!",
      stars: 4,
      verified: true,
    },
    {
      name: "Sam W.",
      review: "Great headphones, but I wish the battery life was a bit longer.",
      stars: 4,
      verified: false,
    },
    {
      name: "Chris P.",
      review: "Comfortable and high-quality sound. I use them daily!",
      stars: 4.5,
      verified: true,
    },
    {
      name: "Morgan S.",
      review: "Good value for the price. The sound quality is decent.",
      stars: 3.5,
      verified: false,
    },
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "Product 1",
      rating: 4,
      image: "/productPlaceholder1.jpg",
      price: "₹ 149,999",
    },
    {
      id: 3,
      name: "Product 2",
      rating: 4,
      image: "/productPlaceholder2.jpg",
      price: "₹ 179,999",
    },
    {
      id: 4,
      name: "Product 3",
      rating: 4,
      image: "/productPlaceholder3.jpg",
      price: "₹ 199,999",
    },
    {
      id: 5,
      name: "Product 4",
      rating: 4,
      image: "/productPlaceholder1.jpg",
      price: "₹ 249,999",
    },
  ];

  const handleIncrement = () => {
    setItemNumber((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (itemNumber > 1) {
      setItemNumber((prev) => prev - 1);
    }
  };

  const handleMouseEnter = () => {
    setZoomVisible(true);
  };

  const handleMouseLeave = () => {
    setZoomVisible(false);
  };

  const handleMouseMove = (e) => {
    const image = e.currentTarget;
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setZoomPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  return (
    <div className="my-16 mx-[100px] flex justify-center items-center flex-col">
      <div className="relative grid md:grid-cols-2 max-w-[1400px] gap-10 mb-[80px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 mt-4">
            {product.image.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-24 border-[2px] rounded-2xl ${
                  img === selectedImage ? "border-blue-500" : "border-white"
                }`}>
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </button>
            ))}
          </div>
          <div
            className="w-auto rounded-3xl h-[530px] relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}>
            <img
              src={selectedImage}
              alt={product.name}
              className="h-full rounded-2xl border"
            />
            <div
              className={`zoomed-image ${zoomVisible ? "visible" : ""}`}
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                top: 0,
                left: "calc(100% + 10px)", // Adjust position as needed
              }}
            />
          </div>
        </div>
        <div>
          <h1 className="text-[48px] font-extrabold mb-3">{product.name}</h1>
          <div className="flex justify-start gap-2 items-center mb-3">
            <Rating
              name="half-rating"
              value={product.rating}
              precision={0.1}
              readOnly
              emptyIcon={<StarIcon style={{ opacity: 0 }} />}
              size="large"
            />
            <span className="text-base">{product.rating}/5</span>
          </div>
          <p className="font-[poppins] text-[#00000099] mb-9">
            {product.description}
          </p>
          <div className="flex items-center justify-end mb-6 h-12">
            <button
              onClick={handleDecrement}
              className="px-4 py-2 bg-gray-200 rounded-l text-xl h-full active:bg-gray-400">
              -
            </button>
            <div className="text-xl bg-gray-200 h-full flex items-center justify-center px-3">
              {itemNumber}
            </div>
            <button
              onClick={handleIncrement}
              className="px-4 py-2 bg-gray-200 rounded-r text-xl h-full active:bg-gray-400">
              +
            </button>
          </div>
          <hr />
          <div className="mt-9 flex justify-between items-center">
            <button className="bg-black border text-white hover:bg-white hover:text-black py-2 px-4 rounded w-[200px] h-[50px]">
              Add to Cart
            </button>
            <button className="bg-[#D3D3D3] border text-black hover:bg-[#ababab] hover:text-black py-2 px-4 rounded w-[200px] h-[50px]">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <div className="mt-[32px] max-w-[1400px] flex justify-between w-full">
        <div className="flex gap-1 items-end">
          <p className="text-2xl font-bold">All reviews</p>
          <p className="text-[#00000099] text-sm">({testimonials.length})</p>
        </div>
        <div>
          <button className="bg-black border text-white hover:bg-white hover:text-black py-2 px-4 rounded w-[200px] h-[50px]">
            Write Review
          </button>
        </div>
      </div>
      <div className="mt-[32px] max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.slice(0, 4).map((testimonial, index) => (
          <TestimonialsCard key={index} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-[32px] max-w-[1400px] flex justify-center">
        <button className="bg-[#D3D3D3] border text-black hover:bg-[#ababab] hover:text-black py-2 px-4 rounded w-[200px] h-[50px]">
          View All Reviews
        </button>
      </div>
      <div className="mt-[32px] max-w-[1400px]">
        <h1 className="text-[48px] font-extrabold mb-20">
          You might also like
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.map((product, index) => (
            <div key={index} className="cursor-pointer">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
