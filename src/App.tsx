import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="shadow-md">
        <Header />
      </div>

      <div className="flex w-full justify-center">
        <div className="max-w-[1080px] w-full">
          <Outlet />
        </div>
      </div>
      <div className="shadow-sm">
        <Footer />
      </div>
    </div>
  );
}

export default App;
