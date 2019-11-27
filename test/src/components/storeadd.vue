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
    background-color:pink;
  }
</style>

<template>
  <div class="container">
    <div id="top">
      <img src="../../static/imgs/title.png" />
      <i id="home" class="glyphicon glyphicon-home"></i>
    </div>
    <div id="picture">
      <input type="file" @change="upData($event)" ref="InputFile" name="files" />
    </div>
  </div>
</template>

<script>
  export default{
    upData(event) {
                var reader = new FileReader();
                let fileData = this.$refs.InputFile.files[0];
                reader.readAsDataURL(fileData);
                let _this = this;
                reader.onload = function(e) {
                    //这里的数据可以使本地图片显示到页面
                    _this.addimg = e.srcElement.result;
                };
                // 使用formapi打包
                let formData = new FormData();
                formData.append('file', fileData);
                this.axios.post('/api/v1/uploads/course/img', formData).then(function(res) {
                    console.log(res);
                    _this.addimgtijiao = res.data.path;
                });
            }
  }
</script>
