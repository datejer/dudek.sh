"use client";

import { createRef, useState } from "react";
import { useClickAway } from "react-use";
import { useLanyard } from "react-use-lanyard";
import { Tooltip } from "@/components/common/Tooltip/Tooltip";
import { getStatusColor, getHumanStatus } from "../../../lib/status";
import { Card } from "./Card/Card";
import styles from "./Status.module.scss";

export const Status = () => {
  const lanyard = useLanyard({
    userId: "214651290234388480",
  });
  const [isCardOpen, setIsCardOpen] = useState(false);
  const cardRef = createRef<HTMLDivElement>();

  const handleCardOpen = () => setIsCardOpen(true);
  const handleCardClose = () => setIsCardOpen(false);

  useClickAway(cardRef, () => {
    if (isCardOpen) {
      handleCardClose();
    }
  });

  if (lanyard.isValidating || lanyard.error || lanyard.data?.error || !lanyard.data?.success) {
    return (
      <div className={styles.statusWrapper}>
        <div className={styles.status}>
          <span data-visually-hidden>Could not fetch data.</span>
        </div>
      </div>
    );
  }

  const { data } = lanyard.data;

  return (
    <div className={styles.statusWrapper} onClick={handleCardOpen}>
      <Tooltip delayDuration={100} content={getHumanStatus(data.discord_status)}>
        <div
          className={styles.status}
          style={{ backgroundColor: getStatusColor(data.discord_status) }}
        >
          <span data-visually-hidden>{getHumanStatus(data.discord_status)}</span>
        </div>
      </Tooltip>
      {isCardOpen ? <Card data={data} ref={cardRef} /> : null}
    </div>
  );
};
