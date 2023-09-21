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
		disabled = false,
		...restProps
	} = props;

	const { href, ...linkProps  } = restProps as LinkProps;

	return (
		!renderAsLink ?
			<button
				{...restProps as ButtonProps}
				className={cx(styles.button, {
					...(className && { [className]: true }),
					...(styles[size] && { [styles[size]]: true }),
					...(styles[variant] && { [styles[variant]]: true }),
					[styles.outline]: outline,
					[styles.disabled]: disabled,
				})}
				onClick={props.onClick}
				disabled={disabled}
			>
				{children}
			</button>
			:
			<a 
				{...linkProps}
				className={cx(styles.link, {
					...(styles[size] && { [styles[size]]: true }),
					...(styles[variant] && { [styles[variant]]: true }),
					[styles.outline]: outline,
					[styles.disabled]: disabled,
				})}
				{...(!disabled && { href })}
				{...(disabled && { "aria-disabled": true })}
				target={props.target}
				role="link"
			>
				{children}
			</a>
	);
};

export default Button;
