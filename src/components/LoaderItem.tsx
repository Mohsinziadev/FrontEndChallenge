import { LoaderItemWidth } from "@/store/main/article/article.types";

interface LoaderItemProps {
  width: LoaderItemWidth;
}

const LoaderItem = (props: LoaderItemProps) => {
  return (
    <div
      className={`animate-pulse xs:w-[${props.width.xsWidth}] w-[${props.width.width}] xs:h-[30px] h-[40px] bg-primaryOpacity rounded-[5px]`}
    ></div>
  );
};
export default LoaderItem;
