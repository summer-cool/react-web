import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
//引入全局状态管理
import stores from './store/index'
//引入全局样式
import '@assets/style/common'
import '@assets/style/reset'
//引入入口文件
import App from './App'
//引入多语言
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './lang'

if(!window.URLSearchParams){ //兼容IE11
    window.URLSearchParams = require('url-search-params')
}
/**
 * @description: 多语配置-可根据项目需要删除或保留配置(包括依赖及lang文件夹)
 */
function initLang(){
    const LANG = 'zh-cn'
    window.locale = LANG
    document.documentElement.setAttribute('lang', LANG)
    
    i18n.use(initReactI18next).init({
        resources,
        fallbackLng: 'zh_cn',
        lng: LANG, //当前语言
        interpolation: {
            escapeValue: false
        }
    })
}
function init(){
    initLang()
    renderDom()
}
/**
 * @description: 渲染函数
 */
const renderDom = () => {//
    window.render = () => {
        ReactDom.render(
            <Provider {...stores}>
                <App />
            </Provider>,
            document.querySelector('#app')
        )
    }
    window.render()
}

init()



