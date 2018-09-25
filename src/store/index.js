import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {API_BASE} from '../config'

Vue.use(Vuex)

//建立一个Ｓtore对象，　用于存储vue程序的所有状态
export default new Vuex.Store({
  state: {　//表示程序运行的所有状态
    product: {},
    products: []
  },
  getters: { //对数据进行加工统计，　但不可以修改数据

  },
  mutations: { //表示对状态的修改, 同步修改　
    add_product_success: (state, payload) => {
      state.product = payload
      state.products.push(payload)

    }
  },
  actions: { //异步操作
    addProduct: (context, payload) => {
      //发出http request
      axios.post(`${API_BASE}/products` , payload).then(response => {
          context.commit('add_product_success', response.data)

      }).catch(error => {
          console.log(error)
      })

    }
  }

})
