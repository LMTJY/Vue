<template>
  <div>
    <p>{{count}}</p>
    <p>
      <button @click="increment({amount: 10})">+ </button>
      <button @click="decrement({amount: 10})">- </button>
      <button @click="incrementAsync({amount: 10})">+ async </button>
    </p>
    <p>message: <input type="text" v-model='message' />   </p>
    <p>{{doneTodosCount}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    count: function () { //映射store中的数据
    　 return this.$store.state.count
    },
    message: {
      get () {
        return this.$store.state.message
      },
      set (val) {
        this.$store.commit('updateMessage', val)
      }
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    }
  },
  methods: {
    increment (payload) {　//修改store中的数据, 必须使用commit
      this.$store.commit('increment', payload) //参数是在store定义好的方法名称
    },
    decrement: function(payload){
      this.$store.commit('decrement', payload)
    },
    incrementAsync (payload) {
      this.$store.dispatch('incrementAsync', payload)
    },
  }

}

</script>
