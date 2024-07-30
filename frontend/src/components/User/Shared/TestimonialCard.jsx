import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TestimonialsCard = ({ testimonial }) => (
  <div className="p-8 rounded-2xl border border-gray-400 h-[290px]">
    <div className="mb-4">
      <Rating
        name="half-rating"
        value={testimonial.stars}
        precision={0.2}
        readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
      />
    </div>
    <div className="mb-3 flex gap-1">
      <h1 className="font-[poppins] text-xl">{testimonial.name}</h1>
      {testimonial.verified && <CheckCircleIcon sx={{ color: "green" }} />}
    </div>
    <div className="font-[poppins] text-[#00000099]">{testimonial.review}</div>
  </div>
);

export default TestimonialsCard;
