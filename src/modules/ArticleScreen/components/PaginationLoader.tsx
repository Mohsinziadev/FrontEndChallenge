import { loaderWidths } from "@/assets/json";
import LoaderItem from "@/components/LoaderItem";

const PaginationLoader = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="flex rounded-[5px] w-fit  border p-2 border-primaryOpacity items-end gap-[10px]">
          {loaderWidths.map((width, index) => (
            <LoaderItem key={index} width={width} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginationLoader;
