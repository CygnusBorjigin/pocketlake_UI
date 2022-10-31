import GuiSample from "./components/demo/GuiSample";
import LandingPage from "./components/landingpage/LandingPage";
import { Routes, Route } from "react-router-dom";
import LandingPageLg from "./components/landingpage/landingPageLg/LandingPageLg";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
          <Route path={"/demo"} element={<GuiSample />}></Route>
      </Routes>
  );
}

export default App;
