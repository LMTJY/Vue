<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul　class="nav__left">
          <li> <router-link to='/'>首页</router-link> </li>
          <li> <router-link to='/admin'>管理</router-link> </li>
          <li> <router-link to='/cart'>购物车</router-link> </li>

        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>
