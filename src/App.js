import React from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'
import routes from './router/index'

App.propTypes = {
    props: PropTypes.object
}


function App(){
    return (
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    )
}
export default App