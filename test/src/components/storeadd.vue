<style>
  .container {
    width: 1200px;
    padding: 0px;
  }
  #top{
    width: 100%;
    height: 90px;
    background-color: white;
    padding-top: 12px;
  }
  #top > img{
    width: 120px;
    height: 85px;
    margin-left: -1000px;
    margin-top: -12px;
  }
  #home{
    font-size: 40px;
    position:relative;
    left:1000px;
  }
  #picture {
    width: 400px;
    height: 500px;

  }
</style>

<template>
  <div class="container">
    <div id="top">
      <img src="../../static/imgs/title.png" />
      你好{{adname.adname}}{{adname.stid}}
      <i id="home" class="glyphicon glyphicon-home"></i>
    </div>
    <div id="picture">
      <span>商品名称</span>
      <el-input v-model="gdname"></el-input>
      <span>信息</span>
      <el-input v-model="gtkeywords"></el-input>
      <span>图片</span>
      <input type="file" @change="getfile($event)" />
      <span>原始价格</span>
      <el-input v-model="price"></el-input>

      <br />
      <el-button @click="insertgoods()">提交</el-button>
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

        adname: ""

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
        this.filea()
        
        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/insertgoods"
        $.ajax(url, {
          data: {
            gdname: ob.gdname,
            gtkeywords: ob.gtkeywords,
            gimgurl: ob.imgname,
            price: ob.price,
            utid: 1
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
