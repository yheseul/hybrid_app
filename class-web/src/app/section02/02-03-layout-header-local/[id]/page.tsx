"use client";

import { Header } from "@/commons/layout/02-03-layout-header-local/header";
import { useEffect, useState } from "react";

export default function LayoutHeaderLocal() {
  const [title, setTitle] = useState("");

  // 3초가 걸려서 id가 boardId인 게시글 조회
  useEffect(() => {
    setTimeout(() => {
      const result = "my contents";
      setTitle(result);
    }, 3000);
  }, []);

  return (
    <div>
      <Header title={title}>
        <button>[ bookMark ]</button>
      </Header>
      <div>contents...</div>
      <div>contents...</div>
      <div>contents...</div>
      <div>contents...</div>
      <div>contents...</div>
      <div>contents...</div>
    </div>
  );
}
