
//观察者模式

let center = {
	messageList:{}
}


//触发消息，将消息发送出去
center.$emit = function(messageName,params){
	//发送对应消息的回调列表
	let callbackArr = center.messageList[messageName];
	
	//监听的每个消息都执行一遍回调函数
	callbackArr.map((callback)=>{
		callback(params);
	})
}


//监听消息
center.$on = function(messageName,callback){
	//判断监听的消息之前是否保存过
	if(center.messageList[messageName]){
		//有保存过
		center.messageList[messageName].push(callback);
	}
	else{
		//没有保存过,则创建该消息
		center.messageList[messageName] = [callback];
		
	}
}

export default center






