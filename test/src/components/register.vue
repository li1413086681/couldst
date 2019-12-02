<style>
  .container{
    width:100%;
  }
  #center{
    font-size: 20px;
  }
  #center > input{
    height: 40px;
    width: 300px;
  }
  #logname{
    position: absolute;
    top: 70px;
    right: 300px;
    color: gray;
  }
  #password{
    position: absolute;
    right: 390px;
    top:460px;
    color: gray;
  }
  #sub{
    width: 300px;
    height: 40px;
    margin-top: 30px;
    border: 0px none;
    background-color: #3F89EC;
    color: white;
    font-size:18px;
  }
</style>

<template>
  <div class="container">
    <h2>商家注册</h2>
    <div id="center">
      <span>{{adnametext}}</span><br />
      <b><span>用&nbsp;户&nbsp;名:&nbsp;</span></b>
      <input v-model="logname" @focus="lognameshow()" @focusout="lognamedisplay()" @input="testregister()" /><br /><br /><br />
      <b><span>店铺名称:</span></b>
      <input v-model="storename" /><br /><br /><br />
      <b><span>店铺地址:</span></b>
      <input v-model="storeaddress" /><br /><br /><br />
      <b><span v-model="storetel">联系电话:</span></b>
      <input type="text" name="tel" oninput="value=value.replace(/[^\d]/g,'')" maxlength="11" /><br /><br /><br />
      <b><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;:&nbsp;</span></b>
      <input type="password" maxlength="16" v-model="password" @focus="passwordshow()" @focusout="passworddisplay()" /><br />
    </div>
    <div id="logname" v-if="lognametip">
      中英文均可，设置后不可更改
    </div>
    <div id="password" v-if="passwordtip">
      最多16个字符
    </div>
    <button id="sub" @click="register()"><b>注 册</b></button>
  </div>
</template>

<script>
  export default {
    data() {

      return {
        logname: "",
        password: "",
        storename: "",
        storeaddress: "",
        storetel: "",
        lognametip: false,
        passwordtip: false,
        bool: "",
        adnametest: false,
        adnametext: ""
      };
    },
    methods: {
      lognameshow() {
        this.lognametip = true
      },
      lognamedisplay() {
        this.lognametip = false
      },
      passwordshow() {
        this.passwordtip = true
      },
      passworddisplay() {
        this.passwordtip = false
      },
      register() {
        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/register"
        if (ob.adnametest) {
          $.ajax(url, {
            data: {
              adname: ob.logname,
              adpassword: ob.password,
              stname: ob.storename,
              stnum: ob.storetel,
              staddress: ob.storeaddress
            },
            method: "post",
            dataType: "json", //服务器返回json格式数据
            xhrFields: {
              "withCredentials": true
            },
            success: function(result) {
              alert("注册成功")
              ob.$router.push("main")
            },

          });
        } else {
          alert("注册失败")
        }

      },
      testregister() {
        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/testregister"
        $.ajax(url, {
          data: {
            adname: ob.logname,
          },
          method: "post",
          dataType: "json", //服务器返回json格式数据
          xhrFields: {
            "withCredentials": true
          },
          success: function(result) {
            if (result) {
              ob.adnametest = false
              ob.adnametext = "此用户已存在"
            } else {
              ob.adnametest = true
              ob.adnametext = "此用户可用"
            }
            if (ob.adname = "") {
              ob.adnametext = ""
            }




          },

        });
      }
    },
    mounted: function() {

    }
  }
</script>
