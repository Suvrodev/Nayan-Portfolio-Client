import { selectPortfolioCategory } from "@/redux/features/portfolio/portfolioSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const portfolioContent = [
  "All",
  "Web Design & Development",
  "Ui/UX",
  "Business Card",
  "Logo Design",
  "Flyer",
];

const PortfolioTab = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("All");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const index = portfolioContent.indexOf(activeTab);
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-4 pb-2 relative">
        {portfolioContent.map((item, index) => (
          <button
            key={item}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            onClick={() => {
              setActiveTab(item);
              dispatch(selectPortfolioCategory(item));
            }}
            className={`relative px-3 py-1 text-sm font-medium transition-colors duration-200 ${
              activeTab === item ? "text-blue-400" : ""
            }`}
          >
            {item}
          </button>
        ))}

        {/* Animated Underline */}
        <span
          className="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioTab;
