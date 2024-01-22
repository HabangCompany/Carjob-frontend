import Root from "../pages/Root";
import WantJobs from "../pages/WantJobs";
import Home from "../pages/Home";
import FindJobs from "../pages/FindJobs"
import Signup from "../pages/Signup";
import Login from "../pages/Login"
import CarServicePage from "../pages/CarServicePage";


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
                path: '/want-jobs',
                element: <WantJobs />
            },
            {
                path: '/find-jobs',
                element: <FindJobs />,
            },
            {
                path: '/car-service',
                element: <CarServicePage />
            }
        ]
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    }

]
