import React from "react";
import cx from "classnames";
import styles from "./Text.module.css";
import { TextProps } from "./Text.types";


export const Text = ({
	variant = "primary",
	size = "md",
	textAlign,
	children,
	className,
	inline = false,
}: TextProps) => {
	return (
		<p
			className={cx({
				...(className && { [className] : true }),
				...(styles[size] && { [styles[size]]: true }),
				...(styles[variant] && { [styles[variant]]: true }),
				...(textAlign && styles[textAlign]) && { [styles[textAlign]] : true },
				[styles.inline]: inline,
			})}
		>
			{children}
		</p>
	);
};
