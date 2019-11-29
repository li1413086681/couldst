<style>
  .container {
    width: 100%;
    padding: 0px;
  }
  #top{
    width: 100%;
    height: 90px;
    padding-top:0px;
  }
  #home{
    font-size: 40px;
    position:relative;
    left:1000px;
  }
  #info {
    width: 400px;
    height: 500px;
    margin: auto;
    font-size: 20px;
  }
  #fuge{
    font-size: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>

<template>
  <div class="container">
    <div id="top">
      <center><h2>你好{{adname.adname}}{{adname.stid}}</h2></center>
    </div>
    <div id="info">
      <b>商品名称</b>
      <el-input v-model="gdname"></el-input><br /><br />
      <b>信息</b>
      <el-input v-model="gtkeywords"></el-input><br /><br />
      <b>图片</b>
      <input type="file" @change="getfile($event)" /><br /><br />
      <b>青铜价格</b>
      <el-input v-model="price1"></el-input><br /><br />
      <b>白银价格</b>
      <el-input v-model="price2"></el-input><br /><br />
      <b>黄金价格</b>
      <el-input v-model="price3"></el-input><br /><br />
      <b>白金价格</b>
      <el-input v-model="price4"></el-input><br /><br />
      <b>钻石价格</b>
      <el-input v-model="price5"></el-input><br /><br />
      <b>王者价格</b>
      <el-input v-model="price6"></el-input><br /><br />
      <br />
      <center><el-button style="width: 250px; color: white;background-color: #3385FF;font-size: 24px;" @click="insertgoods()">提交</el-button></center>
    </div>
    <div id="fuge">
      <a href="http://127.0.0.1:8086/#/system">返回</a>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        file1: "",
        imgname: "",
        gdname: "",
        gtkeywords: "",
        price: 0.0,
        list: [],
        adname: "",
        price1: 0.0,
        price2: 0.0,
        price3: 0.0,
        price4: 0.0,
        price5: 0.0,
        price6: 0.0

      }
    },
    methods: {
      getfile(event) {
        this.file1 = event.target.files[0];
        console.log(this.file1)
      },
      filea() {
        var ob = this;
        var formData = new FormData();
        formData.append("file1", this.file1);
        console.log(formData)
        var url = "http://192.168.1.103:8087/mgj/filecontroller/file"
        $.ajax(url, {
          data: formData,
          method: "post",
          async: false,
          contentType: false,
          processData: false, //服务器返回json格式数据
          xhrFields: {
            "withCredentials": true
          },

          success: function(result) {
            ob.imgname = result;
          },

        });
      },
      insertgoods() {
        var goodsprice = [{
            "utid": 1,
            "price": this.price1
          }, {
            "utid": 2,
            "price": this.price2
          }, {
            "utid": 3,
            "price": this.price3
          },
          {
            "utid": 4,
            "price": this.price4
          },
          {
            "utid": 5,
            "price": this.price5
          },
          {
            "utid": 6,
            "price": this.price6
          }
        ]

        this.filea();

        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/insertgoods"
        $.ajax(url, {
          data: {
            str: JSON.stringify(goodsprice),
            gdname: ob.gdname,
            gtkeywords: ob.gtkeywords,
            gimgurl: ob.imgname,
          },

          method: "post",
          dataType: "json",
          xhrFields: {
            "withCredentials": true
          },
          success: function(result) {

          }

        });
      },

      getsession() {
        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/getsession"
        $.ajax(url, {
          data: {},
          method: "post",
          dataType: "json",
          xhrFields: {
            "withCredentials": true
          },

          success: function(result) {
            ob.adname = result
          }

        })
      }
    },
    mounted: function() {
      this.getsession();
    }

  }
</script>
