import { useState, useRef, ReactNode } from "react";

export default function ExpansionPanel({
  toggleIcon,
  nonToggleIcon,
}: {
  toggleIcon: ReactNode;
  nonToggleIcon: ReactNode;
}) {
  const [toggle, setToggle] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null); // Reference to the content div

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="w-full md:w-60 rounded-xl flex flex-col "
    >
      <span className="flex items-end px-2 justify-between  text-2xl font-bold cursor-pointer">
        <h1 className="">Filters</h1>
        {!toggle && nonToggleIcon}
        {toggle && toggleIcon}
      </span>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          toggle ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } border border-gray-200 mx-2`}
        style={{
          height: toggle
            ? contentRef.current?.scrollHeight
              ? `${contentRef.current.scrollHeight}px`
              : "auto"
            : 0,
        }}
      >
        <div className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          voluptatum, laudantium dolore perspiciatis, odio hic at sequi iusto
          illo excepturi placeat voluptate provident a? Corrupti voluptas libero
          cupiditate alias atque.
        </div>
      </div>
    </div>
  );
}
