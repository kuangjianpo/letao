<template>
  <div class="productDetail">
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
    >
      <mt-swipe :auto="4000">
        <mt-swipe-item
          v-for='item in proObj.pic'
          :key='item.id'
        >
          <img
            :src="'http://127.0.0.1:3000'+item.picAddr"
            alt=""
          >
        </mt-swipe-item>
      </mt-swipe>
      <p>{{proObj.proName}}</p>
      <p>价格：
        <span>&yen;{{proObj.price}}</span>
        <span>&yen;{{proObj.oldPrice}}</span>
      </p>
      <p>尺码：
        <span
          v-for='(item,index) in sizeArr'
          :key='index'
          :class="{'sizeBox':true,'active':userSize==item}"
          @click='userSize=item'
        >{{item}}</span>
      </p>
      <p>
        <mt-range
          v-model="userNum"
          :min='1'
          :max='10'
        >
          <div slot="start">数量：1&nbsp;</div>
          <div slot="end">&nbsp;10&nbsp;您选择了{{userNum}}双</div>
        </mt-range>
      </p>
    </mt-loadmore>
    <div class="lt_footer">
      <router-link
        to="/cart"
        class="fa fa-shopping-cart"
      ></router-link>
      <mt-button type="primary">立即购买</mt-button>
      <mt-button
        type="danger"
        @click="addCart"
      >加入到购物车</mt-button>
    </div>
  </div>
</template>

<script>
import { getProductById, addCart } from '@/api/index.js'
export default {
  data () {
    return {
      allLoaded: false,
      proObj: {},
      //   用户所选择的尺码
      userSize: '',
      //   用户所选择的数量
      userNum: 1,
      //   当前商品的id
      proId: '',
      sizeArr: []
    }
  },
  mounted () {
    var id = this.$route.params.id
    this.proId = id
    getProductById(id).then(res => {
      console.log(res)
      this.proObj = res
      //   "40-50"
      //   处理当前的产品的尺码
      this.sizeArr.length = 0
      var temp = res.size.split('-')
      for (var i = temp[0]; i <= temp[1]; i++) {
        this.sizeArr.push(i)
      }
    })
  },
  methods: {
    //   添加到购物车
    addCart () {
      addCart({
        productId: this.proId,
        num: this.userNum,
        size: this.userSize
      }).then(res => {
        console.log(res)
        // 如果等于400说明未登陆
        if (res.error === 400) {
          this.$toast({
            message: '您还没有登陆，请先登陆',
            position: 'bottom',
            duration: 2000
          })
          this.$router.push({
            name: 'Login', params: { redirectUrl: `/productDetail/${this.proId}` }
          })
        } else {
          // 这里注意小写
          this.$messagebox
            .confirm('添加成功，请问是否查看购物车?')
            .then(action => {
              //   跳转到购物车页面
              this.$router.push({ name: 'Cart' })
            })
        }
      })
    },
    loadTop () {
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {}
  }
}
</script>

<style lang='scss' scoped>
.mint-loadmore {
  padding-bottom: 60px;
  overflow: hidden;
  .mint-swipe {
    height: 300px;
    img {
      width: 100%;
      display: block;
    }
  }
  p {
    line-height: 30px;
    padding: 15px;
    border-bottom: 1px solid #ccc;
  }
  .sizeBox {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-left: 5px;
    border: 1px solid #ccc;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    &.active {
      background-color: yellow;
    }
  }
}

.lt_footer {
  background-color: #ddd;
  padding-top: 6px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  .fa {
    font-size: 22px;
    margin-left: 10px;
    color: #666;
  }
  button {
    float: right;
    padding: 6px 22px;
  }
}
</style>
