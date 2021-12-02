<template>
  <div class="home container">    
    <h1 class="title">Top Rated Movies</h1>
    <div class="design">     
      <app-movie v-for="(movie) in movies" :key="movie" :movie="movie"></app-movie>      
    </div>
       <div class="page">      
          <button @click="prevPage">Prevoius</button>       
          <button @click="nextPage">Next</button>
      </div>          
  </div>
</template>
<script>
import Movie from '../components/Movie.vue'
import Search from '../views/Search.vue'
export default {
  name: 'Home',
  components: {
    appMovie: Movie, appSearch: Search
  },
  data(){
   return{
     page:1,
    }
  },
  async created(){   
    this.$store.dispatch('fetchMovies')
  },
  methods: {   
    nextPage(){
      if(this.page < this.getTotalPage){
        this.$store.dispatch('fetchMovies',this.page+=1)
      }            
    },
    prevPage(){
      if(this.page > 1){
        this.$store.dispatch('fetchMovies',this.page-=1)
      }      
    }
  },  
  computed: {
    movies(){
      return this.$store.getters.getMovies
    },
     getPage(){
      return this.$store.getters.getPage
    },
    getTotalPage(){
      return this.$store.getters.getTotalPage
    }
  }
}
</script>
<style scoped>
.container{
  max-width: 1600px;
}
.design{
 display:grid;
  column-gap: 10px;
  row-gap: 60px;
  grid-template-columns: 300px 300px 300px 300px ;
  padding-bottom: 60px;
}

@media(max-width:500px){
  .home.container{
    display:flex;
    align-items: center;
  }
  .design{
    grid-template-columns: 300px ;
    grid-row-gap:3rem; 
    
  }
  .title{
    text-align:center;
    font-size: 18px;
  }
}
.page{
  display:flex;  
  justify-content:center;
}
.page button {
  padding:8px;
  width:70px;
  background-color:firebrick;
  color: white;
}
.home{
  display:flex;
  flex-direction: column;
}
.title{
  padding-left: 12px;
  margin-bottom:6px;
}
</style>
