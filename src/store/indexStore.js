import { observable, action } from 'mobx'

class indexStore {
    @observable userInfo = {} //当前用户信息
    @action updateUserInfo( data = {} ){//更新当前用户信息(取主信息)
        this.userInfo = data
    }
}
export default new indexStore()