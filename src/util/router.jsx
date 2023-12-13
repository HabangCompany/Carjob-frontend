import Root from "../pages/Root";
import Guin from "../pages/Guin";
import Home from "../pages/Home";



export const RouterInfo = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/guin',
                element: <Guin />
            },

        ]
    },

]
