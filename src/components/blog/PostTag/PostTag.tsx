import Link from "next/link";
import clsx from "clsx";
import styles from "./PostTag.module.scss";

type PostTagProps = {
  tag: string;
  size?: "compact" | "normal";
  interactive?: boolean;
  asLink?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

export const PostTag = ({
  tag,
  size = "normal",
  interactive,
  asLink = false,
  className,
  ...rest
}: PostTagProps) => {
  const Tag = (
    <li
      {...rest}
      className={clsx(styles.tag, styles[size], interactive && styles.interactive, className)}
    >
      #&nbsp;{tag}
    </li>
  );

  if (asLink) {
    return <Link href={`/blog?t=${tag}`}>{Tag}</Link>;
  }

  return Tag;
};
