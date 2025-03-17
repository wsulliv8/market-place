import styles from "./AboutPage.module.css";
import { faqItems } from "../../data/FAQ";
import { useState } from "react";
import { FaPlus as plus } from "react-icons/fa";
import { FaMinus as minus } from "react-icons/fa";
import Icon from "../../components/common/Icon/Icon";
import happySlab from "../../assets/images/happySlab.webp";
import sadSlab from "../../assets/images/sadSlab.webp";

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={styles.aboutPage}>
      <div className={styles.summary}>
        <h3>Put some hot sauce on it!</h3>
        <p>
          At Demon, we believe that hot sauce should be more than just heat—it
          should be an experience. Our mission is to craft bold, flavorful
          sauces that ignite your taste buds and elevate every meal. Whether
          you're drizzling, dipping, or marinating, our handcrafted blends bring
          the perfect kick to your favorite foods. <br />
          <br />
          Join us on a journey of spice, where every bottle tells a story, and
          every drop brings the heat. Are you ready to turn up the flavor?
        </p>
      </div>
      <div className={styles.founderInfo}>
        <div>
          <h2>Meet Slab!</h2>
          <p>
            Some people run from the heat. Slab was born in it. Raised on fiery
            flavors and bold spices, Slab never saw hot sauce as just a
            condiment—it was a way of life. What started as an obsession in his
            kitchen, mixing peppers until he found the perfect balance of heat
            and flavor, soon became something bigger. Slab Hot Sauce was born
            from a simple mission: to create sauces that don’t just burn, but
            actually taste amazing. <br />
            <br /> Every bottle is a reflection of Slab’s relentless pursuit of
            the perfect kick—handcrafted, full of real ingredients, and designed
            to elevate anything you put it on. From smoky and rich to
            face-melting fire, Slab has a sauce for every level of heat-seeker.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={happySlab} alt="" />
          <img src={sadSlab} alt="" />
        </div>
      </div>
      <div className={styles.faqContainer}>
        <h1>FAQ</h1>
        <div className={styles.faqList}>
          {faqItems.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <h4>{faq.question}</h4>
                <Icon icon={activeIndex === index ? minus : plus} size={15} />
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <span>{faq.answer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
