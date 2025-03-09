import testimonials from "../../../data/testimonials";
import styles from "./Testimonials.module.css";
import formatDate from "../../../utils/formatDate";
import { FaRegStar as emptyStar } from "react-icons/fa6";
import { FaRegStarHalfStroke as halfStar } from "react-icons/fa6";
import { FaStar as star } from "react-icons/fa6";
import Icon from "../../common/Icon/Icon";

export default function Testimonials() {
  const getRandom = () => {
    return Math.floor(Math.random() * (10 - -10 + 1)) - 10;
  };

  return (
    <>
      {testimonials.map((testimonial) => (
        <div
          className={styles.testimonial}
          style={{ transform: `rotate(${getRandom()}deg)` }}
        >
          <div>
            <Rating rating={testimonial.rating} />
            <p>{formatDate(testimonial.date)}</p>
          </div>
          <p>{testimonial.testimonial}</p>
          <h4>{testimonial.name}</h4>
        </div>
      ))}
    </>
  );
}

const Rating = (rating) => {
  const stars = Array(5).fill(0);

  return (
    <div className={styles.rating}>
      {stars.map((_, index) => {
        const starValue = index + 1;
        if (starValue <= rating.rating)
          return (
            <Icon key={index} icon={star} fill="gold" className={styles.star} />
          );
        else if (starValue - 0.5 == rating.rating)
          return (
            <Icon
              key={index}
              fill="gold"
              icon={halfStar}
              className={styles.star}
            />
          );
        else
          return (
            <Icon
              key={index}
              fill="gold"
              icon={emptyStar}
              className={styles.star}
            />
          );
      })}
    </div>
  );
};
