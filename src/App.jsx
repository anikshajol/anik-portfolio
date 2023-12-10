import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayouts from "./components/layouts/MainLayouts";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <MainLayouts>
        <Outlet></Outlet>
        <div>
          <Footer></Footer>
        </div>
      </MainLayouts>
    </>
  );
}

export default App;
