export function Scroll(elementSelector){
	
		let scroll = document.querySelector(elementSelector);
		let wrapper = scroll.children[0];
		//计算最大滚动范围
		this.maxScrollY = scroll.offsetHeight - wrapper.offsetHeight;
		
		this.offsetFin = 0;
		let offset = 0;
		
		//刷新最大滚动范围
		this.refresh = function(){
			this.maxScrollY = scroll.offsetHeight - wrapper.offsetHeight;
		}
		
		//监听触碰开始的位置
		wrapper.addEventListener("touchstart",(e)=>{
			let clientY = e.changedTouches[0].clientY;
			let disy = clientY - wrapper.offsetTop;
			
			//监听触碰移动
			document.addEventListener("touchmove",(e)=>{
				let clientY = e.changedTouches[0].clientY;
				offset = clientY - disy + this.offsetFin;
				wrapper.style.transform = "translateY(" + offset + "px)";
			})
			
			//监听触碰结束
			document.addEventListener("touchend",()=>{
				this.offsetFin = offset;
				if(this.offsetFin > 0){
					wrapper.style.transform = 'translateY(0)';
					offsetFin = 0;
				}
				if(this.offsetFin < this.maxScrollY){
					wrapper.style.transform = 'translateY('+maxScrollY+'px)';
					offsetFin = this.maxScrollY;
				}
			})
		})
}
