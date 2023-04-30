<template>
  <div class="box">
    <span ref="message">欢迎学习</span>
    <br>
    <button @click="showWelcomeMsg">点我欢迎新同学</button>
  </div>
</template>

<script>
   export default {
    name:'Welcome',
    methods:{
        showWelcomeMsg(){
            // alert('欢迎你啊~')
            alert(`欢迎你啊！${this.$refs.message.innerText}`)
        }
    }

}
</script>

<style scoped>
 .box{
    background-color: darkgrey;
    padding: 30px;
 }
</style>