import React from 'react'
import PropTypes from 'prop-types'

import css from './index.module.scss'

Main.propTypes = {
    props: PropTypes.object,
    text:PropTypes.string
}
Main.defaultProps = {
    text:lang.template('P_YS_FED_FW_0000022064')
}
function Main(props){
    return (
        <div className={css['yy-empty']}>
            <div className={css['yy-empty-content']}>
                <div className={`${css['yy-empty-img']},${css['yy-empty-img-data']}`}>
                    <img className={css['yy-empty-img']} src='https://ec-u8c-daily.yyuap.com/static/img/tip_data.1c41e81.png' />
                </div>
                <p>{props?.text}</p>
            </div>
        </div>
    )
}

export default Main