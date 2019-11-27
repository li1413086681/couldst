<style>
  .container{
    width:1366px;
  }
  .main{
     width: 100%;
  }
  .login{
    width: 356px;
    height: 380px;
    padding-top: 80px;
    position: absolute;
    right: 40px;
    background-color:#FEDCDA;
  }
  #log{
    background-color: #FD6582;
    border: none;
    width: 314px;
    height: 42px;
  }
  .in{
    width:314px;
    height:42px;
  }
  .tab{
    font-size: 25px;
  }
  .tab:hover{
    text-decoration: none;
    color:#337AB7;
  }
</style>

<template>
  <div class="container">
    <div style="position: absolute;top: 20px;right: 300px;">
      <a class="tab">用户登录</a>
    </div>
    <div style="margin-top:70px;">
      <hr style="border: solid 1px;" />
    </div>
    <div class="main">
      <div class="login">
        <input class="in" placeholder="用户名" />
        <br />
        <br />
        <span>
          <input class="in" type="password" placeholder="密码" />
        </span>
        <br />
        <br />
        <button id="log">登录</button>
        <br />
        <router-link to="/system">入口</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{

      }
    },
    methods:{
      login() {
        var ob = this;
        var url = "http://192.168.1.103:8087/mgj/mgjstore/login"
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
    mounted:function(){

    }
  }
</script>
