import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ARTICLE_SOURCES } from "@/store/main/article/article.types";
import Dropdown from "./Dropdown";
import { categories } from "@/assets/json";

interface SearchSectionProps {
  setSearch: (search: string) => void;
  search: string;
  selectedCategory: string;
  selectFunc: (category: string) => void;
  setSource: (source: ARTICLE_SOURCES) => void;
  source: string;
  clearFilter: () => void;
}

const SearchSection = (props: SearchSectionProps) => {
  const {
    setSearch,
    search,
    selectedCategory,
    selectFunc,
    setSource,
    source,
    clearFilter,
  } = props;

  return (
    <div className="flex p-10  md:px-0 py-10 w-full">
      <div className="bg-gray-200 py-10 px-5 gap-4 w-full flex flex-col rounded-md shadow-md">
        <div className="flex w-full ">
          <div className="flex flex-col md:flex-row w-full gap-8 md:gap-2 justify-between">
            <div className="relative w-full h-full">
              <input
                type="text"
                value={search}
                placeholder="Search by keywords"
                className="w-full px-2 transform transition  duration-500 hover:scale-y-110  py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gradient-to-r from-lightBlue  to-primary focus:outline-none "
                onChange={(e) => setSearch(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute h-4 w-4 md:h-6 md:w-6 top-3 md:top-2 right-3" />
            </div>
            {source !== "guardian" && (
              <Dropdown
                categories={categories}
                selectedCategory={selectedCategory}
                selectFunc={selectFunc}
                dropdownType="Filter"
                Label={"Filter the Articles"}
              />
            )}

            <Dropdown
              categories={categories}
              selectedCategory={selectedCategory}
              setSource={setSource}
              dropdownType="Personalize"
              Label={"Personalize Your News"}
            />

            <div className="px-0 md:px-4 min-w-fit w-full">
              <button
                className="flex w-full items-center  gap-4 justify-between min-w-fit  px-4 py-2 text-white bg-lightBlue rounded-md hover:bg-gradient-to-r from-lightBlue  to-primary focus:outline-none focus:ring-2 focus:primary focus:ring-offset-2"
                onClick={clearFilter}
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
