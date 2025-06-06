import * as React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Dialog from "@radix-ui/react-dialog"; // Import Dialog from Radix UI
import Swal from "sweetalert2"; // Import SweetAlert2

interface ModalProps {
  name: string;
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  startDate: string;
  endDate: string;
  startTime: string;
  meetingPlace: string;
  numPeople: number;
  guideLanguage: string;
  details: string;
}

const Modal: React.FC<ModalProps> = ({ name }) => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Họ và tên là bắt buộc"),
    phone: Yup.string()
      .required("Số điện thoại là bắt buộc")
      .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ"),
    email: Yup.string()
      .required("Email là bắt buộc")
      .email("Email không hợp lệ"),
    address: Yup.string().required("Địa chỉ là bắt buộc"),
    startDate: Yup.string().required("Ngày bắt đầu là bắt buộc"),
    endDate: Yup.string().required("Ngày kết thúc là bắt buộc"),
    startTime: Yup.string().required("Giờ khởi hành là bắt buộc"),
    meetingPlace: Yup.string().required("Địa điểm gặp mặt là bắt buộc"),
    numPeople: Yup.number()
      .required("Số lượng người tham gia là bắt buộc")
      .min(1, "Số lượng người tham gia phải lớn hơn 0")
      .typeError("Số lượng người tham gia phải là số"),
    guideLanguage: Yup.string().required(
      "Ngôn ngữ hướng dẫn viên yêu cầu là bắt buộc"
    ),
    details: Yup.string().required("Yêu cầu chi tiết là bắt buộc"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    Swal.fire({
      title: "Xác nhận thông tin",
      text: `Bạn đã điền thông tin đặt tour với ${name}. Bạn có chắc chắn muốn đặt tour không?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Có, Đặt ngay",
      cancelButtonText: "Không, Quay lại",
    }).then((result) => {
      if (result.isConfirmed) {
        // Nếu khách hàng chọn "Có, Đặt ngay"
        Swal.fire("Đặt tour thành công!", "Cảm ơn bạn đã đặt tour!", "success");
      }
    });
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg z-40">
        {/* Tiêu đề modal */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Thông tin đặt tour với {name}
          </h2>
          {/* Nút đóng modal */}
          <Dialog.Close className="text-xl font-bold text-gray-600 cursor-pointer">
            X
          </Dialog.Close>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-base font-medium">
                Họ và tên
              </label>
              <input
                id="fullName"
                type="text"
                {...register("fullName")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">{errors.fullName?.message}</p>
            </div>

            <div>
              <label htmlFor="phone" className="block text-base font-medium">
                Số điện thoại
              </label>
              <input
                id="phone"
                type="text"
                {...register("phone")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">{errors.phone?.message}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-base font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            </div>

            <div>
              <label htmlFor="address" className="block text-base font-medium">
                Địa chỉ
              </label>
              <input
                id="address"
                type="text"
                {...register("address")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">{errors.address?.message}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-base font-medium"
              >
                Ngày bắt đầu
              </label>
              <input
                id="startDate"
                type="date"
                {...register("startDate")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">
                {errors.startDate?.message}
              </p>
            </div>

            <div>
              <label htmlFor="endDate" className="block text-base font-medium">
                Ngày kết thúc
              </label>
              <input
                id="endDate"
                type="date"
                {...register("endDate")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">{errors.endDate?.message}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startTime"
                className="block text-base font-medium"
              >
                Giờ khởi hành
              </label>
              <input
                id="startTime"
                type="time"
                {...register("startTime")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">
                {errors.startTime?.message}
              </p>
            </div>

            <div>
              <label
                htmlFor="meetingPlace"
                className="block text-base font-medium"
              >
                Địa điểm gặp mặt
              </label>
              <input
                id="meetingPlace"
                type="text"
                {...register("meetingPlace")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">
                {errors.meetingPlace?.message}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="numPeople"
                className="block text-base font-medium"
              >
                Số lượng người
              </label>
              <input
                id="numPeople"
                type="number"
                {...register("numPeople")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">
                {errors.numPeople?.message}
              </p>
            </div>

            <div>
              <label
                htmlFor="guideLanguage"
                className="block text-base font-medium text-nowrap"
              >
                Ngôn ngữ hướng dẫn viên yêu cầu
              </label>
              <input
                id="guideLanguage"
                type="text"
                {...register("guideLanguage")}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-red-500 text-xs">
                {errors.guideLanguage?.message}
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="details" className="block text-base font-medium">
              Yêu cầu chi tiết
            </label>
            <textarea
              id="details"
              {...register("details")}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-red-500 text-xs">{errors.details?.message}</p>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white p-3 w-full rounded-md mt-4"
          >
            Gửi yêu cầu
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
