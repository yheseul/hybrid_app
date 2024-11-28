import { ReactNode } from "react";
import { HeaderGlobal } from "./header3";

// 글로벌헤더(투명) + 로컬헤더(투명)
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeaderGlobal />
      <>{children}</>
    </div>
  );
}
