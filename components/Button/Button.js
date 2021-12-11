import React from 'react';
import styles from './Button.module.scss';

const Button = React.forwardRef((props, ref) => {
	const { onClick, href, children } = props;

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
