export interface ButtonProps  {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "plain";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  children: React.ReactNode;
}

export interface LinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "plain";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  children: React.ReactNode;
}
