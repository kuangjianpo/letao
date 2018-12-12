<template>
  <div class="search">
    <div class="searchArea">
      <mt-search v-model="searchKey"></mt-search>
      <mt-button
        size="small"
        @click='searchProduct'
      >搜索</mt-button>
      <!-- <mt-button size="small" @click='$router.push({"path":"/searchList/"+searchKey})'>搜索</mt-button> -->
      <mt-cell
        :to="{'name': 'SearchList', params: {'key': item}}"
        :title="item"
        v-for='(item,index) in histotyArr'
        :key='index'
      ><span @click.prevent.stop='delHistory(index)'>x</span></mt-cell>
      <span v-show='histotyArr.length === 0'>没有任何搜索历史数据</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchKey: '',
      histotyArr: []
    }
  },
  methods: {
    delHistory (index) {
      this.histotyArr = this.getHistory()
      this.histotyArr.splice(index, 1)
      localStorage.setItem('lt_history', JSON.stringify(this.histotyArr))
    },
    searchProduct () {
      // 将当前用户的搜索记录添加到本地存储
      var temp = this.getHistory()
      temp.push(this.searchKey)
      localStorage.setItem('lt_history', JSON.stringify(temp))
      this.$router.push({
        name: 'SearchList',
        params: { key: this.searchKey }
      })
    },
    getHistory () {
      var histotyStr = localStorage.getItem('lt_history')
      return JSON.parse(histotyStr || '[]')
    }
  },
  mounted () {
    this.$store.state.title = '搜索中心'
    this.histotyArr = this.getHistory()
  }
}
</script>

<style lang='scss' scoped>
.search {
  .searchArea {
    position: relative;
    .mint-search {
      height: auto;
    }
    .mint-button--small {
      height: 29px;
      border-radius: 0 4px 4px 0;
      background-color: pink;
      position: absolute;
      right: 3px;
      top: 7px;
      z-index: 999;
    }
  }
}
</style>
