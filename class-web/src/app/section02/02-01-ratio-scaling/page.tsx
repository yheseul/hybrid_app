export default function RatioScaling() {
  // 1. 피그마에 제시된 사이즈가 (360 * 840) 이라고 가정
  // => 하지만, 아래 화면은 비율이 늘어나지 않음
  // return (
  //   <div className="w-screen h-screen bg-red-300">
  //     <div className="w-[300px] h-[400px] bg-emerald-200">box</div>
  //   </div>
  // );

  // 2. 비율 늘리기
  // => px 방식을 rem으로 변경(html 폰트 사이즈에 의존)
  // => 1. html V폰트 사이즈를 화면 사이즈에 비례하도록 변경
  // => 2. 모든 컴포넌트 단위를 rem으로 적용
  return (
    <div className="w-screen h-screen bg-red-300">
      <div className="w-[18.75rem] h-[25rem] bg-emerald-200">box</div>
    </div>
  );
}
