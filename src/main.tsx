import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home.tsx";
import { Characters } from "./pages/Characters.tsx";
import { Information } from "./pages/Information.tsx";
import { Quiz } from "./pages/Quiz.tsx";
import { Passed } from "./pages/Passed.tsx";
import { Failed } from "./pages/Failed.tsx";

import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/",
        element: <Home />,
      },
      {
        path: "/vite-react-router/characters",
        element: <Characters />,
      },
      {
        path: "/vite-react-router/information",
        element: <Information />,
      },
      {
        path: "/vite-react-router/quiz",
        element: <Quiz />,
      },
      {
        path: "/vite-react-router/pass",
        element: <Passed />,
      },
      {
        path: "/vite-react-router/fail",
        element: <Failed />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
