// hooks/useBookingForm.ts
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../utils/validationSchema";

const useBookingForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return { control, handleSubmit, errors, reset };
};

export default useBookingForm;
