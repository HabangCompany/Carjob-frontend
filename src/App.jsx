import Header from "./components/header/Header"
import "./App.css"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { RouterInfo } from "./util/router";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { CookiesProvider } from "react-cookie";
function App() {

  const RouterObject = createBrowserRouter(RouterInfo)
  return (
    <>
      <RecoilRoot>
        <CookiesProvider>
          <RouterProvider router={RouterObject} />
        </CookiesProvider>
      </RecoilRoot>
    </>
  )
}

export default App
