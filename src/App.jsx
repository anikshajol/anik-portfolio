import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayouts from "./components/layouts/MainLayouts";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <MainLayouts>
        <Outlet></Outlet>
      </MainLayouts>
      <Footer></Footer>
    </>
  );
}

export default App;
