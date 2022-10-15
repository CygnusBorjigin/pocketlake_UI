import GuiSample from "./components/GuiSample";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
          <Route path={"/demo"} element={<GuiSample />}></Route>
      </Routes>
  );
}

export default App;
