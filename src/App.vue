<template>
  <div id="app">
    <lt-header></lt-header>
    <lt-content></lt-content>
    <lt-footer></lt-footer>
  </div>
</template>

<script>
import header from '@/components/Header.vue'
import footer from '@/components/Footer.vue'
import content from '@/components/Content.vue'
export default {
  components: {
    'lt-header': header,
    'lt-footer': footer,
    'lt-content': content
  },
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
