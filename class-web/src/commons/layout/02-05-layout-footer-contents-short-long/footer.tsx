import { ReactNode } from "react";

export default function Footer({ children }: { children: ReactNode }) {
  return (
    <>
    {/* 숏컨텐츠면 부모 사이즈에 맞에 최대로 늘리기 */}
    {/* 롱컨텐츠라면 부모 사이즈를 넘어섰으므로 무시 */}
      <div className="flex-1"></div>
      <footer className="h-[3.125rem] w-screen bg-sky-200">{children}</footer>
    </>
  );
}
