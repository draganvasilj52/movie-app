<template>
    <div class="info">
        <img class="svg" :src="Svg" />
       <div class="search-items">
            <router-link class="link" :to="{name:'Search'}">
                <p>Search</p>
            </router-link>        
        </div> 
    </div>         
</template>

<script>
import Svg from '../assets/logo.svg'
export default {
    name: 'Header',
    components: {
    },
    data(){
        return {
            Svg
        }
    }
}
</script>

<style scoped>
.svg{
    width: 40%;
    max-width: 100%;
    padding:10px;
}
@media(max-width:500px){
    .svg{
        padding: 15px;
    }
    .search-items p{
        font-size: 16px;    
    }
}
.info{
    display:flex;
    justify-content: space-between;
    background-color:lightgreen;
    align-items: center;
    margin-bottom: 10px;
}
button{
    padding: 7px;
}
.search-items{
    margin-right: 30px;  
    font-size: 22px; 
    
}
</style>