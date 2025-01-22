import { RouterProvider } from "react-router-dom";
import router from "./router/root";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
