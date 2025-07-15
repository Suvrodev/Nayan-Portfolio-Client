import { selectPortfolioCategory } from "@/redux/features/portfolio/portfolioSlice";
import { portfolioCategories } from "@/utils/Array/portfolioCategories";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const PortfolioTabEZ = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("All");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const index = portfolioCategories.indexOf(activeTab);
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);
  return (
    <div className="w-full flex justify-center">
      <div className="relative inline-flex items-center gap-1 bg-[#2c2f36] rounded-full px-2 py-2">
        {portfolioCategories.map((item, index) => (
          <button
            key={item}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={(el: any) => (tabRefs.current[index] = el)}
            onClick={() => {
              setActiveTab(item);
              dispatch(selectPortfolioCategory(item));
            }}
            className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === item ? "text-white" : "text-gray-300"
            }`}
          >
            {item}
          </button>
        ))}

        {/* Animated Background Circle */}
        <span
          className="absolute z-0 h-8 bg-blue-600 rounded-full transition-all duration-300"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioTabEZ;
