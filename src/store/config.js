import {observable} from 'mobx'
import config from '@/config/config'

class ConfigStore {
    @observable config = config
}

export default new ConfigStore()