import React from "react";
import cx from "classnames";
import styles from "./Button.module.css";
import { ButtonProps, LinkProps } from "./Button.types";

const isLink = (props: ButtonProps | LinkProps): props is LinkProps => {
	return (props as LinkProps).href !== undefined;
};

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps | LinkProps>(function Button(props, ref) {
	const renderAsLink = isLink(props);

	const { 
		className, 
		size = "sm", 
		variant = "primary", 
		outline,
		children,
		disabled = false,
		isCustom = false,
		...restProps
	} = props;

	const { href, ...linkProps  } = restProps as LinkProps;

	return (
		!renderAsLink ?
			<button
				{...restProps as ButtonProps}
				className={cx({
					[styles.button]: !isCustom,
					...(className && { [className]: true }),
					...(styles[size] && { [styles[size]]: true && !isCustom }),
					...(styles[variant] && { [styles[variant]]: true && !isCustom }),
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
				className={cx({
					[styles.link]: !isCustom,
					...(className && { [className]: true }),
					...(styles[size] && { [styles[size]]: true && !isCustom }),
					...(styles[variant] && { [styles[variant]]: true && !isCustom }),
					[styles.outline]: outline,
					[styles.disabled]: disabled,
				})}
				{...(!disabled && { href })}
				{...(disabled && { "aria-disabled": true })}
				onClick={props.onClick}
				target={props.target}
				role="link"
				ref={ref}
			>
				{children}
			</a>
	);
});
