import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IProps {
  image: string;
  popupDesc: string;
}

const ServiceModal = ({ image, popupDesc }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group font-bold flex items-center gap-2 cursor-pointer w-fit overflow-hidden">
          {/* Read More text - animate in */}
          <p className="transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
            Read More
          </p>

          {/* HR line - animate out */}
          <hr className="w-[40px] bg-white h-[2px] transform group-hover:translate-x-6 transition-all duration-700" />
        </div>
      </DialogTrigger>

      {/* <DialogContent className="sm:max-w-2xl max-w-[95vw] p-6 [&>button[aria-label='Close']]:hidden"> */}
      <DialogContent className="sm:max-w-2xl max-w-[95vw] p-6 ">
        {/* 🔴 Close Icon with Red Background */}
        {/* <DialogClose asChild>
          <button
            className="absolute right-[12px] top-4 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg z-10 cursor-pointer"
            aria-label="custom-close" // ✅ make it unique
          >
            ✕
          </button>
        </DialogClose> */}

        <div className="flex flex-col gap-4">
          {/* 🔺 Image Section */}
          <img
            src={image}
            alt="Service Image"
            className="w-full h-auto rounded-md object-cover"
          />

          {/* 📄 Description */}
          <p className=" whitespace-pre-line">{popupDesc}</p>
        </div>

        {/* 🔻 Close Button */}
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
