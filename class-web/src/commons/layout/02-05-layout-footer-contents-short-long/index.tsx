import { ReactNode } from "react";
import { HeaderGlobal } from "./header4";

// 글로벌헤더(투명) + 로컬헤더(투명) + 숏컨텐츠푸터 + 롱컨텐츠푸터
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <HeaderGlobal />
      <>{children}</>
    </div>
  );
}
