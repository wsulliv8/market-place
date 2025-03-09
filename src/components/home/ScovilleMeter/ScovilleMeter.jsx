import { useEffect, useState } from "react";
import PepperScoville from "./PepperScoville";
import styles from "./ScovilleMeter.module.css";
import Button from "../../common/Button/Buttons";
import Icon from "../../common/Icon/Icon";
import InfoPopup from "../../common/InfoPopup/InfoPopup";

export default function ScovilleMeter() {
  const [scoville, setScoville] = useState(0);
  const [calculatedScoville, setCalculatedScoville] = useState(0);
  const MAX = 1000000;

  const heatColors = {
    0: styles.green1,
    1000: styles.green2,
    5000: styles.green2,
    15000: styles.yellow1,
    50000: styles.yellow2,
    100000: styles.orange1,
    200000: styles.orange2,
    350000: styles.orange2,
    550000: styles.red1,
    750000: styles.red2,
    900000: styles.black,
  };

  const handleChange = (scoville) => {
    setScoville(scoville);
    setCalculatedScoville(Math.round(Math.pow(scoville / 100, 3) * MAX));
  };

  const getColor = (scoville) => {
    const thresholds = Object.keys(heatColors)
      .map(Number)
      .sort((a, b) => a - b);
    let currentThreshold = 0;

    for (const threhold of thresholds) {
      if (scoville >= threhold) currentThreshold = threhold;
      else break;
    }

    return heatColors[currentThreshold];
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>
        <h2>Scoville Meter</h2>
        <InfoPopup>
          <p>
            The Scoville Scale measures the spiciness of chili peppers and other
            spicy foods.
          </p>
          <br />
          <p>
            It quantifies spiciness by measuring the concentration of
            capsaicinoids, with values ranging from 0 (Bell Peppers) to over
            2,000,000 (Carolina Reaper).
          </p>
        </InfoPopup>
      </span>
      <div className={styles.meterContainer}>
        <div className={styles.labels}>
          <span>0 SHU</span>
          <span>{parseInt(calculatedScoville).toLocaleString()} SHU</span>
          <span>> 1 Million SHU</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={getColor(calculatedScoville)}
            style={{ width: `${scoville}%` }}
          ></div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={scoville}
          onChange={(e) => handleChange(e.target.value)}
          className={styles.scovilleRange}
        />
      </div>
      <div className={styles.pepperContainer}>
        <span>
          <h2>Heat Level: </h2>
          <PepperScoville scoville={calculatedScoville} />
        </span>
        <Button className={getColor(calculatedScoville)}>Find Sauces!</Button>
      </div>
    </div>
  );
}

const Information = () => {
  return <div className={styles.information}></div>;
};
