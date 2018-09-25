<template>
  <div>
    <div class="title">
      <h1> {{msg}} </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function(){
      return {
        msg: 'Welcome to my cart page!'
      }
    }
  }
</script>
