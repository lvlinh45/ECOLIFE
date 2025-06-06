import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { type FC } from "react";

interface DropdownMenuProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const DropdownMenuComponent: FC<DropdownMenuProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <DropdownMenu.Root>
      {/* Trigger (Dropdown button) */}
      <DropdownMenu.Trigger className="px-4 py-3 border rounded-lg cursor-pointer text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
        {selectedCategory || "Chọn loại hình"} {/* Display selected value */}
      </DropdownMenu.Trigger>

      {/* Dropdown Content */}
      <DropdownMenu.Content className="w-2/3 border rounded-lg bg-white shadow-lg mt-1 p-2 space-y-1">
        <DropdownMenu.Item
          onClick={() => onSelectCategory("DU LỊCH BIỂN ĐẢO")}
          className="px-4 py-2 hover:bg-blue-100 rounded-lg focus:outline-none focus:bg-blue-200 transition-colors"
        >
          DU LỊCH BIỂN ĐẢO
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => onSelectCategory("DU LỊCH SINH THÁI")}
          className="px-4 py-2 hover:bg-blue-100 rounded-lg focus:outline-none focus:bg-blue-200 transition-colors"
        >
          DU LỊCH SINH THÁI
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => onSelectCategory("DU LỊCH TÂM LINH")}
          className="px-4 py-2 hover:bg-blue-100 rounded-lg focus:outline-none focus:bg-blue-200 transition-colors"
        >
          DU LỊCH TÂM LINH
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => onSelectCategory("DU LỊCH KHÁM PHÁ")}
          className="px-4 py-2 hover:bg-blue-100 rounded-lg focus:outline-none focus:bg-blue-200 transition-colors"
        >
          DU LỊCH KHÁM PHÁ
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() =>
            onSelectCategory("DU LỊCH TRẢI NGHIỆM CỘNG ĐỒNG - LÀNG NGHỀ")
          }
          className="px-4 py-2 hover:bg-blue-100 rounded-lg focus:outline-none focus:bg-blue-200 transition-colors"
        >
          DU LỊCH TRẢI NGHIỆM CỘNG ĐỒNG - LÀNG NGHỀ
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuComponent;
