<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>产品名称</label>
        <input type="text" placeholder="产品名称" v-validate="'required'"　v-model="model.name" name="name" />
        <span class="small text-danger" v-show="errors.has('name')">必须添入产品名称</span>
      </div>
      <div class="form-group">
        <label>产品价格</label>
        <input type="number" placeholder="产品价格" v-validate="'required'" v-model="model.price" name="price" />
        <span class="small text-danger" v-show="errors.has('price')">必须设置产品价格</span>
      </div>
      <div class="form-group">
        <label>产品生产商</label>
        <select type="text" v-model="model.manufacturer"　v-validate="'required'"  name="manufacturer">
          <option v-for='manufacturer in manufacturers' :value='manufacturer.id'>
            {{manufacturer.name}}
          </option>
        </select>
        <span class="small text-danger" v-show="errors.has('manufacturer')">必须选择产品厂家</span>
      </div>
      <div class="form-group">
        <label>产品描述</label>
        <input type="text" placeholder="产品描述"　v-model="model.description" name="description" />
      </div>
      <div class="form-group">
        <button class="button">
          添加产品
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model', 'manufacturers'],
  methods: {
    saveProduct () {
      this.$validator.validate().then( result => {
        if(!result){
          console.log('--------error----------')
          return;
        }
        this.$emit('save-product', this.model)
      })

    }
  }


}

</script>
