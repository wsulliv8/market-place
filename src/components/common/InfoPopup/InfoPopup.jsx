import { useState } from "react";
import styles from "./InfoPopup.module.css";
import Icon from "../Icon/Icon";
import { FaCircleInfo as info } from "react-icons/fa6";

export default function InfoPopup({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.popup}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlue={() => setIsVisible(false)}
    >
      <Icon icon={info} size={15} className={styles.icon} />
      {isVisible && (
        <div className={styles.infoPopup}>
          <div className={styles.popupArrow}></div>
          <div className={styles.popupContent}>{children}</div>
        </div>
      )}
    </div>
  );
}
