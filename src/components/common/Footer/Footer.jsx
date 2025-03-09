import styles from "./Footer.module.css";
import Button from "../Button/Buttons";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";
import { FaInstagram as insta } from "react-icons/fa6";
import { FaSquareYoutube as youtube } from "react-icons/fa6";
import { FaSquareXTwitter as twitter } from "react-icons/fa6";
import { FaFacebook as facebook } from "react-icons/fa6";
import { FaLinkedin as linkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className={styles.memberStrip}>
        <h2>Join the Club!</h2>
        <div>
          <p>
            <i>10% Off Next Order</i>
          </p>
          <form action="" className={styles.subscribe}>
            <input type="email" id="email" name="email" placeholder="Email" />
            <Button type="submit" size="small">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.footerData}>
        <div>
          <h1>Demon</h1>
          <h2>Hot Sauce</h2>
          <div className={styles.socialMedia}>
            <Icon icon={insta} size={25} />
            <Icon icon={youtube} size={25} />
            <Icon icon={twitter} size={25} />
            <Icon icon={facebook} size={25} />
            <Icon icon={youtube} size={25} />
            <Icon icon={linkedin} size={25} />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/shop"}>SHOP</NavLink>
            <NavLink to={"/about"}>ABOUT</NavLink>
          </div>
          <div>
            <NavLink to={"/"}>CONTACT</NavLink>
            <NavLink to={"/shop"}>TERMS</NavLink>
            <NavLink to={"/about"}>PRIVACY</NavLink>
          </div>
          <div>
            <NavLink to={"/"}>FAQ</NavLink>
            <NavLink to={"/shop"}>GAMES</NavLink>
            <NavLink to={"/about"}>LEARN</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
