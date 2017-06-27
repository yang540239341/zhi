$(function(){
	
	var otImg2=$('#t-Img2');
	var otUl=$('#t-ul');
		otImg2.mouseenter(function(){
		otUl.show();
		});
		otUl.on('mouseleave','li',function(){
			otUl.hide();
		})
//t-xuan
	$(' #t-xuan #t-tbox button').click(function(){
		$(' #t-xuan #t-tbox button').removeClass('active');
		$('#t-xuan #t-tcontent div').hide();
		$(this).addClass('active');
		$('#t-xuan #t-tcontent div').eq($(this).index()).show();	
	})
})//$function
//图片懒加载
	function getPos(obj) {
		var l = 0,t = 0;
		while(obj) {
			l = l + obj.offsetLeft;
			t = t + obj.offsetTop;
			obj = obj.offsetParent;
		}
		return {left: l, top: t};
	}
	window.onload=window.onscroll=window.onresize=function(){
			var oUl=document.getElementById('t-content');
			var aImg=oUl.getElementsByTagName('img');
			for (var i = 0;i < aImg.length;i++) {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
				var topLine = scrollTop + clientHeight;
					var imgTop = getPos(aImg[i]).top;
				if (imgTop <= topLine) {
					aImg[i].src = aImg[i].getAttribute('_src');
			}			
		}
	}
