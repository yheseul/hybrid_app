import { ReactNode } from "react";
import { HeaderGlobal } from "./header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeaderGlobal />
      <>{children}</>
    </div>
  );
}
