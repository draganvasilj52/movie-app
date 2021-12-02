<template>
  <div class="card">     
    <router-link :to="link">
      <div>
          <img class="image" :src="url + movie.poster_path" alt="">    
      </div> 
    </router-link>      
      <div class="img-info">
        <div class="title">
          {{movie.title}}
        </div>   
        <div class="date">
          Release Date: {{movie.release_date}}
        </div>  
      </div>      
  </div>
</template>

<script>
export default {
    data(){
        return {
           url: `https://image.tmdb.org/t/p/w200`,
           link: `/movie/${this.movie.id}`        
        }
    },
    props: ['movie'],
    computed: {
      getPage(){
          return this.$store.getters.getPage
      }
    },    
}
</script>
<style scoped>
.card{
    width:300px;
    height:300px;
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.title , .date{
    font-size: 15px;
    text-align: center;    
}
.image:hover{
   transform: scale(1.02);
}
</style>