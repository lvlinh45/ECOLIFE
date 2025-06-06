// /src/components/ProfileCard.tsx
import * as React from "react";

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
    <div className="bg-white shadow-lg w-full rounded-2xl p-6 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
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
      <button className="bg-green-500 text-white py-2 px-6 rounded-full mt-4 hover:bg-green-600 transition-all duration-300">
        Đặt ngay
      </button>
    </div>
  );
};

export default ProfileCard;
