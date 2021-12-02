<template>
    <div class="search ">   
        <div class="middle">
            <h2>Search Movie DB by Title:</h2> 
            <input class="input" type="text" v-model="query" @keydown.enter="queryMovies"> 
        </div>      
    </div>
    <div v-for="querie in queries" :key="querie.id">
        <div class="title" >
            {{querie.title}}
        </div>
    </div>
    <div class="page" v-if="query" >      
            <button class="btn" @click="prevPage">Prevoius</button>       
            <button class="btn" @click="nextPage">Next</button>
    </div>   
</template>

<script>
export default {
    data(){
        return{
            page:1,
            query: ''
        }
    },
    methods: {
       queryMovies(){      
        this.$store.dispatch('querySearch', {page: this.page, query:this.query})        
       },
       nextPage(){
        if(this.page < this.totalPages){
        this.page++
        this.$store.dispatch('querySearch', {page: this.page, query:this.query})
        }
       },
       prevPage(){    
        if(this.page > 1){
        this.page--    
        this.$store.dispatch('querySearch', {page: this.page, query:this.query})
       }
       }
    },
    computed: {
        queries(){       
            return this.$store.getters.getQueries
        },
        pages(){
            return this.$store.getters.getPageQuery
        },
        totalPages(){
            return this.$store.getters.getTotalQueryPages
        }
    }
}
</script>

<style scoped>
.search{
    display:flex;
    flex-direction: column;
    padding-bottom:20px;
    padding-top:20px;
    margin-left:20px;
}
.page{
    margin-top:20px;
    text-align: center;
} 
.middle{
    display: flex;
}
h2{
    padding-right:15px;
}
input{
    width:200px;
}
@media(max-width:510px){
    h2{
        font-size:16px;
        padding-right:5px
    }
    input{
        width:150px;
    }
    .search{
        align-items:center;
    }
}
.title{
    line-height:1.4;
    text-align:center;
}
.btn{
width:150px;
  padding:10px;
  color:black;
  background-color:aquamarine;
  border-radius:10px;
  border: 1px solid greenyellow;
}
</style>