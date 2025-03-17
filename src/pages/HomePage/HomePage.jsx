import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import Button from "../../components/common/Button/Buttons";
import Icon from "../../components/common/Icon/Icon";
import ScovilleMeter from "../../components/home/ScovilleMeter/ScovilleMeter";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import artisanImage from "../../assets/images/artisan.png";
import { FaArrowCircleDown as Arrow } from "react-icons/fa";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.heroImage}></div>
        <Button
          variant="primary"
          className={styles.actionButton}
          onClick={() => navigate("/shop")}
        >
          BUY NOW
        </Button>
      </section>
      <section className={styles.description}>
        <div>
          <div className={styles.flavorText}>
            <p>
              Crafted for the bold and the fearless, our hot sauces are more
              than just condiments—they’re an experience. Each bottle is packed
              with fire, flavor, and just the right amount of danger. Whether
              you're chasing that slow-building burn or an instant fiery kick,
              we've got the perfect heat for you.
            </p>
            <ul>
              <li>Small batch, big flavor!</li>
              <li>Handcrafted with the finest peppers</li>
              <li>Heat levels for every kind of spice lover</li>
            </ul>
            <h4>Dare to take your taste buds to the next level?</h4>
          </div>
          <Button
            className={styles.actionButton}
            size={"medium"}
            onClick={() => navigate("/shop")}
          >
            VIEW OUR SAUCES
          </Button>
        </div>
        <img src={artisanImage} alt="peppers" />
      </section>
      <section className={styles.scovilleMeter}>
        <ScovilleMeter />
      </section>
      <section className={styles.reviews}>
        <h1>🔥🔥LET THE HEAT FLOW!🔥🔥</h1>
        <Testimonials className={styles.testimonials} />
      </section>
    </div>
  );
}
