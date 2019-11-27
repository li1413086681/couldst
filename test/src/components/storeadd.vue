<style>
  .container {
    width: 1200px;
    padding: 0px;
    background-color: forestgreen;
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
    background-color: saddlebrown;
  }
</style>

<template>
  <div class="container">
    <div id="top">
      <img src="../../static/imgs/title.png" />
      <i id="home" class="glyphicon glyphicon-home"></i>
    </div>
    <div id="picture">
    </div>
  </div>
</template>

<script>
</script>
