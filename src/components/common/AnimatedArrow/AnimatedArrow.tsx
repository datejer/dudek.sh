import React from "react";
import clsx from "clsx";
import styles from "./AnimatedArrow.module.scss";

type AnimatedArrowProps = {
  className?: string;
  color?: string;
};

export const AnimatedArrow = ({ className = "", color = "currentColor" }: AnimatedArrowProps) => {
  return (
    <div className={clsx(styles.animatedArrow, className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrowIcon}
      >
        <g className={styles.arrowHead}>
          <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke={color} strokeWidth="1" />
        </g>
        <g className={styles.arrowBody}>
          <path d="M3.5 4.5H0" stroke={color} strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};
