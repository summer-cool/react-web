import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from '@tinper/next-ui'

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Loadable({
            loader: () => import('@pages/home'),
            loading(){
                return <Spin fullScreen spinning={true}></Spin>
            }
        }),
    }
]

export default routes