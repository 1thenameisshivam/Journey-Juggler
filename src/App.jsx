import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;
