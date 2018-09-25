<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li> <router-link :to="{ name: 'Products', params: {} }">浏览产品</router-link> </li>
            <li> <router-link :to="{ name: 'New', params: {} }">添加新产品</router-link> </li>

          </ul>
        </div>

        <router-view></router-view>

      </div>

    </div>
  </div>
</template>
