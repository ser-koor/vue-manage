<template>
  <div class="user">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <common-from
        :fromLabel="operateFromLabel"
        :from="operateFrom"
        :inline="true"
        ref="from"
      ></common-from>
      <div slot="footer" class="dialos-footer">
        <el-button @click="isShow=false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <common-from
        :fromLabel="fromLabel"
        :from="searchFrom"
        :inline="true"
        ref="from"
      >
        <el-button type="primary" @click="getList">搜索</el-button>
      </common-from>
    </div>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUSer"
    ></common-table>
  </div>
</template>

<script>
import CommonFrom from "@/components/common/CommonFrom"
import CommonTable from '@/components/common/user/CommonTable'

import { getUser } from '@/network/data.js'

// import { getUserEdit, getUserAdd } from "@/network/data.js"

export default {
  name: "User",
  components: {
    CommonFrom,
    CommonTable
  },
  data() {
    return {
      operateType: "add",
      isShow: false,
      operateFromLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input"
        },
        {
          model: "age",
          label: "年龄",
          type: "input"
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1
            },
            {
              label: "女",
              value: 0
            }
          ]
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date"
        },
        {
          model: "addr",
          label: "地址",
          type: "input"
        }
      ],
      operateFrom: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      fromLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input'
        }
      ],
      searchFrom: {
        keyword: ''
      },
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "age",
          label: "年龄"
        },
        {
          prop: "sexLabel",
          label: "性别"
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200
        },
        {
          prop: "addr",
          label: "地址",
          width: 320
        },
      ],
      config: {
        page: 1,
        total: 30
      }
    }
  },
  methods: {
    confirm() {
      if (this.operateType === 'edit') {
        this.$http.post('/user/edit', this.operateFrom).then(res => {
          console.log(res);
          this.isShow = false
          this.getList()
        })
      } else {
        this.$http.post('/user/add', this.operateFrom).then(res => {
          console.log(res);
          this.isShow = false
          this.getList()
        })
      }
      // if (this.operateType === 'edit') {
      //   getUserEdit().then(res => {
      //     console.log(res);
      //     this.isShow = false
      //   })
      // } else {
      //   getUserAdd().then(res => {
      //     console.log(res);
      //     this.isShow = false
      //   })
      // }
    },
    addUser() {
      this.isShow = true;
      this.operateType = 'add';
      this.operateFrom = {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      }
    },
    getList(name = '') {
      this.config.loading = true;
      name ? (this.config.page = 1) : ''
      getUser({
        page: this.config.page,
        name
      }) .then(({data: res}) => {
        console.log('sssss',res);
        this.tableLabel = res.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.count;
        this.config.loading = false
      })
    },
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateFrom = row
    },
    delUSer(row) {
      this.$confirm('此操作将永久删除该文件，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = row.id;
        this.$http.get('/user/del', {
          params: {id}
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getList()
        })
      })
    }
  },
  created() {
    this.getList()
  }
};
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>