// interface IProps {
//   text: string;
//   onClick?: () => void;
//   children?: React.ReactNode;
// }
// const PrimaryButton = ({ text, onClick, children }: IProps) => {
//   return (
//     <button
//       className="bg-[#141414] border-[1px] border-[#525252] transition-all hover:bg-[#1D1B1B] hover:border-[#FFFFFF] text-white px-4 py-2 rounded-[7px] flex items-center justify-center cursor-pointer"
//       onClick={onClick}
//     >
//       <span className="text-[16px]">{text}</span>{" "}
//       <span className="ml-2">{children}</span>
//     </button>
//   );
// };

import { Link } from "react-router";

// export default PrimaryButton;

interface IProps {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
  to?: string; // <-- add this
}

const PrimaryButton = ({ text, onClick, children, to }: IProps) => {
  const commonClasses =
    "inline-block bg-[#141414] border-[1px] border-[#525252] transition-all hover:bg-[#1D1B1B] hover:border-[#FFFFFF] text-white px-4 py-2 rounded-[7px] flex items-center justify-center cursor-pointer";

  if (to) {
    return (
      <Link to={to} className={commonClasses}>
        <span className="text-[16px]">{text}</span>{" "}
        <span className="ml-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={commonClasses} onClick={onClick}>
      <span className="text-[16px]">{text}</span>{" "}
      <span className="ml-2">{children}</span>
    </button>
  );
};

export default PrimaryButton;
