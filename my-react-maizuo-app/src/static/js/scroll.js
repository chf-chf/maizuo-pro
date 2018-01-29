(function Scroll(elementSelector){
		console.log(elementSelector);
		let scroll = document.querySelector(elementSelector);
		let wrapper = scroll.children[0];
		//计算最大滚动范围
		let maxScrollY = scroll.offsetHeight - wrapper.offsetHeight;
		
		let offsetFin = 0;
		let offset = 0;
		
		//刷新最大滚动范围
		this.refresh = function(){
			maxScrollY = scroll.offsetHeight - wrapper.offsetHeight;
		}
		
		//监听触碰开始的位置
		wrapper.addEventListener("touchstart",(e)=>{
			let clientY = e.changedTouches[0].clientY;
			let disy = clientY - wrapper.offsetTop;
			
			//监听触碰移动
			document.addEventListener("touchmove",(e)=>{
				let clientY = e.changedTouches[0].clientY;
				offset = clientY - disy + offsetFin;
				wrapper.style.transform = "translate(" + offset + "px)";
			})
			
			//监听触碰结束
			document.addEventListener("touchend",()=>{
				offsetFin = offset;
			})
		})
}())
