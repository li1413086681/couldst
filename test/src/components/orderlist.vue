<template>
	<div class="container">
		<table class="table table-bordered" style="font-size: 20px;">
			<thead>
				<tr>
					<td>订单编号</td>
					<td>是否购买</td>
					<td>订单时间</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="a in list">
					<td>{{a.ofid}}</td>
					<td>
						<a class="btn btn-link" @click="pay(a.ofid)" style="font-size: 20px;">付款</a>
					</td>
					<td>{{a.ofdate}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				orderlist:[]
			}
		},
		methods:{
			pay(ofid){
				window.open("http://127.0.0.1:8087/mgj/ali/pay?ofid="+ofid);
			},

		},
		mounted(){
			var ob=this;
			var url="http://127.0.0.1:8087/mgj/mgj/selectorderinfobyuserid";
			$.ajax(url,{
				xhrFields: {"withCredentials": true},
				dataType:"json",
				success: function(result) {
					ob.list=result;
				}
			})
		}
	}
</script>

<style>
</style>
