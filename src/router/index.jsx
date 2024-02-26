import React,{ lazy } from "react"
// Navigate重定向组件
import {Navigate} from "react-router-dom"
import Login from  "../views/Login"
const IndexPage = lazy(()=>import('../views/IndexPage'))


const routes = [
    {
        path:"/",
        element:<Navigate to='/IndexPage' />
    },
    {
        path:"/IndexPage",
        element: <IndexPage />,
    },
    // 嵌套路由 结束-------------------
    {
        path:"/login",
        element: <Login />
    },
    // 访问其余路径的时候直接跳到首页
    {
        path:"*",
        element:<Navigate to="/IndexPage"/>
    }
]

export default routes