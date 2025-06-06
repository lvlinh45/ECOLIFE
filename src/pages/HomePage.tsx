// pages/HomePage.tsx
import React, { useState } from "react";
import BookingForm from "../components/Form/BookingForm";
import ConfirmationDialog from "../components/Form/ConfirmationDialog";

const HomePage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setShowConfirmation(true);
  };

  return (
    <div>
      <BookingForm onSubmit={handleFormSubmit} />
      {showConfirmation && (
        <ConfirmationDialog
          open={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          data={formData}
        />
      )}
    </div>
  );
};

export default HomePage;
