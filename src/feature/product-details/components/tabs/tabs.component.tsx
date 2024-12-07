import { ReactNode, useState } from "react";
// import { ProductResponse } from "../../../shared";
// import Reviews from "../review/review.component";

export default function Tabs({
  tabs,
}: {
  tabs: { title: string; content: ReactNode }[];
}) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className=" border border-gray-200 rounded-xl p-4">
      <div className="flex  border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index
                ? "border-b-2 border-black text-black "
                : "text-gray-600"
            } md:w-1/3`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
}
