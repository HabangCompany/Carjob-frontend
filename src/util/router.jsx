import Root from "../pages/Root";
import Jobs from "../pages/Jobs";
import Home from "../pages/Home";
import FindJobs from "../pages/FindJobs"


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
                path: '/jobs',
                element: <Jobs />
            },
            {
                path: '/find-jobs',
                element: <FindJobs />,
            },


        ]
    },

]
