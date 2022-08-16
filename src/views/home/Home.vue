<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover" >
        <div class="user">
          <img :src="userImg" alt="">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间<span>2022-08-04</span></p>
          <p>上次登录地点<span>深圳</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 400px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, index) in tableLabel"
            :key="index"
            :prop="index"
            :label="val">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="15" style="margin-top: 20px">
      <div class="hnum">
        <el-card v-for="item in countData" :key="item.name" :body-style="{display: 'flex', padding: 0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
          <div class="detail">
            <p class="num">{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 235px">
        <div style="height: 235px" ref="echarts"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 220px"></el-card>
        <el-card style="height: 220px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getHome } from "@/network/data.js"
import * as echarts from 'echarts'

export default {
  name: "Home",
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
      tableData: [],
      tableLabel: {
          name: '课程',
          todayBuy: '今日购买',
          monthBuy: '本月购买',
          totalBuy: '总购买'
        },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ]
    }
  },
  mounted() {
    getHome().then(res => {
      const { code, data } = res.data
      if (code === 20000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        const xData = order.date;
        const keyArray = Object.keys(order.data[0]);
        const series = [];
        keyArray.forEach(item => {
          series.push({
            name: item,
            data: order.data.map(value => value[item]),
            type: 'line'
          })
        });
        const option = {
          xAxis: {
            data: xData
          },
          yAxis: {},
          legend: {
            data: keyArray
          },
          series
        }
        //初始化echarts
        const E = echarts.init(this.$refs.echarts);
        E.setOption(option)
      }
    console.log(res);
    })
  }
};
</script>

<style scoped>

</style>