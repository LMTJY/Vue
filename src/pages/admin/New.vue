<template>
  <product-from  @save-product='addProduct' :model='model' :manufacturers='manufacturers'></product-from>
  <img src='...'
</template>

<script>
import ProductFrom from '../../components/product/ProductForm'

export default {
  data () {
    return {
      model: {},
      manufacturers: [
        {id: 1, name: 'apple'},
        {id: 2, name: '华为'},
      ]
    }

  },
  components: {
    'product-from': ProductFrom
  },
  methods: {
    addProduct (model) {
      console.log('-----New.vue addProduct-------')
      this.$store.dispatch('addProduct', model)
    }
  }
}

</script>
