"use client";

import Footer from "@/commons/layout/02-05-layout-footer-contents-short-long/footer";
import { useState } from "react";

export default function LayoutFooterContentsShortLong() {
  const [isLongContents, setIsLongContents] = useState(false);

  const onClickToggle = () => {
    setIsLongContents((prev) => !prev);
  };

  return (
    <>
      <main>
        <button onClick={onClickToggle}>[ short / long ]</button>
        <br />
        title: <input type="text" />
        <br />
        contents: <input type="text" />
        <br />
        writer: <input type="text" />
        <br />
        {isLongContents &&
          new Array(10).fill(0).map(() => (
            <>
              title: <input type="text" />
              <br />
              contents: <input type="text" />
              <br />
              writer: <input type="text" />
              <br />
            </>
          ))}
      </main>
      <Footer>
        <button>register</button>
      </Footer>
    </>
  );
}
