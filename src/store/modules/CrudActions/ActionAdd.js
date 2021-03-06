import axios from 'axios'
import store from '@/store'

export default {
  actions: {
    addItems (context, payload) {
      store.dispatch('showLoader')
      return new Promise((resolve, reject) => {
        axios.post(`http://localhost:3000/${payload.moduleName}`, payload.data)
          .then(res => {
            store.dispatch('hideLoader')
            resolve(res)
          })
          .catch(err => {
            store.dispatch('hideLoader')
            reject(err)
          })
      })
    }
  }
}
