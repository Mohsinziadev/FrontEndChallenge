import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Article from "@/modules/ArticleScreen/Article";
import store from "@/store/index";

import App from "../App";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Article />} />
            {/* {Might require more pages later} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
