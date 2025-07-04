interface IProps {
  text: string;
  onClick?: () => void;
}
const PrimaryButton = ({ text, onClick }: IProps) => {
  return (
    <button
      className="bg-[ #141414] border-[1px] border-[#525252] transition-all hover:bg-[#1D1B1B] hover:border-[#FFFFFF] text-white px-4 py-2 rounded-[7px] flex items-center justify-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
