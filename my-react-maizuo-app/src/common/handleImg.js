export function handleImage(imgUrl){
	if(imgUrl){
		return "https://pic.maizuo.com/" + imgUrl + (imgUrl.endsWith('jpeg')?'.jpeg':'.png');
	}
	else{
		return "";
	}
}
