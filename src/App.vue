<template>
    <router-link :to="{name:'Home'}">
       <Header/>
    </router-link>
  <div class="container">   
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default{
  components: {
    Header  
  },
  watch:{
    $route(val){
      console.log(val)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin:0;
  padding:0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;
}
a{
  text-decoration: none ;
  color:white;
}
a:hover{
  color:black ;
}
a.router-link-active{
  color:black;
  text-decoration: none;
}
</style>
