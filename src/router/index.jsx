import {Navigate} from "react-router-dom"
import Login from  "../views/Login"
import IndexPage from '../views/IndexPage'

const routes = [
    {
        path:"/",
        element:<Navigate to='/IndexPage' />
    },
    {
        path:"/IndexPage",
        element: <IndexPage />,
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"*",
        element:<Navigate to="/IndexPage"/>
    }
]

export default routes