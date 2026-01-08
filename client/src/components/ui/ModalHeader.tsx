import { ReactNode } from "react";

export default function ModalHeader({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 py-3 border-b border-border-light dark:border-border-dark font-semibold">
      {children}
    </div>
  );
}
