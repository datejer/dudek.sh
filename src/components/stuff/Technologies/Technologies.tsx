import clsx from "clsx";

import styles from "./Technologies.module.scss";
import { JavaScript } from "@/assets/icons/logos/JavaScript";
import { TypeScript } from "@/assets/icons/logos/TypeScript";
import { Node } from "@/assets/icons/logos/Node";
import { React } from "@/assets/icons/logos/React";
import { Next } from "@/assets/icons/logos/Next";
import { Gatsby } from "@/assets/icons/logos/Gatsby";
import { Vue } from "@/assets/icons/logos/Vue";
import { Sass } from "@/assets/icons/logos/Sass";
import { StyledComponents } from "@/assets/icons/logos/StyledComponents";
import { MongoDB } from "@/assets/icons/logos/MongoDB";
import { PostgreSQL } from "@/assets/icons/logos/PostgreSQL";
import { GraphQL } from "@/assets/icons/logos/GraphQL";
import { ApolloGraphQL } from "@/assets/icons/logos/ApolloGraphQL";
import { Discord } from "@/assets/icons/logos/Discord";
import { Git } from "@/assets/icons/logos/Git";
import { Yarn } from "@/assets/icons/logos/Yarn";
import { Vercel } from "@/assets/icons/logos/Vercel";
import { Netlify } from "@/assets/icons/logos/Netlify";
import { Pug } from "@/assets/icons/logos/Pug";

export const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        className={clsx(styles.tech, styles.js)}
      >
        <span data-visually-hidden>JavaScript</span>
        <span aria-hidden="true">
          <JavaScript />
        </span>
      </a>
      <a href="https://www.typescriptlang.org/" className={clsx(styles.tech, styles.ts)}>
        <span data-visually-hidden>TypeScript</span>
        <span aria-hidden="true">
          <TypeScript />
        </span>
      </a>
      <a href="https://nodejs.org/" className={clsx(styles.tech, styles.node)}>
        <span data-visually-hidden>Node.js</span>
        <span aria-hidden="true">
          <Node />
        </span>
      </a>
      <a href="https://reactjs.org/" className={clsx(styles.tech, styles.react)}>
        <span data-visually-hidden>React.js</span>
        <span aria-hidden="true">
          <React />
        </span>
      </a>
      <a href="https://nextjs.org/" className={clsx(styles.tech, styles.next)}>
        <span data-visually-hidden>Next.js</span>
        <span aria-hidden="true">
          <Next />
        </span>
      </a>
      <a href="https://gatsbyjs.org/" className={clsx(styles.tech, styles.gatsby)}>
        <span data-visually-hidden>Gatsby.js</span>
        <span aria-hidden="true">
          <Gatsby />
        </span>
      </a>
      <a href="https://vuejs.org/" className={clsx(styles.tech, styles.vue)}>
        <span data-visually-hidden>Vue.js</span>
        <span aria-hidden="true">
          <Vue />
        </span>
      </a>
      <a href="https://sass-lang.com/" className={clsx(styles.tech, styles.sass)}>
        <span data-visually-hidden>Sass and SCSS</span>
        <span aria-hidden="true">
          <Sass />
        </span>
      </a>
      <a href="https://styled-components.com/" className={clsx(styles.tech, styles.sc)}>
        <span data-visually-hidden>Styled Components</span>
        <span aria-hidden="true">
          <StyledComponents />
        </span>
      </a>
      <a href="https://www.mongodb.com/" className={clsx(styles.tech, styles.mongo)}>
        <span data-visually-hidden>MongoDB</span>
        <span aria-hidden="true">
          <MongoDB />
        </span>
      </a>
      <a href="https://www.postgresql.org/" className={clsx(styles.tech, styles.postgres)}>
        <span data-visually-hidden>PostgreSQL</span>
        <span aria-hidden="true">
          <PostgreSQL />
        </span>
      </a>
      <a href="https://graphql.org/" className={clsx(styles.tech, styles.graphql)}>
        <span data-visually-hidden>GraphQL</span>
        <span aria-hidden="true">
          <GraphQL />
        </span>
      </a>
      <a
        href="https://www.apollographql.com/docs/react/"
        className={clsx(styles.tech, styles.apollo)}
      >
        <span data-visually-hidden>Apollo Client</span>
        <span aria-hidden="true">
          <ApolloGraphQL />
        </span>
      </a>
      <a href="https://discord.js.org/" className={clsx(styles.tech, styles.discord)}>
        <span data-visually-hidden>Discord.js</span>
        <span aria-hidden="true">
          <Discord />
        </span>
      </a>
      <a href="https://git-scm.com/" className={clsx(styles.tech, styles.git)}>
        <span data-visually-hidden>Git Version Control</span>
        <span aria-hidden="true">
          <Git />
        </span>
      </a>
      <a href="https://yarnpkg.com/" className={clsx(styles.tech, styles.yarn)}>
        <span data-visually-hidden>Yarn</span>
        <span aria-hidden="true">
          <Yarn />
        </span>
      </a>
      <a href="https://vercel.com/" className={clsx(styles.tech, styles.vercel)}>
        <span data-visually-hidden>Vercel</span>
        <span aria-hidden="true">
          <Vercel />
        </span>
      </a>
      <a href="https://netlify.com/" className={clsx(styles.tech, styles.netlify)}>
        <span data-visually-hidden>Netlify</span>
        <span aria-hidden="true">
          <Netlify />
        </span>
      </a>
      <a href="https://pugjs.org/" className={clsx(styles.tech, styles.pug)}>
        <span data-visually-hidden>Pug</span>
        <span aria-hidden="true">
          <Pug />
        </span>
      </a>
    </div>
  );
};
