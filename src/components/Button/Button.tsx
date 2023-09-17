import React from "react";
import cx from "classnames";
import styles from "./Button.module.css";
import { ButtonProps, LinkProps } from "./Button.types";

const isLink = (props: ButtonProps | LinkProps): props is LinkProps => {
	return (props as LinkProps).href !== undefined;
};  

const Button = (props: ButtonProps | LinkProps) => {
	const renderAsLink = isLink(props);

	const { 
		className, 
		size = "sm", 
		variant = "primary", 
		outline,
		children,
		...restProps
	} = props;

	return (
		!renderAsLink ?
			<button
				{...restProps as ButtonProps}
				className={cx(styles.button, {
					...(className && { [className]: true }),
					...(styles[size] && { [styles[size]]: true }),
					...(styles[variant] && { [styles[variant]]: true }),
					[styles.outline]: outline,
				})}
				onClick={props.onClick}
			>
				{children}
			</button>
			:
			<a 
				{...restProps as LinkProps}
				className={cx(styles.link, {
					...(styles[size] && { [styles[size]]: true }),
					...(styles[variant] && { [styles[variant]]: true }),
					[styles.outline]: outline,
				})}
				href={props.href} 
				target={props.target}>
				{children}
			</a>
	);
};

export default Button;
