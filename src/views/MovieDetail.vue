<template>
  <div class="info" >    
      <div>
        <img class="image" :src="url + getDetails.poster_path" alt="">
      </div>
      <div class="movie-info">
         <div class="title-one">
        <span class="vote">Title:</span>  {{getDetails.title}}
        </div>     
        <div class="overview-one">
        <span class="vote">Overview: </span> {{getDetails.overview}}
        </div>    
        <div class="vote-average">
        <span class="vote">Vote Average:</span>  {{getDetails.vote_average}}
        </div>  
         <div class="vote-average">
        <span class="vote">Tagline:</span>  {{getDetails.tagline}}
        </div>  
        <div class="release-date">
        <span class="vote">Release Date:</span>  {{getDetails.release_date}}
        </div>
      </div>          
  </div>
  <div class="push">
    <button class="btn" @click="homepage">HomePage</button>
  </div>
</template>

<script>
export default {
    data(){
      return {
        url: `https://image.tmdb.org/t/p/w400`
      }
    },
    async created(){
        this.movieDetail(this.$route.params.id)
    },    
    methods: {
    movieDetail(movie_id){
      this.$store.dispatch('movieDetail', {id: movie_id})
    },
    homepage(){
      this.$router.push({name:'Home'})
    }
    },
    computed:{
        getDetails(){
            return this.$store.getters.getDetails
        }    
    }    
}
</script>

<style scoped>

.info{
  display:flex;
  padding: 40px;
  line-height:1.5;
  max-width: 900px;
  margin: 0 auto;
  padding: 0px;
}
.overview-one{
  line-height: 1.2;
}
@media(max-width:500px){
  .info{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
}
.movie-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  padding: 30px ;
} 
.push {
  display:flex;
  justify-content: center;
}
.btn{
  padding:10px;
  color:black;
  background-color:aquamarine;
  border-radius:10px;
  border: 1px solid greenyellow;
}
.vote{
  font-size:20px;
  font-weight:bold;
}
</style>