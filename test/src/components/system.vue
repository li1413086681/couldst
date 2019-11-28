<style>
  .container {
    width: 1366px;
    padding: 0px;
  }

  #theleft {
    height: 625px;
    width: 15%;
    color: white;
    background-color: #1B6D85;
    float: left;
  }

  #theright {
    height: 625px;
    width: 85%;
    float: left;
  }
  #but {
    margin-top: 50px;
  }
  #but > button{
    outline: none;
  }
  .fuge{
    color: white;
  }
  .fuge:hover{
    color: white;
  }
</style>

<template>
  <div class="container">
    <div id="theleft">
      <br />
      商家信息管理系统
      <div id="but">
        <button class="btn btn-warning">收&nbsp;&nbsp;藏&nbsp;&nbsp;夹</button><br /><br /><br />
        <button class="btn btn-info">我的商品</button><br /><br /><br />
        <button class="btn btn-success">订单处理</button><br /><br /><br />
        <button class="btn btn-danger">&nbsp;广&nbsp;&nbsp;告&nbsp;?&nbsp;</button><br /><br /><br />
		    <button class="btn btn-default"><router-link to="/storeadd">添加商品</router-link></button><br /><br /><br />
        <a class="fuge" href="http://127.0.0.1:8086/#/">退出登录</a>
      </div>
    </div>
  </div>
</template>

<script>
</script>
