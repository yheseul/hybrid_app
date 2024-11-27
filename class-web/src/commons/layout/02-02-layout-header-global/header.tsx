"use client";

import { usePathname } from "next/navigation";
import { HEADER } from "./constants";

export default function Header() {
  const pathname = usePathname();

  const options = HEADER.GLOBAL[pathname];

  return (
    <header className="flex flex-row gap-2 w-screen h-12 bg-red-200">
      {options.hasLogo && <div>logo</div>}
      {options.hasBack && <div>[ back ]</div>}
      {options.title ? <div>{options.title}</div> : <></>}
    </header>
  );
}
