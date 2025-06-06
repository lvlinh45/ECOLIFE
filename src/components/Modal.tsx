// /src/components/Modal.tsx
import * as React from "react";
import { FieldValues } from "react-hook-form";

interface ModalProps {
  onClose: () => void;
  onSubmit: (data: FieldValues) => void;
  register: any;
  errors: any;
  name: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  onSubmit,
  register,
  errors,
  name,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">
          Thông tin đặt tour với {name}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Thông tin người đặt */}
          <div>
            <label htmlFor="fullName">Họ và tên</label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.fullName?.message}</p>
          </div>

          <div>
            <label htmlFor="phone">Số điện thoại</label>
            <input
              id="phone"
              type="text"
              {...register("phone")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.phone?.message}</p>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="address">Địa chỉ</label>
            <input
              id="address"
              type="text"
              {...register("address")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.address?.message}</p>
          </div>

          {/* Thông tin tour */}
          <div>
            <label htmlFor="startDate">Ngày bắt đầu</label>
            <input
              id="startDate"
              type="date"
              {...register("startDate")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.startDate?.message}</p>
          </div>

          <div>
            <label htmlFor="endDate">Ngày kết thúc</label>
            <input
              id="endDate"
              type="date"
              {...register("endDate")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.endDate?.message}</p>
          </div>

          <div>
            <label htmlFor="startTime">Giờ khởi hành</label>
            <input
              id="startTime"
              type="time"
              {...register("startTime")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.startTime?.message}</p>
          </div>

          <div>
            <label htmlFor="meetingPlace">Địa điểm gặp mặt</label>
            <input
              id="meetingPlace"
              type="text"
              {...register("meetingPlace")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.meetingPlace?.message}</p>
          </div>

          <div>
            <label htmlFor="numPeople">Số lượng người</label>
            <input
              id="numPeople"
              type="number"
              {...register("numPeople")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.numPeople?.message}</p>
          </div>

          <div>
            <label htmlFor="guideLanguage">
              Ngôn ngữ hướng dẫn viên yêu cầu
            </label>
            <input
              id="guideLanguage"
              type="text"
              {...register("guideLanguage")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500">{errors.guideLanguage?.message}</p>
          </div>

          {/* Yêu cầu chi tiết */}
          <div>
            <label htmlFor="details">Yêu cầu chi tiết</label>
            <textarea
              id="details"
              {...register("details")}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white p-3 w-full rounded-md mt-4"
          >
            Gửi yêu cầu
          </button>
        </form>

        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
