<style>
  thead tr>th {
    height: 60px;
    vertical-align: middle!important ;
    text-align: center;
  }
</style>

<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>用户名</th>
        <th>订单编号</th>
        <th>订单时间</th>
        <th>用户地址</th>
        <th>收货人</th>
        <th>联系电话</th>
        <th>商品名称</th>
        <th>商品尺码</th>
        <th>商品数量</th>
        <th>商品订单号</th>
        <th>处理</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="a in list">
        <th>{{a.logname}}</th>
        <th>{{a.ofid}}</th>
        <th>{{a.ofdate}}</th>
        <th>{{a.address}}</th>
        <th>{{a.recipient}}</th>
        <th>{{a.contactnumber}}</th>
        <th>{{a.gdname}}</th>
        <th>{{a.gstext}}</th>
        <th>{{a.gdcount}}</th>
        <th>{{a.olid}}</th>
        <th><button style="background-color:orange;" @click="faror(a.ofid,a.olid)">发货</button></th>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      selectod() {
        var ob = this;
        var url = "http://127.0.0.1:8087/mgj/mgj/delivergoods";
        $.ajax(url, {
          xhrFields: {
            "withCredentials": true
          },
          dataType: "json",
          success: function(result) {
            ob.list = result.information;
          }
        })
      },
      faror(ofid, olid) {
        var ob = this;
        var url = "http://127.0.0.1:8087/mgj/mgj/deletedelivergoods";
        $.ajax(url, {
          xhrFields: {
            "withCredentials": true
          },
          dataType: "json",
          data: {
            "ofid": ofid,
            "olid": olid
          },
          success: function(result) {
            ob.list = result.information;
            window.$router.go(0);
          }
        })
      },
    }
  }
</script>
