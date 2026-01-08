import { cn } from "../../utils/cn";
import { ButtonHTMLAttributes, Children } from "react";

type ButtonVariant = "primary" | "success" | "danger" | "warning";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;

}

const baseStyle =
  "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyle: Record<ButtonVariant, string> = {
  primary: "bg-primary dark:bg-primary-dark text-white hover:bg-primary/90 focus:ring-violet-600",
  success:
    "bg-success-light dark:bg-success-dark text-white hover:bg-green-700 focus:ring-green-600",
  danger:
    "bg-danger-light dark:bg-danger-dark text-white hover:bg-red-700 focus:ring-red-600",
  warning:
    "bg-warning-light dark:bg-warning-dark text-black hover:bg-yellow-600 focus:ring-yellow-500",
};

const sizeStyle: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  variant = "primary",
  fullWidth = false,
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        baseStyle,
        variantStyle[variant],
        sizeStyle[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
     
    >
      {children}
    </button>
  );
};

export default Button;
