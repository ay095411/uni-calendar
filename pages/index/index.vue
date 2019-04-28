<template>
	<view class="container">
		<Calendar :lunar='true' :begin='begin' :end='end' @select='select'></Calendar>
	</view>
</template>

<script>
	import Calendar from '@/components/calendar/uni-calendar'
	export default {
		data() {
			return {
				begin:['2019','04','22'],//开始时间
				end:['2020','04','22'],//结束时间
				date:"",//选中时间
			}
		},
		components: {
			Calendar
		},
		methods: {
			//选择日期
			select(val) {
				let month = val[1].toString().length==1?'0'+val[1]:val[1]
				let day = val[2].toString().length==1?'0'+val[2]:val[2]
				this.date = val[0]+'-'+month+'-'+day
				console.log(val)
			}
		}
	}
</script>

<style scoped="scoped">
	
</style>
