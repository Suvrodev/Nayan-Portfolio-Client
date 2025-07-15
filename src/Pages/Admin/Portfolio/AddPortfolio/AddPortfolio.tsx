import { useForm, Controller } from "react-hook-form";
import type { TPortfolio } from "@/utils/types/globalTypes";
import JoditEditorComponent from "@/components/JoditEditorComponent/JoditEditorComponent";
import { useState } from "react";
// import { convertToBase64 } from "@/components/convertToBase64/convertToBase64";
import { toast } from "sonner";
import { sonarId } from "@/utils/Function/sonarId";
import { useAddPortfolioMutation } from "@/redux/features/portfolio/portfolioApi";
import { portfolioCategoriesDropDown } from "@/utils/Array/portfolioCategories";
import { compressAndConvertToBase64 } from "@/components/convertToBase64/compressAndConvertToBase64";

const AddPortfolio = () => {
  const [addPortfolio] = useAddPortfolioMutation();
  const [imagePreview, setImagePreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<TPortfolio>();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      //   const base64 = await convertToBase64(file);
      const base64 = await compressAndConvertToBase64(file);
      setImagePreview(base64);
      setValue("image", base64);
    }
  };

  const onSubmit = async (data: TPortfolio) => {
    console.log("Data: ", data);
    toast.loading("Adding Portfolio...", { id: sonarId });
    try {
      const res = await addPortfolio(data).unwrap();
      if (res?.success) {
        toast.success("Portfolio Added Successfully!", { id: sonarId });
      }
    } catch {
      toast.error("Something went wrong!", { id: sonarId });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#1f1f1f] text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Add Portfolio</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            placeholder="Enter portfolio title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-semibold">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:bg-teal-500 file:text-white hover:file:bg-teal-600"
          />
          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-h-64 object-contain rounded border border-gray-600"
              />
            </div>
          )}
          <input
            type="hidden"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            type="number"
            {...register("price", { required: "Price is required" })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            placeholder="Ex: 100"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <Controller
            control={control}
            name="description"
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <JoditEditorComponent
                value={field.value || ""}
                onChange={field.onChange}
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            defaultValue=""
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            {portfolioCategoriesDropDown.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Link */}
        <div>
          <label className="block mb-1 font-semibold">Live Link</label>
          <input
            {...register("link", { required: "Link is required" })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            placeholder="Ex: https://yourportfolio.com"
          />
          {errors.link && (
            <p className="text-red-500 text-sm">{errors.link.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded transition duration-300"
          >
            Save Portfolio
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPortfolio;
