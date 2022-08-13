<template>
  <div id="mains">
    <el-container style="height: 100%">
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '../../src/components/common/aside/CommonAside'
import CommonHeader from '../../src/components/common/header/CommonHeader'

export default {
  name: "Main",
  components: {
    CommonAside,
    CommonHeader
  }
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #999;
}

.el-main {
  padding: 0;
  // text-align: center;
}

</style>