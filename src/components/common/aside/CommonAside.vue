<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#565c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
  >
    <h3 v-show="isShow">后台管理系统</h3>
    <el-menu-item
      v-for="item in onchildren"
      :index="item.path"
      :key="item.path"
      @click="ToClick(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>

    <el-submenu v-for="item in haschildren" :index="item.label" :key="item.label">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>

      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path" @click="ToClick(subItem)">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      isCollapse: false,
      meun: []
    };
  },
  created() {
    this.$bus.$on("changeIsCollapse", v => (this.isCollapse = v));
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    ToClick(item) {
      // console.log(path);
      this.$router.push(item.path).catch(err => err);
      this.$store.commit('selectMenu', item)
    }
  },
  computed: {
    onchildren() {
      return this.asynMenu.filter(item => !item.children);
    },
    haschildren() {
      return this.asynMenu.filter(item => item.children);
    },
    isShow() {
      return this.isCollapse ? false : true;
    },
    asynMenu() {
      return this.$store.state.menu
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}

.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>