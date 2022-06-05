import React from "react";
import {RouteObject, Navigate} from 'react-router-dom';
import NotFound from "../component/layout/NotFound";

const UseState = React.lazy(() => import('../page/UseState'));
const UseEffect = React.lazy(() => import('../page/UseEffect'));
const UseReducer = React.lazy(() => import('../page/UseReducer'));
const Timer = React.lazy(() => import('../page/UseTimer'));

export interface RouteObj extends RouteObject{
    meta?: MetaInfo
}

export type MetaInfo = {
    name?: string
}

const router: Array<RouteObj> = [
    {
        path: '/',
        element: <Navigate to='/use-state'/>,
    },
    {
        path: '/use-state',
        element: <UseState/>,
        meta: {name: 'useState'}
    },
    {
        path: '/use-effect',
        element: <UseEffect/>,
        meta: {name: 'useEffect'}
    },
    {
        path: '/use-reducer',
        element: <UseReducer/>,
        meta: {name: 'useReducer'}
    },
    {
        path: '/timer',
        element: <Timer/>,
        meta: {name: 'timer'}
    },
    {
        path: '*',
        element: <NotFound/>
    }
]

export default router;