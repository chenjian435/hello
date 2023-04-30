<template>
  <div class="app">
   <SchoolVue/>
   <StudentVue
   :mingzi="name"
   
   />
   <Welcome ref="hy"/>
   <button @click="show">点我展示refs</button>
  </div>
</template>

<script>
//引入组件
import SchoolVue from './components/School'
import StudentVue from './components/Student.vue'
import Welcome from './components/Welcome'

export default {

   name:'App',
   components:{SchoolVue,StudentVue,Welcome},
   data(){
    return{
      name:'zhangsan'
    }
   },
   methods:{
     show(){
      console.log(this.$refs)
     }
   }
   
}



</script>

<style>
 .app{
  background-color: aqua;
  padding: 30px;
 }  
  
</style>