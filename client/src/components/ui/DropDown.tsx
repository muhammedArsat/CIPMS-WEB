import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
}

const Dropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select option",
  error,
  helperText,
  disabled = false,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(o => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="w-full space-y-1 cursor-pointer" ref={ref}    >
      {/* LABEL */}
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* CONTROL */}
      <span
        
       
        onClick={() => setOpen(p => !p)}
        className={cn(
          "w-full flex items-center justify-between px-3 py-1 rounded-full border text-left",
          "focus:outline-none focus:ring-2",
          disabled && "opacity-50 cursor-not-allowed",
          error
            ? "border-danger-light focus:ring-danger-light"
            : "border-border-light dark:border-border-dark focus:ring-primary/30"
        )}
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown size={18} />
      </span>

      {/* OPTIONS */}
      {open && (
        <ul className="absolute z-50 mt-1 right-3 w-37.5 bg-white dark:bg-dark border  border-border-light dark:border-border-dark rounded-md shadow-md max-h-56 overflow-auto">
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={cn(
                "px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800",
                value === option.value && "bg-gray-100 font-medium"
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {/* ERROR / HELPER */}
      {error ? (
        <p className="text-sm text-danger-light">{error}</p>
      ) : (
        helperText && <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Dropdown;
