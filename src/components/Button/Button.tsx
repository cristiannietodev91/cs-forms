import React from "react";
import cx from "classnames";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.types";

const Button = ({
	children,
	onClick,
	className,
	variant = "primary",
	size = "sm",
	outline = false
}: ButtonProps) => {
	return (
		<button
			className={cx(styles.button, {
				...(className && { [className]: true }),
				...(styles[size] && { [styles[size]]: true }),
				...(styles[variant] && { [styles[variant]]: true }),
				[styles.outline]: outline,
			})}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
