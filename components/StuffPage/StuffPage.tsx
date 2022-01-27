import clsx from "clsx";
import { SEO } from "../SEO";
import { PinnedRepos } from "../PinnedRepos/PinnedRepos";
import { Projects } from "../Projects/Projects";
import { Technologies } from "../Technologies/Technologies";

import styles from "./StuffPage.module.scss";

import Require from "../../assets/icons/require.svg";

export function StuffPage() {
  return (
    <div>
      <SEO title="stuff" description="stuff i made." />
      <a href="https://require.podcast.gq">
        <div className={clsx(styles.project, styles.require)}>
          <div>
            <h2 className={styles.projectName}>Require Podcast</h2>
            <p className={styles.projectDesc}>
              Polski podcast na temat JavaScriptu i nie tylko. "Na luzie" o technologiach
              frontendowych, przez nowości ze świata IT, po frameworki na backendzie!
            </p>
          </div>
          <div>
            <Require />
          </div>
        </div>
      </a>
      <div>
        <h2 className={styles.title}>stuff i know.</h2>
        <Technologies />
      </div>
      <div>
        <h2 className={styles.title}>stuff i pinned.</h2>
        <PinnedRepos />
      </div>
      <div>
        <h2 className={styles.title}>stuff i made.</h2>
        <Projects />
      </div>
    </div>
  );
}
