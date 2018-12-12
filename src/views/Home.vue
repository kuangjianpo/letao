<template>
  <div class="home">
    <mt-swipe
      :auto="2000"
      class="banner"
    >
      <mt-swipe-item>
        <router-link to=''>
          <img
            src="../assets/images/banner1.png"
            alt=""
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to=''>
          <img
            src="../assets/images/banner2.png"
            alt=""
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to=''>
          <img
            src="../assets/images/banner3.png"
            alt=""
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to=''>
          <img
            src="../assets/images/banner4.png"
            alt=""
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to=''>
          <img
            src="../assets/images/banner5.png"
            alt=""
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to=''>
          <img
            src="../assets/images/banner6.png"
            alt=""
          >
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item>
        <router-link to=''>
          <img
            src="../assets/images/banner7.png"
            alt=""
          >
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <div class="nav clearfix">
      <router-link to=''>
        <img
          src="../assets/images/nav1.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/nav2.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/nav3.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/nav4.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/nav5.png"
          alt=""
        >
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/nav2.png"
          alt=""
        >
      </router-link>
    </div>
    <div class="product clearfix">
      <router-link to=''>
        <img
          src="../assets/images/product.jpg"
          alt=""
        >
        <p>超级无敌low三杠阿迪达斯保证你穿上脚就被同学或者同事打到你妈妈都不知道是谁</p>
        <div class="price"><span>&yen;500.00</span> <del>&yen;600.00</del></div>
        <mt-button
          style="margin:10px"
          type="primary"
        >立即购买</mt-button>
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/product.jpg"
          alt=""
        >
        <p>超级无敌low三杠阿迪达斯保证你穿上脚就被同学或者同事打到你妈妈都不知道是谁</p>
        <div class="price"><span>&yen;500.00</span> <del>&yen;600.00</del></div>
        <mt-button
          style="margin:10px"
          type="primary"
        >立即购买</mt-button>
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/product.jpg"
          alt=""
        >
        <p>超级无敌low三杠阿迪达斯保证你穿上脚就被同学或者同事打到你妈妈都不知道是谁</p>
        <div class="price"><span>&yen;500.00</span> <del>&yen;600.00</del></div>
        <mt-button
          style="margin:10px"
          type="primary"
        >立即购买</mt-button>
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/product.jpg"
          alt=""
        >
        <p>超级无敌low三杠阿迪达斯保证你穿上脚就被同学或者同事打到你妈妈都不知道是谁</p>
        <div class="price"><span>&yen;500.00</span> <del>&yen;600.00</del></div>
        <mt-button
          style="margin:10px"
          type="primary"
        >立即购买</mt-button>
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/product.jpg"
          alt=""
        >
        <p>超级无敌low三杠阿迪达斯保证你穿上脚就被同学或者同事打到你妈妈都不知道是谁</p>
        <div class="price"><span>&yen;500.00</span> <del>&yen;600.00</del></div>
        <mt-button
          style="margin:10px"
          type="primary"
        >立即购买</mt-button>
      </router-link>
      <router-link to=''>
        <img
          src="../assets/images/product.jpg"
          alt=""
        >
        <p>超级无敌low三杠阿迪达斯保证你穿上脚就被同学或者同事打到你妈妈都不知道是谁</p>
        <div class="price"><span>&yen;500.00</span> <del>&yen;600.00</del></div>
        <mt-button
          style="margin:10px"
          type="primary"
        >立即购买</mt-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$store.state.title = '乐淘商城购物'
  }
}
</script>
<style lang="scss" scoped>
.banner {
  height: 200px;
  img {
    width: 100%;
    display: block;
  }
}
.nav {
  // width: 100%;
  margin: 10px;
  a {
    float: left;
    width: 33.33%;
    display: block;
    img {
      width: 100%;
      display: block;
    }
  }
}
.product {
  text-align: center;
  color: #888;
  font-size: 12px;
  a {
    width: 46%;
    float: left;
    display: block;
    border: 1px solid #ccc;
    box-shadow: 0 0 2px 1px #ddd;
    margin: 2%;
    img {
      width: 100%;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 24px;
      padding: 10px;
    }
    .price {
      span {
        color: red;
      }
    }
  }
}
</style>
