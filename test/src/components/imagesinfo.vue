<template>

		<div class="box-wrapper container">
			<div class="box" v-for="(a,i) in infoes" :style="a.hh" :class="{'spe':((i%3==0)||(i%7==0))}" @click="gotogoodsinfo(a.gdid)">
				<i class="glyphicon glyphicon-play-circle"></i>
			    <div class="jj">
			    </div>
			    <div class="ff">
			    	<div class="font1">
			    		<p class="glyphicon glyphicon-thumbs-up mm"></p><br />
			    		<p class="glyphicon glyphicon-star mm" :class="{'kk':GoodscollectionKey.indexOf(a.gdid)!=-1}"  @click="collection(a.gdid,$event,i)" v-if="user_1.length!=0" >
			    			<span style="left: 20px;background-color: red;display: inline-block;position: absolute;font-size: 20px;color: white;border-radius:50%;border: 3px solid white;width: 30px;height: 30px;">
			    				{{list[i]}}
			    			</span>
			    		</p>
			    	</div>
			    	<hr />
			    	<span>{{a.gdname}}</span>
			    </div>
			</div>
		</div>


</template>

<script>
	export default{

		data:function(){
			return{
				infoes:[],
				count1:0,
				npagenum:0,
				lock:false,
				user_1:[],
				GoodscollectionKey:[],
				list:[],
			}
		},

		mounted(){
			var ob=this;
			// ob.session();
			ob.getimgs(1);


			$(window).scroll(function(){
				if($(".box").length<1||$(".box")==null){
					$(window).unbind('scroll');
				}else{
					if(ob.lock==false){
						ob.lock=true;
						if(($(document).scrollTop()+600)>=$(".box:last").offset().top){
							ob.npagenum++;
							if(ob.npagenum>ob.count1){
								return;
							}
							ob.getimgs(ob.npagenum);
						};
					ob.lock=false;
					}
				}

			})
		},

		methods:{
			changecolor(event){
				var ob=this;
				ob.GoodscollectionKey=[];
				var url="http://127.0.0.1:8087/mgj/mgj/changecolor";
				$.ajax(url,{
					xhrFields: {"withCredentials": true},
					async:false,
					dataType:"json",
					success: function(result) {
						for(var j in result){
							ob.GoodscollectionKey.push(result[j].gdid);
						}
					}
				});
			},
			// session(){
			// 	var ob=this;
			// 	var url="http://192.168.1.103:8087/mgj/mgj/getsession";
			// 	$.ajax(url,{
			// 		xhrFields: {"withCredentials": true},
			// 		data:{"keywords":ob.keywords},
			// 		dataType:"json",
			// 		success: function(result) {
			// 			ob.user_1=result;
			// 			if(ob.user_1.length!=0){
			// 				ob.changecolor();
			// 			}
			// 		}
			// 	});
			// },
			collection(gdid,event,i){
				event.stopPropagation();
				var ob=this;
				var url="http://127.0.0.1:8087/mgj/mgj/insertcollection";
				$.ajax(url,{
					xhrFields: {"withCredentials": true},
					async:false,
					data:{"gdid":gdid},
					dataType:"json",
					success: function(result) {

					}
				})
				ob.changecolor();
				if(ob.GoodscollectionKey.indexOf(gdid)!=-1){
					ob.list[i]=ob.list[i]+1
				}else{
					ob.list[i]=ob.list[i]-1
				}

			},
			gotogoodsinfo(gdid){
				var ob=this;
				ob.$router.push({"name":"goodsinfo","query":{"gdid":gdid}});

			},
			getimgs(pagenum){
				var ob=this;
				var url="http://127.0.0.1:8087/mgj/mgj/getimage";
				$.ajax(url,{
					xhrFields: {"withCredentials": true},
					data:{"pagenum":pagenum},
					dataType:"json",
					success: function(result) {
						ob.npagenum=result.pagenum1;
						ob.count1=result.count;
						for(var i in result.images){
							result.images[i].hh={
                "background-image":"url('http://127.0.0.1:8087/aaa/tp/00ad41a6ab087fe5b6e1ee2d7858_640_900.cj.jpg')"
								// "background-image":"url('http://127.0.0.1:8087/aaa/"+result.images[i].gimgurl+"')"
							};
							ob.infoes.push(result.images[i]);
						};
					}
				})
				ob.getcollection(pagenum);
			},
			getcollection(pagenum){
				var ob=this;
				var url="http://127.0.0.1:8087/mgj/mgj/getcollectionforajax";
				$.ajax(url,{
					xhrFields: {"withCredentials": true},
					data:{"pagenum":pagenum},
					dataType:"json",
					success: function(result) {
						for(var a in result){
							ob.list.push(result[a].counts);
						}
					}
				})
			}
		}

	}
</script>

<style>
	.ff{
		border-radius: 6px;
		height: 100%;
		width: 100%;
		top: 100%;
		position: absolute;
		padding: 10px;
		opacity: 1;
	}
	.font1{
		height: 70%;
	}
	.mm{
		font-size: 40px;
		color: white;
		margin-left:170px ;
		display: inline;
	}
	.box i{
		font-size: 40px;
		color: white;
		margin-top:10px ;
		margin-left:10px ;
	}
	.jj{
		border-radius: 6px;
		height: 100%;
		width: 100%;
		top: 100%;
		position: absolute;
	}
	.box:hover{
		cursor: pointer;
		transform: translateY(-10px);
	}
	.box:hover .jj{
		top:0%;
		background-color: #000000;
		opacity: 0.5;
	}
	.box:hover .ff{
		top:0%;
		text-align: center;
	}
	.box:hover i{
		z-index: 6;
	}
	.ff span{
		font-size: 16px;
		color: white;
	}
	.box {
		height: 350px;
		width: 250px;
		margin:6px;
		break-inside:avoid;
		background-size: 100%;
		background-repeat:no-repeat ;
		border-radius: 6px;
		margin-top: 12px;
		overflow: hidden;
		position: relative;
		transition: all 0.5s ;
	}

	.box:first-child{
		margin-top: 0px;
	}
	.spe {
		height:290px;

	}
	.box-wrapper {
	    column-count:5;
		column-gap:1px;
		position: relative;
		width: 1438px;;
		margin-top: 50px;

	}
	.kk{
		color: red;
	}
</style>
