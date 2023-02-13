import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.scss'
import { observer, inject } from 'mobx-react'
import { axiosTest } from '@models'

Main.propTypes = {
    props: PropTypes.object,
}

/**
 * @description: 主入口
 * @param {type}
 * @return {type}
 */
function Main(props){
    let cls = classnames({
        [styles.home]: true,
    })
    useEffect(() => {
      const { indexStore, configStore } = props
      console.log(indexStore,configStore,'这是store数据')
      getData()
    }, [])
    const getData = async()=>{
      let { code = 200, data = {} } = await axiosTest({user:"1"})
      if(code == 200){
        //.....
      }
    }
    return (
        <div className={cls}>
            hello world
        </div>
    )
}

export default inject('indexStore','configStore')(observer(Main))