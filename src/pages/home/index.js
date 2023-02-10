import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.scss'
import { observer, inject } from 'mobx-react'

Main.propTypes = {
    props: PropTypes.object,
}

/**
 * @description: 主入口
 * @param {type}
 * @return {type}
 */
function Main(){
    let cls = classnames({
        [styles.home]: true,
    })
    useEffect(() => {

    }, [])

    return (
        <div className={cls}>
            hello world
        </div>
    )
}

export default inject('indexStore')(observer(Main))