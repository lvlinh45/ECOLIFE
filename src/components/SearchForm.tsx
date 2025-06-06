import { type FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import DropdownMenuComponent from "./DropdownMenu";
import { useNavigate } from "react-router-dom";

// Yup validation schema
const schema = Yup.object({
  destination: Yup.string().required("Vui lòng nhập điểm đến"),
  date: Yup.string().required("Vui lòng chọn ngày đi"),
  category: Yup.string().required("Vui lòng chọn loại hình du lịch"),
});

interface IFormInput {
  destination: string;
  date: string;
  category: string;
}

interface SearchFormProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const SearchForm: FC<SearchFormProps> = ({ selectedCategory }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      destination: "",
      date: "",
      category: selectedCategory,
    },
  });

  const navigate = useNavigate();
  const onSubmit = (data: IFormInput) => {
    console.log("TCL: onSubmit -> data", data);
    navigate("/detail-guide");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white shadow-lg rounded-lg"
    >
      {/* Destination Input */}
      <div className="flex items-center space-x-4">
        <label htmlFor="destination" className="text-lg w-1/3">
          Bạn muốn đi đâu?
        </label>
        <div className="w-2/3">
          <Controller
            name="destination"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="destination"
                type="text"
                placeholder="Tìm chuyến đi tiếp theo của bạn"
                className="px-4 py-3 border rounded-lg w-full"
              />
            )}
          />
          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">
              {errors.destination.message}
            </p>
          )}
        </div>
      </div>

      {/* Date Input */}
      <div className="flex items-center space-x-4">
        <label htmlFor="date" className="text-lg w-1/3">
          Ngày đi
        </label>
        <div className="w-2/3">
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="date"
                type="date"
                className="px-4 py-3 border rounded-lg w-full"
              />
            )}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="flex items-center space-x-4">
        <label htmlFor="category" className="text-lg w-1/3">
          Loại hình
        </label>
        <div className="w-2/3">
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <DropdownMenuComponent
                selectedCategory={field.value} // Bind dropdown value to form state
                onSelectCategory={(category: string) =>
                  field.onChange(category)
                } // Update form state on category change
              />
            )}
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
        >
          Tìm kiếm
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
