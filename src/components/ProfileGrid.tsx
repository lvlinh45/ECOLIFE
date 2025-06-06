// /src/components/ProfileGrid.tsx
import * as React from "react";
import ProfileCard from "./ProfileCard";
import { guides } from "../assets/data/mockData";

const ProfileGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6 justify-start">
      {guides.map((guide, index) => (
        <ProfileCard
          key={index}
          name={guide.name}
          languages={guide.languages}
          experience={guide.experience}
          specialties={guide.specialties}
          rating={guide.rating}
          reviews={guide.reviews}
          profileImageUrl={guide.profileImageUrl}
        />
      ))}
    </div>
  );
};

export default ProfileGrid;
