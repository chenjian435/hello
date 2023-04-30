<template>
  <div class="xuexiao">
   <h2>学校名称：{{name}}</h2>
   <h2>学校地址：{{address}}</h2>
   <button @click="changeName">点我更换学校名</button>
  </div>



</template>

<script>
// 创建并暴露一个School组件
export default  {
    name:'SchoolVue',
    data() {
        return {
            name:"尚硅谷",
            address:"宏福科技园"
        }
    },
    methods: {
        changeName(){
            this.name = 'atguigu'
        }
    },
 }
  
</script>

<style scoped>
 .xuexiao{
    background-color: skyblue;
    padding: 30px;
 }


</style>
