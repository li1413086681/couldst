<template>
  <div style="width: 1200px;height: 600px; margin: auto;">
    <div class="lunbo" v-for="(n,i) in list" :src="n" v-if="i==show" :style="n.urlimg"></div>
    <div style="height: 300px;">
      <el-table :data="list" style="width:1200px;position: absolute;">
        <el-table-column prop="lid" label="轮播" width="180">
        </el-table-column>
        <el-table-column prop="lname" label="图片名称" width="180">
        </el-table-column>
        <el-table-column prop="urlimg2" label="图片">
          <template slot-scope="scope">
            <div class="demo-image">
              <div class="block">
                <el-image style="width: 100px; height: 150px" :src="scope.row.urlimg2" :fit="fill"></el-image>
              </div>
            </div>

          </template>

        </el-table-column>
        <el-table-column prop="ltime" label="轮播时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button @click="chuanzhi(scope.row.lid)">Click Me</el-button>
            </div>
          </template>
        </el-table-column>
        </el-table-column>
      </el-table>
      <div style="display: flex; margin-top: 20px; height: 100px; position: absolute;">
        <transition name="el-fade-in-linear">
          <div v-show="show1" class="transition-box">
            <div style="width: 800px; height: 240px;">
              <span style="font-size: 25px;">轮播图片选择:</span>
              <br /><br />
              <div class="demo-image" v-for="(a,index) in imglist" @click="choose(index,a.climgurl)">
                <span style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{a.clname}}</span>

                <div :class="{'border-img':index==value}">
                  <el-image style="width: 100px; height: 150px" :src="a.urlimg" :fit="cover"></el-image>
                </div>
                 <h4>出价: {{a.clprice}} ￥</h4>
              </div>
            </div>
            <br /><br />

            <div style="width: 800px; height: 240px;text-align: center;">
              <span style="margin-top: 200px;">轮播时间:</span>
              <el-input style="width: 300px;" v-model="time"></el-input><br /><br />
              <el-button @click="show1 = !show1">返回</el-button>&nbsp;&nbsp;&nbsp;&nbsp;<el-button @click="update()">修改</el-button>
            </div>
          </div>

        </transition>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data: function() {
      return {
        bggimg: [],
        show: 0,
        time1: "",
        time2: "",
        time3: "",
        time4: "",
        ttime1: "",
        ttime2: "",
        ttime3: "",
        ttime4: "",
        list: [],
        show1: false,
        imglist: [],
        value: 5,
        iimgurl: "",
        time: "",
        value1: ""
      }
    },
    methods: {
      lunbo() {
        var ob = this
        ob.show = 0;
        window.setTimeout(function() {
          ob.show = 1
          window.setTimeout(function() {
            ob.show = 2
            window.setTimeout(function() {
              ob.show = 3
              window.setTimeout(function() {
                ob.lunbo()
              }, ob.time4)

            }, ob.time3)

          }, ob.time2)

        }, ob.time1)
      },
      choose(a, b) {
        this.value = a;
        this.iimgurl = b;
      },
      getimg() {
        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/dogetimg"
        $.ajax(url, {
          data: {

          },
          method: "post",
          dataType: "json", //服务器返回json格式数据
          xhrFields: {
            "withCredentials": true
          },
          success: function(result) {
            ob.time1 = result[0].ltime
            ob.time2 = result[1].ltime
            ob.time3 = result[2].ltime
            ob.time4 = result[3].ltime
            ob.list = result
            for (var a in result) {
              ob.list[a].urlimg = {
                "background-image": "url('http://127.0.0.1:8087/mgj/tp/" + result[a].limgurl + "')"
              }
              ob.list[a].urlimg2 =
                "http://127.0.0.1:8087/mgj/tp/" + result[a].limgurl + ""

            }
            ob.lunbo()
          },

        });
      },
      chuanzhi(a) {
        this.show1 = !this.show1;
        this.value1 = a;
      },
      getimgurl() {
        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/doselectimg"
        $.ajax(url, {
          data: {

          },
          method: "post",
          dataType: "json", //服务器返回json格式数据
          xhrFields: {
            "withCredentials": true
          },
          success: function(result) {
            ob.imglist = result
            for (var a in result) {
              ob.imglist[a].urlimg =
                "http://127.0.0.1:8087/mgj/tp/" + result[a].climgurl + ""
            }



          },


        });
      },
      update() {
        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/doupdate"
        $.ajax(url, {
          data: {
            lid: ob.value1,
            limgurl: ob.iimgurl,
            ltime: ob.time
          },
          method: "post",
          dataType: "json", //服务器返回json格式数据
          xhrFields: {
            "withCredentials": true
          },
          success: function(result) {
            if (result) {
              ob.show1 = !ob.show1
              ob.getimg();
            }


          },


        });
      }

    },
    mounted: function() {
      this.getimg()
      this.getimgurl()

    },

  }
</script>

<style>
  .lunbo {
    width: 200px;
    height: 300px;
    margin: auto;
  }

  .transition-box {
    width: 800px;
    height: 550px;
    border-radius: 4px;
    background-color: yellow;
    color: #000000;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-left: 150px;
  }

  .demo-image {
    float: left;
    margin-left: 30px;
    width: 100px;
    height: 150px;

  }

  .border-img {
    box-shadow: 0px 0px 8px #888888;
  }
</style>
