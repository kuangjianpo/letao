<template>
  <div class="cart">
    <mt-cell-swipe
      title=""
      v-for="(item, index) in cartList"
      :key="item.id"
      :right="[
            {
            content: '编辑',
            style: { background: 'blue', color: '#fff' , 'line-height':'112px' },
            handler: () => {
                editPopupVisible = true
                userNum = item.num
                userSize = item.size
                userSizeArr.length = 0
                id = item.id
                productObj = item
                var arr = item.productSize.split('-')
                for(var i = arr[0];i<=arr[1];i++){
                    userSizeArr.push(i+'')
                }
            }
            },
            {
            content: '删除',
            style: { background: 'red', color: '#fff' , 'line-height':'112px' },
            handler: () => {
              deleteCart(item.id,index)
            }
            }
        ]"
    >
      <div class="left">
        <img
          style='width:80px'
          src="../assets/images/product.jpg"
          alt=""
        >
        <mt-switch
          :value="item.statu?true:false"
          @change="changeStatu(item)"
        ></mt-switch>
      </div>
      <div class="right">
        <p>{{item.proName}}</p>
        <p><span>￥{{item.price}}</span> &nbsp;&nbsp;<del>￥{{item.oldPrice}}</del>&nbsp;&nbsp;X {{item.num}}双</p>
        <span>码数:{{item.size}}</span>
      </div>
    </mt-cell-swipe>
    <div class="allList">
      <span style='line-height:40px'>订单总金额：￥{{getTotalPrice}}</span>
      <mt-button
        type="danger"
        style="float:right"
      >生成订单</mt-button>
    </div>
    <mt-popup
      v-model="editPopupVisible"
      popup-transition="popup-fade"
    >
    <h2>修改尺码和数量</h2>
    <div class="userSize">尺码：<span
          v-for='value in userSizeArr'
          :key='value'
          :class='{"sizeBox":true,"activeSize":value===userSize}'
          @click='userSize=value'
        >{{value}}</span></div>
      <div class="userNum">
        <span>数量：</span>
        <mt-range
          v-model="userNum"
          value=1
          :min="1"
          :max="productObj.productNum"
          :step="1"
          :bar-height="5"
        >
          <div slot="start">1&nbsp;&nbsp;</div>
          <div slot="end">&nbsp;&nbsp;{{productObj.productNum}}</div>
        </mt-range>
        <span>您选择了{{userNum}}双</span>
      </div>
      <mt-button type="primary" style="float:right" @click="editCartSubmit">提交</mt-button>
    </mt-popup>
  </div>
</template>
<script>
import { getCartList, editCart, deleteCart } from '@/api'
export default {
  data () {
    return {
      id: '',
      cartList: [],
      userSizeArr: [],
      userNum: 1,
      productObj: {},
      userSize: '',
      editPopupVisible: false
    }
  },
  methods: {
    changeStatu (item) {
      item.statu = !item.statu
    },
    editCartSubmit () {
      editCart({
        id: this.id,
        size: this.userSize,
        num: this.userNum
      }).then(res => {
        if (res.success === true) {
          this.editPopupVisible = false
          this.productObj.num = this.userNum
          this.productObj.size = this.userSize
        }
      })
    },
    deleteCart (id, index) {
      deleteCart([id]).then(res => {
        if (res.success === true) {
          this.cartList.splice(index, 1)
        }
      })
    }
  },
  mounted () {
    getCartList().then(res => {
      if (res.error === 400) {
        this.$toast(res.message)
        this.$router.push({name: 'Login', params: {redirectUrl: '/cart'}})
      } else {
        console.log(res)
        this.cartList = res
      }
    })
  },
  computed: {
    getTotalPrice () {
      var total = 0
      this.cartList.forEach((value, index) => {
        total += value.statu ? value.price * value.num : 0
      })
      return Math.floor(total * 10) / 10
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  padding-bottom: 50px;
  .left {
    .mint-switch {
      transform: scale(0.7);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .right {
    padding-left: 10px;
    p:nth-of-type(1) {
      font-size: 15px;
    }
    p:nth-of-type(2) {
      font-size: 13px;
      line-height: 20px;
      span {
        color: red;
      }
    }
  }
  .allList {
    background-color: aquamarine;
    position: fixed;
    bottom: 66px;
    width: 100vw;
    font-weight: bold;
  }
  .mint-popup {
    width: 100%;
    padding: 20px;
    > h3 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
    }
    p {
        line-height: 40px;
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
    }
    .userNum {
        display: flex;
        line-height: 60px;
        > span {
        padding: 0px 10px;
        }
        .mt-range {
        flex: 1;
        margin-top: 16px;
        }
    }
  }
  .activeSize{
      background-color: pink;
  }
}
</style>
