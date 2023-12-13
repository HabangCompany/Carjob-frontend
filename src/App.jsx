import Header from "./components/header/Header"
import "./App.css"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { RouterInfo } from "./util/router";

function App() {

  const RouterObject = createBrowserRouter(RouterInfo)
  return (
    <>
      <Header></Header>
      <RouterProvider router={RouterObject} />
    </>
  )
}

export default App
