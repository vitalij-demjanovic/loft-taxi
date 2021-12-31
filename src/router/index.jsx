import Login from "../pages/Login/Login";
import Map from "../components/Map/Map";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/Registraion/Registration";


export const PublicRoute = [
    { path: '/login', element: Login, exact: true },
    { path: '/registration', element: Registration, exact: true }
]

export const PrivateRoute = [
    { path: '/map', element: Map, exact: true },
    { path: '/profile', element: Profile, exact: true }
]

