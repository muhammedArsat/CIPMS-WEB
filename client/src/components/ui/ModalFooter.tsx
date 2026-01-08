import { ReactNode } from "react";

export default function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 py-3 flex justify-end gap-2">
      {children}
    </div>
  );
}
