<template>
  <div class="login">
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="loginform.username"
    ></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="loginform.password"
    ></mt-field>
    <mt-button type="primary" @click="userLogin">确认</mt-button>
    <mt-button type="danger">取消</mt-button>
  </div>
</template>
<script>
import {login} from '@/api'
export default {
  data () {
    return {
      loginform: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin () {
      login(this.loginform).then(res => {
        if (res.success === true) {
          this.$router.push({path: this.$route.params.redirectUrl})
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
