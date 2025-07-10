import { useRegistrationMutation } from "@/redux/features/auth/authApi";
import { sonarId } from "@/utils/Function/sonarId";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

type RegisterFormInputs = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Registration = () => {
  const [registration] = useRegistrationMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    console.log("Register Data:", data);
    toast.loading("Submitting...", { id: sonarId });

    const res = await registration(data).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success("Registration Successfully", { id: sonarId });
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f1f1f] px-4">
      <div className="bg-[#2c2c2c] p-8 rounded-xl shadow-md w-full max-w-[550px] text-white">
        <h2 className="text-2xl font-bold mb-6 fontHeading">Registration</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 fontBody">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#525252] rounded-md"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#525252] rounded-md"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 10, message: "Invalid phone number" },
                })}
                className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#525252] rounded-md"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#525252] rounded-md"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#525252] rounded-md pr-10"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 hover:text-white"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showCPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="w-full px-4 py-2 bg-[#1f1f1f] border border-[#525252] rounded-md pr-10"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={() => setShowCPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 hover:text-white"
                >
                  {showCPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#141414] border border-[#525252] hover:bg-[#1D1B1B] hover:border-white transition-all py-2 rounded-md fontHeading"
          >
            Register
          </button>

          {/* Link */}
          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:underline font-semibold"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
