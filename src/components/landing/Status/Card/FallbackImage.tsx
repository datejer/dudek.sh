import { Activity } from "react-use-lanyard";
import { Unknown, unknownBase64 } from "../../../../assets/icons/unknown";
import styles from "./Card.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useFallbackIcons } from "../../../../store/fallbackIcons";

export const FallbackImage = ({ gameName }: { gameName: string }) => {
  const { fallbackIcons, addFallbackIcon } = useFallbackIcons();
  const [icon, setIcon] = useState<string | null>(fallbackIcons[gameName] ?? null);

  // This is not a perfect solution.
  // We're manually caching the fetched icons using jotai.
  // Otherwise, it would re-fetch SteamGridDB every time someone opened the status card.
  // Ideally, we could use something like react-query or useSWR.
  // But this is fine for now.
  useEffect(() => {
    const fetchGameIcon = async () => {
      try {
        const response = await fetch(`/api/gameIcon?gameName=${gameName}`);
        const json = await response.json();
        addFallbackIcon(gameName, json.iconURL);
        setIcon(json.iconURL);
      } catch (error) {
        console.error(error);
      }
    };

    if (!icon) {
      fetchGameIcon();
    }
  }, []);

  if (!icon) {
    return (
      <Unknown
        alt={gameName}
        width={60}
        height={60}
        className={styles.largeImage}
        title={gameName}
      />
    );
  }

  return (
    <Image
      src={icon}
      alt={gameName}
      width={60}
      height={60}
      className={styles.largeImage}
      title={gameName}
      priority
      placeholder={unknownBase64}
    />
  );
};
