import { useForm, useFieldArray, Controller } from "react-hook-form";
import type { TService } from "@/utils/types/globalTypes";
import JoditEditorComponent from "@/components/JoditEditorComponent/JoditEditorComponent";
import { useEffect, useState } from "react";
import { convertToBase64 } from "@/components/convertToBase64/convertToBase64";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/features/service/serviceApi";
import { useParams } from "react-router";
import { toast } from "sonner";
import { sonarId } from "@/utils/Function/sonarId";

const UpdateService = () => {
  const { id } = useParams();
  const [updateService] = useUpdateServiceMutation();
  const { data, isLoading } = useGetSingleServiceQuery(id);
  //   const [updateService] = useUpdateServiceMutation();
  const service = data?.data;

  const [imagePreview, setImagePreview] = useState<string>("");

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TService>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skillAndTools",
  });

  useEffect(() => {
    if (service) {
      reset(service); // set initial form values
      setImagePreview(service.image); // set initial preview
    }
  }, [service, reset]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setImagePreview(base64);
      setValue("image", base64);
    }
  };

  const onSubmit = async (data: TService) => {
    console.log("Data: ", data);
    toast.loading("Updating Service...", { id: sonarId });
    const res = await updateService({
      _id: data?._id,
      updatedData: data,
    }).unwrap();
    console.log("Res: ", res);
    if (res?.status) {
      toast.success("Service Updated Successfully!", { id: sonarId });
    }
  };

  if (isLoading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#1f1f1f] text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Update Service</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            placeholder="Enter service title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Image Upload */}
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
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 font-semibold">Short Description</label>
          <textarea
            {...register("shortDescription", {
              required: "Short description is required",
            })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            rows={3}
            placeholder="Brief summary..."
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-sm">
              {errors.shortDescription.message}
            </p>
          )}
        </div>

        {/* Description - Jodit */}
        <div>
          <label className="block mb-1 font-semibold">Full Description</label>
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
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Order */}
        <div>
          <label className="block mb-1 font-semibold">Display Order</label>
          <input
            type="number"
            {...register("order", { required: "Order is required" })}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded"
            placeholder="Ex: 1"
          />
          {errors.order && (
            <p className="text-red-500 text-sm">{errors.order.message}</p>
          )}
        </div>

        {/* Skills & Tools */}
        <div>
          <label className="block mb-2 font-semibold">Skills & Tools</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-4 mb-3">
              <div className="flex flex-col w-1/2">
                <label className="text-sm mb-1">Skill</label>
                <input
                  {...register(`skillAndTools.${index}.title`, {
                    required: "Skill title is required",
                  })}
                  placeholder="Skill Name"
                  className="p-2 bg-gray-800 border border-gray-600 rounded"
                />
              </div>
              <div className="flex flex-col w-1/4">
                <label className="text-sm mb-1">Percent</label>
                <input
                  type="number"
                  {...register(`skillAndTools.${index}.percent`, {
                    required: "Percent is required",
                    min: 0,
                    max: 100,
                  })}
                  placeholder="%"
                  className="p-2 bg-gray-800 border border-gray-600 rounded"
                />
              </div>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 hover:text-red-700 text-lg font-bold"
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}

          {fields.length < 3 && (
            <button
              type="button"
              onClick={() => append({ title: "", percent: 0 })}
              className="text-sm text-teal-400 hover:underline mt-1"
            >
              + Add More Skill
            </button>
          )}
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded transition duration-300"
          >
            Update Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
