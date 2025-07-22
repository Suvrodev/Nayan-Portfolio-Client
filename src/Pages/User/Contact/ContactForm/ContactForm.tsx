import { useForm } from "react-hook-form";
import PrimaryButton from "@/components/PortfolioButton/PrimaryButton";
import { Send } from "lucide-react";
import { useSendMailMutation } from "@/redux/features/sendMail/sendMailApi";
import { toast } from "sonner";
import { sonarId } from "@/utils/Function/sonarId";

type TFormInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [sendMail] = useSendMailMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TFormInput>();

  const onSubmit = async (data: TFormInput) => {
    // console.log("Data: ", data);
    toast.loading("Sending...", { id: sonarId });
    const res = await sendMail(data).unwrap();
    // console.log("Success:", res);
    if (res?.success) {
      toast.success("Message Sent Successfully", { id: sonarId });
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="primaryBox p-8 rounded-[10px]"
    >
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your name"
            className="w-full bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Your email"
            className="w-full bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("phone")}
            type="text"
            placeholder="Your Phone (optional)"
            className="w-full bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <input
            {...register("subject", { required: "Subject is required" })}
            type="text"
            placeholder="Your subject"
            className="w-full bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={5}
          placeholder="Type your message..."
          className="w-full bg-black/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-[10px] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white"
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <PrimaryButton text={isSubmitting ? "Sending..." : "Submit Now"}>
        <Send className="size-4" />
      </PrimaryButton>
    </form>
  );
};

export default ContactForm;
