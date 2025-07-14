import { Trash2 } from "lucide-react";

const DeleteButton = () => {
  return (
    <button
      className="w-9 h-9 bg-red-500 hover:bg-red-600 text-white rounded-[4px] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow hover:shadow-lg"
      title="Delete"
    >
      {/* 🗑 */}
      <Trash2 size={18} />
    </button>
  );
};

export default DeleteButton;
