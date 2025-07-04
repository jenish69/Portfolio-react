import { createBrowserRouter } from "react-router";
import {AppLayout}  from "./component/layout/AppLayout";
import { RouterProvider } from "react-router";
import { AboutMe } from "./component/layout/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      // children: [
      //   {
      //     path: "about",
      //     element: <AboutMe />,
      //   }
      // ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;