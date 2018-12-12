<template>
  <div class="categories">
    <div class="left">
      <mt-navbar
        class="page-part mint-navbar"
        v-model="selected"
      >
        <mt-tab-item
          :id="item.id"
          v-for="item in firstCateList"
          :key="item.id"
        >
          {{item.categoryName}}
        </mt-tab-item>
      </mt-navbar>
    </div>
    <div class="right">
      <mt-tab-container
        class="mint-content"
        v-model="selected"
      >
        <mt-tab-container-item
          :id="item.id"
          v-for="item in firstCateList"
          :key="item.id"
        >
          <router-link to='' v-for="item2 in secondCateList" :key="item2.id">
            <img :src="'http://127.0.0.1:3000'+item2.brandLogo" alt="">
            <p>{{item2.brandName}}</p>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import { getFirstCate, getSecondCate } from '@/api'
export default {
  data () {
    return {
      selected: '',
      firstCateList: [],
      secondCateList: []
    }
  },
  watch: {
    selected (newValue, oldValue) {
      getSecondCate(newValue).then(res => {
        console.log(res)
        this.secondCateList = res.rows
      })
    }
  },
  mounted () {
    this.$store.state.title = '商品分类'
    getFirstCate().then(res => {
      console.log(res)
      this.firstCateList = res.rows
      this.selected = res.rows[0].id
    })
  }
}
</script>
<style lang="scss" scoped>
.categories {
  display: flex;
  height: 100%;
  .left {
    // height: 100%;
    width: 100px;
    .mint-navbar {
      display: flex;
      flex-direction: column;
    }
  }
  .right {
    height: 100%;
    flex: 1;
    .mint-content {
      height: 100%;
      a {
        width: 33.33%;
        float: left;
        p{
          text-align: center;
        }
        img{
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
