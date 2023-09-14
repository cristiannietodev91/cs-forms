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

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  children: React.ReactNode;
}

export interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  children: React.ReactNode;
}
