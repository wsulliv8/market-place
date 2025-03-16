import { useState } from "react";
import styles from "./InfoPopup.module.css";
import Icon from "../Icon/Icon";
import { FaCircleInfo as info } from "react-icons/fa6";

export default function InfoPopup({
  children,
  fill = "currentColor",
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`${styles.popup} ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <Icon icon={info} size={15} fill={fill} className={styles.icon} />
      {isVisible && (
        <div className={styles.infoPopup}>
          <div className={styles.popupArrow}></div>
          <div className={styles.popupContent}>{children}</div>
        </div>
      )}
    </div>
  );
}
