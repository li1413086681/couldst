<style>
  .container {
    width: 1705px;
    padding: 0px;
  }

  #theleft {
    height: 781px;
    width: 15%;
    color: white;
    background-color: #1B6D85;
    float: left;
    padding-left: 30px;
  }

  #theright {
    height: 625px;
    width: 85%;
    float: left;
    text-align: center;
  }
  #but {
    margin-top: 50px;
    margin-left: 40px;
  }
  #but > button{
    outline: none;
    font-size: 20px;
  }
  .fuge{
    color: white;
    margin-left: 12px;
    font-size: 20px;
  }
  .fuge:hover{
    color: white;
  }
</style>

<template>
  <div class="container">
    <div id="theleft">
      <br />
      <b style="font-size: 25px;">商家信息管理系统</b>
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
