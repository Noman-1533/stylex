import { ShimmerDiv, ShimmerText, ShimmerTitle } from "shimmer-effects-react";
const width = "w-48 md:w-60 lg:w-72";
const height = "h-48 md:h-60 lg:h-72";
export default function ShimmerPageLoader() {
  const dummy = new Array(30).fill(0);
  return (
    <div className="flex flex-row flex-wrap">
      {dummy.map((item, index) => {
        return (
          <div key={`${item}-${index}`}>
            <ShimmerCardLoader />
          </div>
        );
      })}
    </div>
  );
}
export function ShimmerImageLoader() {
  return (
    <>
      <div className={`${height} ${width}`}>
        <ShimmerDiv mode="light" height="100%" width="100%" />
      </div>
    </>
  );
}

export function ShimmerContentLoader() {
  return (
    <>
      <div className={`${width}`}>
        <ShimmerTitle mode="light" line={1} gap={8} />
        <ShimmerText mode="light" line={3} gap={6} />
      </div>
    </>
  );
}

export function ShimmerCardLoader() {
  return (
    <>
      <div className={`${width} ${height} flex flex-col`}>
        <ShimmerImageLoader />
        <ShimmerContentLoader />
      </div>
    </>
  );
}
