import bell from "../../../assets/images/bell.png";
import poblano from "../../../assets/images/poblano.png";
import jalapeno from "../../../assets/images/jalapeno.png";
import serrano from "../../../assets/images/serrano.png";
import habanero from "../../../assets/images/habanero.png";
import ghost from "../../../assets/images/ghost.png";
import reaper from "../../../assets/images/reaper.png";
import pepperx from "../../../assets/images/pepperx.png";
import styles from "./ScovilleMeter.module.css";

export default function PepperScoville({ scoville }) {
  const getPepper = (scoville) => {
    return scoville < 1000
      ? { img: bell, name: "Bell Pepper" }
      : scoville < 5000
      ? { img: poblano, name: "Poblano" }
      : scoville < 15000
      ? { img: jalapeno, name: "Jalapeno" }
      : scoville < 50000
      ? { img: serrano, name: "Serrano" }
      : scoville < 350000
      ? { img: habanero, name: "Habanero" }
      : scoville < 550000
      ? { img: ghost, name: "Ghost" }
      : scoville < 750000
      ? { img: reaper, name: "Carolina Reaper" }
      : { img: pepperx, name: "Pepper X" };
  };

  const { img, name } = getPepper(scoville);

  return (
    <span className={styles.pepper}>
      <img src={img} alt="pepper" />
      <p>{name}</p>
    </span>
  );
}
