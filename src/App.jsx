import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./components/questions/Home";
import Answers from "./components/answers/Answers";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import NumberPage from "./components/questions/NumberPage";
import ErrorPage from "./components/ui/ErrorPage";

const routers = createBrowserRouter([
  {
    element: <AppLayout />,

    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/question/:ques",
        element: <NumberPage />,
      },
      {
        path: "/question/:ques/answer/:num",
        element: <Answers />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <RouterProvider router={routers} />;
};

export default App;
