]<style>
  .containerd {
    width: 100%;
    height: 769px;
    padding: 0px;
    display: inline-block;
    overflow: auto;
  }

  #theleft {
    width: 15%;
    color: white;
    background-color: #1B6D85;
    padding-left: 30px;
    float: left;
    height:775px;
    position: fixed;
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
  #theright{
    width: 85%;
    float: right;
    overflow: auto;
    min-height: 769px;
  }
</style>

<template>
  <div class="containerd">
    <div id="theleft">
      <br />
      <b style="font-size: 25px;">商家信息管理系统</b>
      <div id="but">
        <button class="btn btn-warning">收&nbsp;&nbsp;藏&nbsp;&nbsp;夹</button><br /><br /><br />
        <button class="btn btn-info">我的商品</button><br /><br /><br />
        <button class="btn btn-success"><router-link to="/system/orderby" style="color: white;text-decoration: none;">订单处理</router-link></button><br /><br /><br />
        <button class="btn btn-danger">&nbsp;广&nbsp;&nbsp;告&nbsp;?&nbsp;</button><br /><br /><br />
		    <button class="btn btn-default"><router-link to="/system/storeadd" style="text-decoration: none;">添加商品</router-link></button><br /><br /><br />
        <a class="fuge" href="http://127.0.0.1:8086/#/">退出登录</a>
      </div>
    </div>
    <div id="theright">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        st:[]
      }
    },
    methods:{
      getstsession(){
        var ob=this;
        var url="http://127.0.0.1:8087/mgj/mgj/delivergoods";
        $.ajax(url,{
        	xhrFields: {"withCredentials": true},
        	dataType:"json",
        	success: function(result) {
        		ob.st=result;
            console.log(ob.st.Admin);
            console.log(ob.st.information);
        	}
        });
      }
    },
    mounted(){
      var ob=this;
      ob.getstsession();
    }
  }
</script>
