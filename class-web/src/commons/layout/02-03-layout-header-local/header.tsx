"use client";

import { useParams, usePathname } from "next/navigation";
import { HEADER } from "./constant2";

// 1. 베이스 헤더
const HeaderBase = ({ children, hasLogo, hasBack, title }) => {
  return (
    <header className="flex flex-row gap-2 w-screen h-12 bg-red-200">
      {hasLogo && <div>logo</div>}
      {hasBack && <div>[ back ]</div>}
      {title ? <div>{title}</div> : <></>}
      {children ? <>{children}</> : <></>}
    </header>
  );
};

// 2. 글로벌 헤더
export function HeaderGlobal() {
  const pathname = usePathname();
  const prams = useParams();
  const options = HEADER(prams).GLOBAL[pathname];

  return (
    <div className={`${options ? "block" : "hidden"}`}>
      <HeaderBase {...options} />
    </div>
  );
}

// 3. 로컬 헤더
export function Header({ children, ...rest }) {
  const pathname = usePathname();
  const prams = useParams();
  const options = HEADER(prams).LOCAL[pathname];

  return (
    <div className={`${options ? "block" : "hidden"}`}>
      <HeaderBase {...rest} {...options}>
        {children}
      </HeaderBase>
    </div>
  );
}
