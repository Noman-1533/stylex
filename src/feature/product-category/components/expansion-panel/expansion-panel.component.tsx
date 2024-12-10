import { useState, useRef } from "react";
import { ExpansionPanelProps } from "../../models";

export default function ExpansionPanel({
  panelName,
  panelNameStyle,
  toggleIcon,
  nonToggleIcon,
  children,
}: ExpansionPanelProps) {
  const [toggle, setToggle] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null); // Reference to the content div

  return (
    <div className="w-full md:w-60 rounded-xl flex flex-col gap-4">
      <span
        className={`flex items-end px-2 justify-between  ${
          panelNameStyle ? panelName : "text-xl font-bold"
        } cursor-pointer`}
        onClick={() => setToggle(!toggle)}
      >
        <h1 className="">{panelName}</h1>
        {!toggle && nonToggleIcon}
        {toggle && toggleIcon}
      </span>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          toggle ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }  mx-2`}
        style={{
          height: toggle
            ? contentRef.current?.scrollHeight
              ? `${contentRef.current.scrollHeight}px`
              : "auto"
            : 0,
        }}
      >
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}
