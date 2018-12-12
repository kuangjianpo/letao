<template>
  <div class="searchList">
    <div class="lt_searchBox">
      <form action="">
        <input
          type="text"
          class="lt_searchKey"
        >
        <span class="lt_searchBtn">搜索</span>
      </form>
    </div>
    <!-- 排序结构 -->
    <div class="lt_sorder">
      <a
        href="javascript:;"
        data-order="time"
      >上架时间
        <span class="fa fa-angle-down"></span>
      </a>
      <a
        href="javascript:;"
        data-order="price"
        @click='handlePrice'
        :class='{"active":isActive===0}'
      >价格
        <span :class="{'fa':true,'fa-angle-down':hasPrice,'fa-angle-up':!hasPrice}"></span>
      </a>
      <a
        href="javascript:;"
        data-order="num"
        @click='handleNum'
        :class='{"active":isActive===1}'
      >销量
        <span :class="{'fa':true,'fa-angle-down':hasNum,'fa-angle-up':!hasNum}"></span>
      </a>
      <a
        href="javascript:;"
        data-order="discount"
      >折扣
        <span class="fa fa-angle-down"></span>
      </a>
    </div>
    <mt-loadmore
      :auto-fill='false'
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
    >
      <router-link
        :to="'/productDetail/'+item.id"
        class="lt_proBox"
        v-for='item in resultList'
        :key='item.id'
      >
        <img
          :src="'http://127.0.0.1:3000/'+item.pic[0].picAddr"
          alt=""
        >
        <p class="line2">{{item.proName}}</p>
        <p>
          <span>&yen;{{item.price}}</span>
          <del>&yen;{{item.oldPrice}}</del>
        </p>
        <button class="mint-button mint-button--primary mint-button--small">
          <label class="mint-button-text">立即购买</label>
        </button>
      </router-link>
    </mt-loadmore>
  </div>
</template>

<script>
import { getSearchList } from '@/api/index.js'
export default {
  data () {
    return {
      isActive: '',
      hasActive: false,
      hasPrice: true,
      hasNum: true,
      allLoaded: false,
      resultList: [],
      key: '',
      page: 1,
      pageSize: 2,
      priceSortType: 1
    }
  },
  created () {
    this.$store.state.title = '搜索结果'
  },
  mounted () {
    this.key = this.$route.params.key
    getSearchList({
      proName: this.key,
      page: this.page,
      pageSize: this.pageSize,
      price: this.priceSortType
    }).then(res => {
      this.resultList = res.data
    })
  },
  methods: {
    // 处理price的样式
    handlePrice () {
      this.hasPrice = !this.hasPrice
      this.isActive = 0
      this.hasNum = true
      // 获取排序类型
      this.priceSortType = this.hasPrice ? 2 : 1
      // 本质上来说，我们单击排序之后，需要重新获取数据，并添加我们的排序方式，但是我们需要注意的是：排序之后还要能够实现上拉加载更多 数据的操作
      // 将原先的数据中的值清除
      this.resultList.length = 0
      // 重新当前页码为1
      this.page = 1
      // 允许再次进行上拉加载更多数据
      this.allLoaded = false
      // 再进行数据的获取
      getSearchList({
        proName: this.key,
        page: this.page,
        pageSize: this.pageSize,
        price: this.priceSortType
      }).then(res => {
        this.resultList = res.data
      })
    },
    handleNum () {
      this.hasNum = !this.hasNum
      this.isActive = 1
      this.hasPrice = true
    },
    loadBottom () {
      // 让页码+1
      this.page++
      getSearchList({
        proName: this.key,
        page: this.page,
        pageSize: this.pageSize,
        price: this.priceSortType
      }).then(res => {
        this.resultList.push(...res.data)
        // 判断本次请求是否还能够获取到结果集，如果没有，说明数据已经完全获取完毕，就不再需要上拉加载更多的操作了
        if (res.data.length === 0) {
          this.allLoaded = true
        }
        this.$refs.loadmore.onBottomLoaded()
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.line2 {
  display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3; /*限制在一个块元素显示的文本的行数*/
  -webkit-box-orient: vertical; /*设置或检索伸缩盒对象的子元素的排列方式*/
}
.mint-loadmore {
  padding-bottom: 60px;
  overflow: hidden;
}
.lt_searchBox {
  padding: 10px 10px 0;
  position: relative;
  input {
    width: 100%;
    height: 30px;
    border: none;
    border: 1px solid #1a70a6;
    border-radius: 5px;
    margin-bottom: 0px;
  }
  span {
    width: 60px;
    height: 30px;
    background-color: #1a70a6;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 15px;
    text-align: center;
    line-height: 30px;
  }
}
.lt_sorder {
  width: 100%;
  display: flex;
  background-color: #ddd;
  margin: 10px 0px;
  > a {
    flex: 1;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    color: #333;
    -webkit-tap-highlight-color: transparent;
    &.active {
      color: orange;
    }
  }
}
.lt_proBox {
  width: 48%;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 2px #ccc;
  float: left;
  margin-bottom: 10px;
  > img {
    width: 100%;
    display: block;
  }
  > p {
    font-size: 13px;
    padding: 0px 10px;
    text-align: center;
    color: #888;
    line-height: 16px;
  }
  > p:nth-of-type(2) {
    line-height: 30px;
    > span {
      color: #e92322;
    }
  }
  > button {
    display: block;
    margin: 10px auto;
  }
}
.lt_proBox:nth-of-type(even) {
  margin-left: 4%;
}
</style>
