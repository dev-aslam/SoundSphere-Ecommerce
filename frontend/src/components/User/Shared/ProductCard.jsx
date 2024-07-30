import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({ product }) => (
  <div className="flex flex-col gap-6">
    <img
      src={product.image}
      alt="productImage"
      className="h-[300px] w-[300px] rounded-3xl"
    />
    <div className="flex flex-col gap-2">
      <div className="font-[poppins] font-medium text-xl">{product.name}</div>
      <div className="flex justify-start gap-2 items-center text-xs">
        <Rating
          name="half-rating"
          value={product.rating}
          precision={0.1}
          readOnly
          emptyIcon={<StarIcon style={{ opacity: 0 }} />}
          size="small"
        />{" "}
        <span>{product.rating}/5</span>
      </div>
      <div>
        <p className="font-[poppins] font-semibold text-2xl">{product.price}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;
