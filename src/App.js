import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto bg-base-200">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
