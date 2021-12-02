import { createStore } from 'vuex'

export default createStore({
  state: {
       movies: [],
       movie:{} ,
       page:null,
       queries: [],
       query: ''
  },
  mutations: {
    addMovies(state,payload){
      state.movies= payload
    },
    details(state,payload){
      state.movie=payload
    },
    addQueries(state,payload){
      state.queries=payload
    }
  },
  actions: {
    async fetchMovies(ctx, page ){
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dd868edde727b25f91904f76fa5e9fe6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=` + page )
      const data = await res.json()      
      ctx.commit('addMovies',data)   
    },
    async movieDetail(ctx, {id}){
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dd868edde727b25f91904f76fa5e9fe6&language=en-US`)
      const data = await res.json()
      ctx.commit('details',data)      
    },
    async querySearch(ctx, {page, query}){
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=dd868edde727b25f91904f76fa5e9fe6` + `&page=` + page + `&query=` + query)
      const data = await res.json()
      ctx.commit('addQueries',data)
      console.log(data)
    }
  },
  getters: {
    getMovies(state){
      return state.movies.results
    },
    getDetails(state){
      return state.movie
    },
    getPage(state){
      return state.movies.page
    },
    getTotalPage(state){
      return state.movies.total_pages
    },
    getQueries(state){
      return state.queries.results
    },
    getPageQuery(state){
      return state.queries.page
    },
    getTotalQueryPages(state){
      return state.queries.total_pages
    }
  }
})
