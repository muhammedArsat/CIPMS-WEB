import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export const Modal = ({
  open,
  onClose,
  children,
  size = "sm",
}: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/40" />

      {/* MODAL CONTENT */}
      <div
        className={cn(
          "relative z-10 w-full bg-white dark:bg-dark  rounded-lg shadow-lg",
          sizeStyles[size]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
