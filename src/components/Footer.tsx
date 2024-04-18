import logoImage from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer className=" border-t-[0.01rem] mt-20 font-tt-firs-neue">
      <div className="flex justify-center w-full">
        <div className="w-full  max-w-[1080px]">
          <div className="flex flex-col gap-5  md:gap-0 md:flex-row py-10 px-10 md:px-0">
            <div className="w-full md:w-1/4 flex justify-center items-start">
              <img
                src={logoImage}
                className="object-contain h-[5rem] w-[6rem]"
                alt=""
              />
            </div>
            <div className="w-full md:w-2/4 ">
              <div className="flex justify-center md:justify-start">
                <h3 className="font-bold text-2xl">About us </h3>
              </div>
              <p className="text-sm pr-10 text-justify mt-3 md:mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Contact us: &nbsp;
                  <span className="text-primary">mohsinziadev@gmail.com</span>
                </label>
                <label htmlFor="" className="text-sm">
                  Portfolio: &nbsp;
                  <u>
                    <a
                      href="https://mohsinzia.site/"
                      target="_blank"
                      className="text-primary"
                    >
                      https://mohsinzia.info/
                    </a>
                  </u>
                </label>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex items-center">
              <div className="flex flex-col gap-2">
                <div className="flex justify-center ">
                  <h1>Follow us </h1>
                </div>
                <div className="flex gap-4 cursor-pointer  justify-center mt-2 md:mt-0 text-xs text-primary">
                  <div>FaceBook</div>
                  <div>Linked In </div>
                  <div>Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 md:mt-10 bg-primary p-2 justify-center items-center">
        <div className="text-xs font-normal text-white">
          © Designed and Developed by Mohsin zia
        </div>
      </div>
    </footer>
  );
}

export default Footer;
