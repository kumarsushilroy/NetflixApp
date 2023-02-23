  

   const Key = '85713801f62b73bdc839ee3d4cff1d96';

   const requests = {
        nowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}&language=en-US&page=1`,
        latest: `https://api.themoviedb.org/3/movie/latest?api_key=${Key}&language=en-US`,
        toprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
        popular: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
        upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`
   }

   export default requests;