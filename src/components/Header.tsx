import { BellAlertIcon } from "@heroicons/react/24/solid";
import logoImage from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="w-full font-tt-firs-neue flex justify-center">
      <div className="max-w-[1080px] w-full">
        <div className="py-0 p-4 md:px-0 ">
          <div className="flex justify-between items-center">
            <img
              src={logoImage}
              className="object-contain h-[5rem] w-[6rem]"
              alt=""
            />
            <div className="flex gap-4 cursor-pointer">
              <BellAlertIcon className="h-6 w-6 text-primary" />
              <span className="font-light ">News Letters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
