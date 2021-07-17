import { ReactNode } from "react";

export default function Grid({ children }: { children: ReactNode }) {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">{children}</div>
    </div>
  );
}
