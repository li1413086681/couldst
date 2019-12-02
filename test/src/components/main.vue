<style>
  .container{
    width:100%;
    padding: 0px;
  }
  .main{
     width: 100%;
     height: 658px;
     background-size:90%;
     background-image: url(../../static/imgs/login3.jpg);
     background-color:pink;
     margin-top: -20px;
  }
  .login{
    width: 400px;
    height: 436px;
    padding-top: 60px;
    position: absolute;
    right: 20px;
    background-color:#FEDCDA;
    opacity: 0.9;
    padding-left:40px;
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
    <div style="position: absolute;top: 20px;right: 250px;">
      <a class="tab" href="http://127.0.0.1:8086/#/login_1">切换为用户登录</a>
    </div>
    <div style="margin-top:70px;">
      <hr style="border: solid 1px;" />
    </div>
    <div class="main">
      <div class="login">
        <h3 style="color:sienna;">商家登录</h3>
        <br /><br />
        <input class="in" placeholder="用户名" v-model="adname" />
        <br />
        <br />
        <span>
          <input class="in" type="password" placeholder="密码" v-model="adpassword" @keyup.enter="login()" />
        </span>
        <br />
        <br />
        <span>{{text}}</span><br />
        <button id="log"  @click="login()">登录</button>
        <br />
        <router-link to="/system">入口</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>

</template>

<script>
	import imagesinfo from '@/components/imagesinfo';
  export default {
    components:{
			"imagesinfo":imagesinfo,
		},
    data: function() {
      return {
        adname: "",
        adpassword: "",
        text:""
      }
    },
    methods: {
      login() {
        var ob = this;
        var url = "http://127.0.0.1:8087/mgj/mgjstore/login"
        $.ajax(url, {
          data: {
            adname: ob.adname,
            password: ob.adpassword
          },
          method: "post",
          dataType: "json", //服务器返回json格式数据
          xhrFields: {
            "withCredentials": true
          },
          success: function(result) {
            if (result == 0) {
              ob.$router.push("system")

            }
            if (result == 1) {
              ob.text = "用户不存在"
            }
            if (result == 2) {
              ob.text = "密码错误"
            }
            if (result == 3) {
              ob.text = "账号封禁，请联系管理员"
            }


          },

        });
      }
    },
    mounted: function() {

    }
  }
</script>
