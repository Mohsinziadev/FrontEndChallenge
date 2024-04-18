import { CATEGORIES_LIST } from "@/assets/json";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface DropdownProps {
  categories: string[];
  selectedCategory: string | null;
  selectFunc?: any;
  setSource?: any;
  Label: string;
  source?: string;
  dropdownType: string;
}

const Dropdown = ({
  categories,
  selectedCategory,
  selectFunc,
  source,
  setSource,
  dropdownType,
  Label,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (categoryValue: string) => {
    if (dropdownType === "Filter") {
      selectFunc(categoryValue);
    } else if (dropdownType === "Personalize") {
      setSource(categoryValue);
    }
    setIsOpen(false);
  };

  const getDropdownItems = () => {
    if (dropdownType === "Filter") {
      return categories.map((category, index) => (
        <li key={index} onClick={() => handleItemClick(category)}>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {category}
          </a>
        </li>
      ));
    } else if (dropdownType === "Personalize") {
      return CATEGORIES_LIST.map((category, index) => (
        <li key={index} onClick={() => handleItemClick(category.value)}>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {category.label}
          </a>
        </li>
      ));
    }
    return null;
  };

  return (
    <div className="relative min-w-fit w-full ">
      <div className="flex relative flex-col gap-2 px-0 md:px-4">
        <button
          className="flex items-center w-full gap-4 justify-between min-w-fit px-4 py-2 text-white bg-lightBlue rounded-md hover:bg-gradient-to-r from-lightBlue to-primary focus:outline-none focus:ring-2 focus:primary focus:ring-offset-2"
          onClick={toggleDropdown}
        >
          {dropdownType === "Filter" ? (
            <div>{selectedCategory || "All"}</div>
          ) : (
            <div className="min-w-fit flex">
              {source
                ? CATEGORIES_LIST.find((item) => item.value === source)?.label
                : "Personalized News"}
            </div>
          )}

          <ChevronDownIcon className="h-5 w-5" />
        </button>
        <label
          htmlFor=""
          className="text-[0.6rem] absolute -bottom-6 font-light text-black"
        >
          {Label}
        </label>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul className="py-1">{getDropdownItems()}</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
