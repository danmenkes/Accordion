import { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./StarRating.css";

type Props = {
  numberOfStars?: number;
};
const StarRating = ({ numberOfStars = 5 }: Props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = [...Array(numberOfStars)];

  const handleClick = (index: number) => {
    setRating(index);
  };

  const handelMouseEnter = (index: number) => {
    setHover(index);
  };

  const handelMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {stars.map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handelMouseEnter(index)}
            onMouseLeave={handelMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
