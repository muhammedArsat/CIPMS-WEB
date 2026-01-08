import { ReactNode } from "react";

export default function ModalBody({ children }: { children: ReactNode }) {
  return <div className="px-4 py-4">{children}</div>;
}
