"use client";

import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Tilt from "react-parallax-tilt";
import { useTheme } from "next-themes";
import { usePinned } from "../../../lib/api";
import styles from "./PinnedRepos.module.scss";

const MAX_PLACEHOLDER_NUM = 100;

export const PinnedRepos = () => {
  const { pinned } = usePinned("datejer");
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    theme && setCurrentTheme(theme);

    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, [theme]);

  return (
    <ul className={styles.pinned}>
      <SkeletonTheme
        baseColor={currentTheme === "dark" ? "#202020" : ""}
        highlightColor={currentTheme === "dark" ? "#444" : ""}
      >
        {pinned.map((repo, index) => (
          <li key={repo.repo || index} className={styles.repoWrapper}>
            <Tilt tiltEnable={hasHover} style={{ height: "100%" }}>
              <a href={repo.link}>
                <div className={styles.repo} style={{ borderColor: repo.color }}>
                  <h2 className={styles.repoName}>
                    {repo.repo ? `${repo.owner}/${repo.repo}` : <Skeleton />}
                  </h2>

                  <p className={styles.repoDescription}>
                    {repo.description || <Skeleton count={2} />}
                  </p>
                  <div className={styles.repoStats}>
                    <div>
                      <span data-visually-hidden>
                        Repository stars: {repo.stars !== undefined ? repo.stars : "Loading..."}
                      </span>
                      <span aria-hidden="true">
                        ⭐{" "}
                        {repo.stars !== undefined ? (
                          repo.stars
                        ) : (
                          <span className={styles.placeholderNumber} suppressHydrationWarning>
                            {Math.floor(Math.random() * MAX_PLACEHOLDER_NUM)}
                          </span>
                        )}
                      </span>
                    </div>
                    <div>
                      <span data-visually-hidden>
                        Repository forks: {repo.forks !== undefined ? repo.forks : "Loading..."}
                      </span>
                      <span aria-hidden="true">
                        🍴{" "}
                        {repo.forks !== undefined ? (
                          repo.forks
                        ) : (
                          <span className={styles.placeholderNumber} suppressHydrationWarning>
                            {Math.floor(Math.random() * MAX_PLACEHOLDER_NUM)}
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
          </li>
        ))}
      </SkeletonTheme>
    </ul>
  );
};
