const color = "#c517f0";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-20 h-20">
        <div
          className="absolute top-1/2 w-3.5 h-3.5 rounded-full"
          style={{
            backgroundColor: color,
            left: "8px",
            animation: "flip1 0.6s infinite",
          }}
        ></div>
        <div
          className="absolute top-1/2 w-3.5 h-3.5 rounded-full"
          style={{
            backgroundColor: color,
            left: "8px",
            animation: "flip2 0.6s infinite",
          }}
        ></div>
        <div
          className="absolute top-1/2 w-3.5 h-3.5 rounded-full"
          style={{
            backgroundColor: color,
            left: "32px",
            animation: "flip2 0.6s infinite",
          }}
        ></div>
        <div
          className="absolute top-1/2 w-3.5 h-3.5 rounded-full"
          style={{
            backgroundColor: color,
            left: "56px",
            animation: "flip3 0.6s infinite",
          }}
        ></div>
      </div>
    </div>
  );
}
