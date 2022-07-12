<template>

    <v-container justify-center >
      <Header header_title="Watchlist" header_background='insight' />
      <Preloader :items="items"/>
      <RepoCards :items="items"/>
      <Redirect />

    </v-container>

</template>

<script>

  import axios from 'axios';
  
  import Header from '@/components/common/Header';
  import Preloader from '@/components/common/Preloader';
  import Redirect from '@/components/common/Redirect';

  import RepoCards from '@/components/user/WatchlistCards';

  export default {
    components: {Header, Preloader, RepoCards, Redirect},
    data(){
        return{
            items: [],
        }
    },
    methods: {
       async getUserWatchlist(){
         var queryName = "user-watchlist";
         let repos = sessionStorage.getItem(queryName);
        if(!repos){
          await this.getUserWatchlistFromAPI(queryName);
        }else{
          await this.getUserWatchlistFromLocal(queryName);
        }
      },
      async getUserWatchlistFromAPI(queryName){

        const url = "https://githubtrackr.herokuapp.com/api/user/watchlist";
        const response = await axios.get(url, {
            headers: {
                Authorization: "token " + localStorage.access_token,
                "Access-Control-Allow-Origin": "*",
            }
        });

        const data = response.data.data;
        sessionStorage.setItem(queryName, JSON.stringify(data));
        this.items = data;
      },
      async getUserWatchlistFromLocal(queryName){
        this.items = JSON.parse(sessionStorage.getItem(queryName));
      },
    },
    async mounted(){
      await this.getUserWatchlist();
    }
  }
</script>

