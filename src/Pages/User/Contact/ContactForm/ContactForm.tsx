import PrimaryButton from "@/components/PortfolioButton/PrimaryButton";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="primaryBox p-8 rounded-[10px]">
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Your name"
          className="bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="email"
          placeholder="Your email"
          className="bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="text"
          placeholder="Your Phone (optional)"
          className="bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="text"
          placeholder="Your subject"
          className="bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <textarea
        rows={5}
        placeholder="Type your message..."
        className="w-full bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white mb-4"
      />
      {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors">
              Submit Now <Send className="w-4 h-4" />
            </button> */}
      <PrimaryButton text="Submit Now">
        <Send className="size-4" />
      </PrimaryButton>
    </div>
  );
};

export default ContactForm;
