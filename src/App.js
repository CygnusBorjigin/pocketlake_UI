import LandingPage from "./components/landingpage/LandingPage";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
          <Route path={"/dashboard"} element={<DashBoard />}></Route>
      </Routes>
  );
}

export default App;
