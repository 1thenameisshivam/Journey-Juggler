import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
