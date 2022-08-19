<template>
  <div class="login">
    <el-form
    ref="form"
    status-icon
    :model="form"
    :rules="rules"
    label-width="100px"
    class="login-container">
      <h3 class="login_title">系统登录</h3>
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username">
          <el-input type="input" v-model="form.username" autocomplete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        label-width="80px"
        prop="password"
        class="password">
          <el-input type="input" v-model="form.password" autocomplete="off" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" class="login_submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Mock from 'mockjs'
import { getMenu } from '@/network/data.js'

export default {
  name: 'Login',
  data() {
    return {
      form: {},
      rules: {
          username: [
            {required: true, message: "请输入用户名", trigger: "blur"},
            {
              min: 3,
              message: "用户长度不能小于3位",
              trigger: "blur"
            }
          ],

          password: [
             {required: true, message: "请输入密码", trigger: "blur"}
          ]
        }

    }
  },
  methods: {
    login() {
      // console.log('155', this.form);
      getMenu(this.form).then(res => {
        console.log('rrree1',res);
        if (res.data.code === 20000) {
          this.$store.commit('clearMenu')
          this.$store.commit('setMenu', res.data.data.menu)
          this.$store.commit('user/setToken', res.data.data.token)
          this.$store.commit('addMenu', this.$router)
          this.$router.push({name: 'home'})
        } else {
          this.$message.warning(res.data.data.message)
        }
      })
      const token = Mock.Random.guid()
      console.log(token);
      this.$store.commit('user/setToken', token)
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px;
  text-align: center;
  color: #505458;
}
.login_submit {
  margin: 10px auto 0;
  // position: relative;
  // transform: translate(-50%, 0);
  // margin: 10px 50%;
  // display: block;
  // width: 60px;
  // height: 40px;
  // margin: 10px auto;
}
</style>