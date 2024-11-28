"use client";

import { useParams, usePathname } from "next/navigation";
import { HEADER } from "./constants4";

// 1. 베이스 헤더
const HeaderBase = ({ children, hasLogo, hasBack, title, isTransparent }) => {
  return (
    <>
      {/*fixed
        1. 투명한 영역 아래에 사진, 지도 등이 보이기
        2. 게시글 등록 등 헤더 아래로 스크롤하기
        z-50: position으로ㅓ 쌓임 맥락을 형성한 다른 컨텐츠가 있더라도, 위로 올림 */}
      <header
        className={`flex flex-row gap-2 w-screen h-[3.125rem] bg-red-200 fixed z-50 ${
          isTransparent ? "bg-transparent" : "bg-green-300"
        }`}
      >
        {hasLogo && <div>logo</div>}
        {hasBack && <div>[ back ]</div>}
        {title ? <div>{title}</div> : <></>}
        {children ? <>{children}</> : <></>}
      </header>
      {/* 하단 레이어 */}
      {isTransparent ? <></> : <div className="h-[3.125rem]"></div>}
    </>
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
