import { type FC, useState } from "react";
import SearchForm from "./SearchForm";

const TravelForm: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <SearchForm
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default TravelForm;
