<style>
  .container{
    width:1366px;
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
      <b><span>用&nbsp;户&nbsp;名:&nbsp;</span></b>
      <input v-model="logname" @focus="lognameshow()" @focusout="lognamedisplay()" /><br /><br /><br />
      <b><span>店铺名称:</span></b>
      <input v-model="storename"  /><br /><br /><br />
      <b><span>店铺地址:</span></b>
      <input v-model="storeaddress" /><br /><br /><br />
      <b><span v-model="storetel">联系电话:</span></b>
      <input type="text" name="tel" oninput="value=value.replace(/[^\d]/g,'')" maxlength="11" /><br /><br /><br />
      <b><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;:&nbsp;</span></b>
      <el-input class="in" v-model="a" show-password style="height:40px;width:300px;"></el-input>
      <br />
    </div>
    <div id="logname" v-if="lognametip">
      中英文均可，设置后不可更改
    </div>
    <button id="sub"><b>注 册</b></button>
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
        lognametip:false,
        passwordtip:false,
        a:null
      };
    },
    methods: {
      lognameshow() {
        this.lognametip=true
      },
      lognamedisplay(){
        this.lognametip=false
      },
    },
  }
</script>
