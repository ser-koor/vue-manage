<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="changeIsCollapse"></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <el-breadcrumb separator="/" style="margin-left: 15px">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" @click.native="toPath(item.path)">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="hover" size="mini">
        <span>
          <img :src="UserImg" class="user">
        </span>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader',
  data() {
    return {
      UserImg: require('@/assets/images/user.png'),
      isCollapse: false,
      tags: this.$store.state.tabList
    }
  },
  created() {
    // this.$bus.$emit('changeIsCollapse', this.isCollapse)
  },
  methods: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse
      this.$bus.$emit('changeIsCollapse', this.isCollapse)
    },
    logOut() {
      this.$store.commit('user/clearToken')
      this.$store.commit('clearMenu')
      this.$router.push('/login')
    },
    toPath(path) {
      this.$router.push(path).catch(err => err)
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
  header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;

  }

  .l-content {
    display: flex;
    align-items: center;
    // vertical-align: middle;
    h3 {
      margin-left: 20px;
    }
  }

  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
</style>