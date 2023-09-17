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
  /**
   * 
   */
  className?: string;
  /**
   * Option to represent the component with different styles.
   * @default primary
   */
  variant?: ButtonVariant;
  /**
   * Different sizes to represent the button/link component
   * @default sm
   */
  size?: ButtonSize;
  /**
   * When is true it renders the outlined version of the component
   * @default false
   */
  outline?: boolean;
  /**
   * Element to render within the component can be a text or an icon
   */
  children: React.ReactNode;
}

export interface LinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  children: React.ReactNode;
  /**
   * Buttons that have href are represented as &lt;a&gt; links
   */
  href?: string;
}
