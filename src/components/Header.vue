<template>
  <div class="header">
    <mt-header
      :title="title"
      fixed
    >
      <div slot="left">
        <a href="javascript:history.back()">
          <mt-button
            icon="back"
            v-show="$route.path!=='/home'"
          >返回</mt-button>
        </a>
      </div>
      <mt-button slot="right" @click="$router.push({'name':'Search'})">搜索</mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
