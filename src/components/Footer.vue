<template>
  <div class="footer" v-show='$route.path.indexOf("/productDetail") === -1'>
    <mt-tabbar :selected.sync="selected" fixed>
      <mt-tab-item id="">
        <router-link to='/home'>
            <div class="myicon myicon-user"></div>
            首页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="">
        <router-link to='/categories'>
            <div class="myicon myicon-user"></div>
            分类
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="">
        <router-link to='/cart'>
            <div class="myicon myicon-user"></div>
            购物车
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="">
        <router-link to='/user'>
            <div class="myicon myicon-user"></div>
            会员中心
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.isActive{
  color: skyblue;
}
</style>
