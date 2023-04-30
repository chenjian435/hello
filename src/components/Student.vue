<template>
  <div class="xuesheng">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age  }}</h2>
    <h2>名字：{{ mingzi }}</h2>
    <button @click="age+=1">点我年龄加1</button>
  </div>
</template>

<script>
 export default {
   name:'StudentVue',
   data() {
    return {
        name:'张三',
        age:18 
    }
   },
   props:['mingzi']
}
</script>

<style scoped>
.xuesheng{
    background-color: orange;
    padding: 30px;
}
</style>
