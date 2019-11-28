<template>
  <div style="width: 1200px;height: 300px; margin: auto;">
    <el-carousel :interval="1000" type="card" height="300px">
      <el-carousel-item v-for="(list,item) in bggimg" :key="item" :style="list">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        bggimg: []

      }
    },
    methods: {

    },
    mounted: function() {
      this.bggimg.push("backgroundImage:url(../../static/n1.jpg)")
      this.bggimg.push("backgroundImage:url(../../static/n2.jpg)")
      this.bggimg.push("backgroundImage:url(../../static/n3.jpg)")
    }
  }
</script>

<style>
  .el-carousel__item{
    background-size: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
