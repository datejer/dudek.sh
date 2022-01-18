import { forwardRef } from "react";
import Image from "next/image";
import { LanyardData } from "react-use-lanyard/dist";
import { getActivityName, getElapsedTime } from "../../../lib/status";

import styles from "./Card.module.scss";

import Spotify from "../../../assets/icons/spotify.svg";

type CardProps = {
  data: LanyardData;
};

const Card = forwardRef<HTMLDivElement, CardProps>(({ data }, ref) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card} ref={ref}>
        {!data.activities.length ? "No activities" : null}
        {data.activities
          .filter((activity) => activity.id !== "spotify:1")
          .reverse()
          .map((activity, index) => (
            <div key={index} className={styles.activity}>
              <h3 className={styles.type}>{getActivityName(activity.type)}</h3>
              <div className={styles.content}>
                <div className={styles.assets}>
                  {activity.assets?.large_image && (
                    <Image
                      src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.large_image}.png`}
                      alt={activity.assets?.large_text}
                      width={60}
                      height={60}
                      className={styles.largeImage}
                    />
                  )}
                  <div className={styles.smallImageWrapper}>
                    {activity.assets?.small_image && (
                      <Image
                        src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.small_image}.png`}
                        alt={activity.assets?.small_text}
                        width={20}
                        height={20}
                        className={styles.smallImage}
                      />
                    )}
                  </div>
                </div>
                <div className={styles.info}>
                  <h4 className={styles.name}>{activity.name}</h4>
                  <div className={styles.details}>{activity.details}</div>
                  <div className={styles.state}>{activity.state}</div>
                  {activity.timestamps?.start && (
                    <div className={styles.elapsed}>
                      {getElapsedTime(activity.timestamps.start)} elapsed
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        {data.spotify && (
          <div className={styles.activity}>
            <h3 className={styles.type}>
              Listening to Spotify <Spotify className={styles.spotify} />
            </h3>
            <div className={styles.content}>
              <div className={styles.assets}>
                <Image
                  src={data.spotify.album_art_url}
                  alt={data.spotify.album}
                  width={60}
                  height={60}
                  className={styles.largeImage}
                />
              </div>
              <div className={styles.info}>
                <h4 className={styles.name}>{data.spotify.song}</h4>
                <div className={styles.details}>by {data.spotify.artist}</div>
                <div className={styles.state}>on {data.spotify.album}</div>
                <div className={styles.elapsed}>
                  {getElapsedTime(data.spotify.timestamps.start)} elapsed
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

Card.displayName = "Card";

export { Card };
