import React from 'react'
import Loadable from 'react-loadable'

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Loadable({
            loader: () => import('@pages/home'),
            loading(){
                return <div>loading</div>  //自己替换选用ui框架loading
            }
        }),
    }
]

export default routes