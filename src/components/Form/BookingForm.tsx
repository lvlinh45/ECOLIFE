// components/Form/BookingForm.tsx
import { Controller } from "react-hook-form";
import useBookingForm from "../../hooks/useBookingForm";

const BookingForm = ({ onSubmit }: { onSubmit: any }) => {
  const { control, handleSubmit, errors } = useBookingForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block">Họ và tên</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} className="input" />}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label className="block">Số điện thoại</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <input {...field} className="input" />}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block">Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} className="input" />}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Add other fields similarly */}

      <div>
        <button type="submit" className="btn">
          Đặt ngay
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
