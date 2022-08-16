<template>
  <div class="tag">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable = "tag.name !== 'home'"
      :type="tag.type"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="samll">
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  data() {
    return {
      // tags: this.$store.state.tabList
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tabList
    })
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu(tag) {
      this.$router.push({name: tag.name})
    },
    handleClose(tag, index) {
      const length = this.tags.length - 1;
      this.close(tag);
      if (tag.path !== this.$route.path) {
        return;
      }
      if (index === length) {
        this.$router.push(this.tags[index-1].path)
      } else {
        this.$router.push(this.tags[index].path)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tag {
  padding: 15px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>