export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  children: React.ReactNode;
}
