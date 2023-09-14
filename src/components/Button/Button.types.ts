export const buttonVariants = [
	"primary",
	"secondary",
	"success",
	"info",
	"warning",
	"danger",
	"plain",
] as const;

export const buttonSizes = [
	"sm",
	"md",
	"lg",
] as const;

export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];

export interface ButtonProps  {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  children: React.ReactNode;
}

export interface LinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  children: React.ReactNode;
}
