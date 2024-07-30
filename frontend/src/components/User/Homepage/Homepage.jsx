import "tailwindcss/tailwind.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Shared/ProductCard";
import TestimonialsCard from "../Shared/TestimonialCard";

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

const products = Array.from({ length: 4 }).map((_, idx) => ({
  id: idx,
  name: "Astell&Kern - A&ultima",
  image: "./productPlaceholder2.jpg",
  rating: 4,
  price: "₹ 279,999",
}));

const Homepage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const handleOnClick = () => {
    navigate("/shop");
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        id="banner"
        className="relative h-[650px] flex items-center justify-end">
        <div className="absolute w-full">
          <img
            src="./bannerPlaceholder.png"
            alt="banner"
            className="max-h-[650px] w-full -z-10"
          />
        </div>
        <div className="relative z-10 h-full max-w-[550px] text-white flex flex-col justify-center mr-24 gap-10">
          <h1 className="text-[64px] font-[poppins]">Best Of Headphones</h1>
          <p className="text-[22px] text-[#ffffff99]">
            Browse through our diverse range of meticulously crafted gadgets,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button
            className="h-[52px] max-w-[210px] text-center bg-white rounded-full text-black font-medium hover:bg-[#ffffffe0]"
            onClick={handleOnClick}>
            Shop now
          </button>
        </div>
      </div>

      {/* Product Listing New Arrival */}
      <div
        id="new-arrival"
        className="flex py-14 flex-col px-24 justify-center items-center">
        <h1 className="text-[48px] font-extrabold mb-14 uppercase">
          New Arrival
        </h1>
        <div className="flex gap-4 justify-between mb-9">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div
          className="rounded-full w-[218px] border-black border flex justify-center items-center cursor-pointer hover:bg-black hover:text-white h-[52px]"
          onClick={handleOnClick}>
          View All
        </div>
      </div>

      {/* Product Listing Top Selling */}
      <hr />
      <div
        id="top-selling"
        className="flex py-14 flex-col px-24 justify-center items-center">
        <h1 className="text-[48px] font-extrabold mb-14 uppercase">
          Top Selling
        </h1>
        <div className="flex gap-4 justify-between mb-9">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div
          className="rounded-full w-[218px] border-black border flex justify-center items-center cursor-pointer hover:bg-black hover:text-white h-[52px]"
          onClick={handleOnClick}>
          View All
        </div>
      </div>

      {/* Testimonials */}
      <hr />
      <div className="container mx-auto py-14">
        <div className="flex justify-between items-center">
          <h2 className="text-[48px] font-extrabold mb-14 uppercase">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-2">
            <ArrowBackIcon
              onClick={prevTestimonial}
              className="cursor-pointer"
            />
            <ArrowForwardIcon
              onClick={nextTestimonial}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="relative grid grid-cols-3 items-center justify-center gap-6">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
