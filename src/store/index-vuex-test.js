import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//建立一个Ｓtore对象，　用于存储vue程序的所有状态
export default new Vuex.Store({
  state: {　//表示程序运行的所有状态
    count: 0,
    message: '',
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
      {id: 3, text: '...', done: true},
    ]
  },
  getters: { //对数据进行加工统计，　但不可以修改数据
    doneTodos:  state => {
      //todos: 集合，　todo: 函数的参数表示集合中的单元　
      return state.todos.filter(todo => todo.done  )
    },
    doneTodosCount:  (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: { //表示对状态的修改, 同步修改　
    increment: (state, payload) => {
      state.count += payload.amount;
    },
    decrement: (state, payload) => {
      state.count -= payload.amount;
    },
    updateMessage: (state, val) => {
      state.message = val
    }
  },
  actions: { //异步操作
    incrementAsync: (context, payload) => {
      setTimeout( () => {
        context.commit('increment', payload)
      }, 1500 )
    }
  }

})
