import Header from "../components/header/Header";
import Guin from "../pages/Guin";
import Home from "../pages/Home";


export const RouterInfo = [
    {
        path: '/',
        element: <Home />,
    }
    , {
        path: '/guin',
        element: <Guin />
    }
]