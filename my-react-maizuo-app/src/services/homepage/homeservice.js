import axios from "axios"
import urlApi from "../../common/urlApi.js"

//请求轮播图数据
export function getBannerInfo(interval){
	return new Promise((resolve,reject)=>{
		axios.get(`${urlApi.homeBannerUrl}?__t=${interval}`)
		.then(response=>{
//			console.log(response.data.data.billboards);
			resolve(response.data.data.billboards);
		})
	})
}

//请求正在热映的数据
export function getHotplayingInfo(interval,page,count){
	return new Promise((resolve,reject)=>{
		axios.get(`${urlApi.hotPlayingUrl}?__t=${interval}&page=${page}&count=${count}`)
		.then(response=>{
//			console.log(response.data.data.films);
			resolve(response.data.data.films);
		})
	})
}


//请求即将上映的数据
export function getComingsoonInfo(interval,page,count){
	return new Promise((resolve,reject)=>{
		axios.get(`${urlApi.comingSoonUrl}?__t=${interval}&page=${page}&count=${count}`)
		.then(response=>{
//			console.log(response.data.data.films);
			resolve(response.data.data.films);
		})
	})
}


//请求影片详情数据
export function getFilmdetailInfo(interval,id){
	return new Promise((resolve,reject)=>{
		axios.get(`${urlApi.filmDetailUrl}/${id}?__t=${interval}`)
		.then(response=>{
//			console.log(response.data.data.film);
			resolve(response.data.data.film);
		})
	})
}

//请求城市数据
export function getCityInfo(interval){
	return new Promise((resolve,reject)=>{
		axios.get(`${urlApi.cityUrl}?__t=${interval}`)
		.then(response=>{
//			console.log(response.data.data.cities);
			let obj = {};
			response.data.data.cities.map(item=>{
				let letter = item.pinyin[0];
				if(obj[letter] == null){
					obj[letter] = [];
				}
				obj[letter].push(item);
			})
			let arr = [];
			for(let key in obj){
				let value = obj[key];
				value.letter = key;
				arr.push(value);
			}
			//字母排序
			for(let i = 0; i < arr.length-1; i++){
				for(let j = 0; j < arr.length-1-i; j++){
					if(arr[j].letter > arr[j+1].letter){
						let temp = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = temp;
					}
				}
			}
			resolve(arr);
		})
	})
}

//请求全部影院数据
export function getAllCinemaInfo(interval){
	return new Promise((resolve,reject)=>{
		axios.get(`${urlApi.cinemaUrl}?__t=${interval}`)
		.then(response=>{
//			console.log(response.data.data.cinemas);
			let obj = {};
			response.data.data.cinemas.map(item=>{
				let area = item.district.name;
				if(obj[area] == null){
					obj[area] = [];
				}
				obj[area].push(item);
			})
//			console.log(obj);
			let arr = [];
			for(let key in obj){
				let value = obj[key];
				value.area = key;
				arr.push(value);
			}
//			console.log(arr);
			resolve(arr);
		})
	})
}

//请求对应影片的影院数据
export function getFilmCinemaInfo(id,interval){
	return new Promise((resolve,reject)=>{
		axios.get(`${urlApi.filmDetailUrl}/${id}/cinema?__t=${interval}`)
		.then(response=>{
//			console.log(response.data.data.cinemas);
			let obj = {};
			response.data.data.cinemas.map(item=>{
				let area = item.district.name;
				if(obj[area] == null){
					obj[area] = [];
				}
				obj[area].push(item);
			})
//			console.log(obj);
			let arr = [];
			for(let key in obj){
				let value = obj[key];
				value.area = key;
				arr.push(value);
			}
//			console.log(arr);
			resolve(arr);
		})
	})
}

//请求当前影院的数据
export function getCurrentCinemaInfo(film_id,cinema_id,interval){
	return new Promise((resolve,reject)=>{
		axios.get(`${urlApi.currentCinemaUrl}?__t=${interval}&film=${film_id}&cinema=${cinema_id}`)
		.then(response=>{
//			console.log(response.data.data.schedules);
			resolve(response.data.data.schedules);
		})
	})
}
