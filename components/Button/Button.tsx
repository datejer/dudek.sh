import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = React.HTMLAttributes<HTMLAnchorElement> & {
	children?: React.ReactNode;
	onClick?: () => void;
	href?: string;
};

const Button = React.forwardRef<any, ButtonProps>((props, ref) => {
	const { onClick, href, children }: ButtonProps = props;

	return (
		<a
			href={href}
			onClick={onClick}
			ref={ref}
			className={styles.button}
			{...props}
		>
			{children}
		</a>
	);
});

export default Button;
