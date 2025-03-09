import styles from "./HomePage.module.css";
import Button from "../../components/common/Button/Buttons";
import Icon from "../../components/common/Icon/Icon";
import ScovilleMeter from "../../components/home/ScovilleMeter/ScovilleMeter";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import artisanImage from "../../assets/images/artisan.png";
import { FaArrowCircleDown as Arrow } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.heroImage}></div>
        <Button className={styles.actionButton}>BUY NOW</Button>
        <Icon icon={Arrow} className={styles.scroll} size={30} />
      </section>
      <section className={styles.description}>
        <div>
          <p>
            Crafted for Flavor, Perfected for Heat <br />
            🌿 All-Natural Ingredients <br /> We use only the freshest,
            high-quality peppers, garlic, vinegar, and spices <br /> Just pure,
            bold flavor in every drop. <br />
            🌶 Perfectly Balanced Heat Not just about the burn—our sauces are
            designed to enhance your food, not overpower it.
            <br />
            🏆 Handcrafted in Small Batches
          </p>
          <Button className={styles.actionButton} size={"medium"}>
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
