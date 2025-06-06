// utils/validationSchema.ts
import * as yup from "yup";

export const validationSchema = yup
  .object({
    name: yup.string().required("Họ và tên là bắt buộc."),
    phone: yup.string().required("Số điện thoại là bắt buộc."),
    email: yup
      .string()
      .email("Email không hợp lệ.")
      .required("Email là bắt buộc."),
    address: yup.string().required("Địa chỉ là bắt buộc."),
    startDate: yup.date().required("Ngày bắt đầu không được bỏ trống."),
    endDate: yup.date().required("Ngày kết thúc không được bỏ trống."),
    time: yup.string().required("Giờ khởi hành không được bỏ trống."),
    meetingPlace: yup
      .string()
      .required("Địa điểm gặp mặt không được bỏ trống."),
    numberOfPeople: yup
      .number()
      .positive()
      .integer()
      .required("Số lượng người không được bỏ trống."),
    language: yup
      .string()
      .required("Ngôn ngữ hướng dẫn viên yêu cầu là bắt buộc."),
    specialRequest: yup.string(),
    note: yup.string(),
  })
  .required();
