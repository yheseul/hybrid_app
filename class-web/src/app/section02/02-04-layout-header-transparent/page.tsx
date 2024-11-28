import Link from "next/link";

export default function LayoutHeaderTransparent() {
  return (
    <div>
      <img src="/images/고윤정1.jpg" width={300} />
      <Link href="/section02/02-04-layout-header-untransparent">
        안 투명한 헤더 페이지로 이동
      </Link>
    </div>
  );
}
