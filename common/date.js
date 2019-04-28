//时间计算,时间戳互转,年月日
export const calcDate = {
	//时间戳转时间
	timestampToTime: (timestamp)=>{
		let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		let y = date.getFullYear()+'-';
		let m = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		let d = date.getDate();
		return y+m+d
	},
	//时间转时间戳
	timeToTimestamp: (time)=>{
		let t = new Date(time)
		let t_s = t.getTime()
		return t_s
	}
}