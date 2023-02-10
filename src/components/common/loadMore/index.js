import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'

Main.propTypes = {
    call: PropTypes.func,
    status: PropTypes.string,//loading状态
}
function Main(props) {
    const handelClick = () => {
        if(props?.status !== 'loading'){
            props?.call && props?.call()
        }
    }
    return(
        <div
            onClick={() => { handelClick() }}
            className={css['load-more']}>
            loading...
        </div>
    )
}

export default Main