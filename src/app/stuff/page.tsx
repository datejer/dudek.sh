import { Metadata } from "next";
import clsx from "clsx";
import { getMetadata } from "@/app/metadata";
import { Require } from "@/assets/icons/logos/Require";
import { PinnedRepos } from "../../components/stuff/PinnedRepos/PinnedRepos";
import { Projects } from "../../components/stuff/Projects/Projects";
import { Technologies } from "../../components/stuff/Technologies/Technologies";
import styles from "./page.module.scss";

export const metadata: Metadata = getMetadata({
  title: "stuff",
  description: "stuff i made.",
});

export default function Page() {
  return (
    <div>
      <a href="https://require.pl">
        <div className={clsx(styles.project, styles.require)}>
          <div>
            <h2 className={styles.projectName}>Require Podcast</h2>
            <p className={styles.projectDesc}>
              Polski podcast na temat JavaScriptu i nie tylko. &quot;Na luzie&quot; o technologiach
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
