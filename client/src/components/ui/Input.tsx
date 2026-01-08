import { InputHTMLAttributes, ReactNode, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../utils/cn";

type InputVariant = "outlined" | "underline";
type InputSize = "sm" | "md" | "lg";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  icon?: ReactNode;
  error?: string;
  helperText?: string;
  variant?: InputVariant;
  inputSize?: InputSize;
}

const baseInput =
  "w-full bg-transparent outline-none outline-primary disabled:opacity-50 disabled:cursor-not-allowed";

const sizeStyles: Record<InputSize, string> = {
  sm: "text-sm py-2",
  md: "text-md py-2.5",
  lg: "text-lg py-3",
};

const Input = ({
  label,
  icon,
  error,
  helperText,
  variant = "outlined",
  inputSize = "md",
  type = "text",
  id,
  className,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full space-y-1">
      {/* LABEL (TOP) */}
      {label && (
        <label htmlFor={id} className={cn(sizeStyles[inputSize])}>
          {label}
        </label>
      )}

      {/* INPUT WRAPPER */}
      <div
        className={cn(
          "relative flex items-center",
          variant === "outlined" && "border rounded-md focus-within:ring-2",
          variant === "underline" &&
            "border-b focus-within:border-primary-light",
          error
            ? "border-danger-light focus-within:ring-danger-light"
            : "border-gray-300 focus-within:border-primary-light focus-within:ring-primary-light/30"
        )}
      >
        {/* LEFT ICON */}
        {icon && <span className="pl-3 ">{icon}</span>}

        {/* INPUT */}
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          className={cn(
            baseInput,
            sizeStyles[inputSize],
             "pl-3",
            isPassword ? "pr-10" : "pr-3",
            className
          )}
          {...props}
        />

        {/* PASSWORD TOGGLE */}
        {isPassword && (
          <span
            
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        )}
      </div>

      {/* HELPER / ERROR */}
      {error ? (
        <p className="text-sm text-danger-light">{error}</p>
      ) : (
        helperText && <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
