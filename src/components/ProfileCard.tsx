import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog"; // Import Dialog from Radix UI
import Modal from "./Modal"; // Import Modal component

interface ProfileCardProps {
  name: string;
  languages: string[];
  experience: string;
  specialties: string[];
  rating: number;
  reviews: number;
  profileImageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  languages,
  experience,
  specialties,
  rating,
  reviews,
  profileImageUrl,
}) => {
  return (
    <div className="bg-white shadow-lg w-full mx-auto rounded-2xl p-6 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl duration-300 border border-gray-200">
      {/* Ảnh đại diện */}
      <img
        src={profileImageUrl}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-6 border-4 border-green-500 transform hover:scale-110 transition-transform duration-300"
      />

      {/* Tên */}
      <h2 className="font-semibold text-xl text-center text-gray-900 mb-2">
        {name}
      </h2>

      {/* Ngôn ngữ */}
      <p className="text-gray-600 text-sm mb-2">{languages.join(", ")}</p>

      {/* Kinh nghiệm */}
      <p className="text-gray-600 text-sm mb-2">{experience}</p>

      {/* Chuyên môn */}
      <ul className="text-gray-600 text-sm mb-4">
        {specialties.map((specialty, index) => (
          <li key={index}>{specialty}</li>
        ))}
      </ul>

      {/* Đánh giá */}
      <div className="flex items-center space-x-1 mb-6">
        <span className="font-semibold text-lg">{rating}</span>
        <span className="text-gray-500 text-sm">({reviews} đánh giá)</span>
      </div>

      {/* Nút đặt ngay */}
      <Dialog.Root>
        <Dialog.Trigger className="bg-green-500 text-white py-2 px-6 rounded-full mt-4 hover:bg-green-600 transition-all duration-300">
          Đặt ngay
        </Dialog.Trigger>

        {/* Modal */}
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-40" />
          <Dialog.Content className="fixed top-0 left-0 mx-auto right-0 bottom-0 flex justify-center items-center w-full md:w-1/2 bg-white p-8 rounded-lg z-50">
            <Modal name={name} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ProfileCard;
