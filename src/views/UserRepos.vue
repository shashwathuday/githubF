<template>


    <v-container justify-center >
      <Header header_title="My Repos" header_background='track' />
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

  import RepoCards from '@/components/user/RepoCards';

  export default {
    components: {Header, Preloader, RepoCards, Redirect},
    data() {
      return {
        items: [],
      }
    },
    methods : {
       async getUserRepos(){
         var queryName = "user-repos";
         let repos = sessionStorage.getItem(queryName);
        if(!repos){
          await this.getUserReposFromAPI(queryName);
        }else{
          await this.getUserReposFromLocal(queryName);
        }
      },
      async getUserReposFromAPI(queryName){

        const url = "https://githubtrackr.herokuapp.com/api/user/repos";
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
      async getUserReposFromLocal(queryName){
        this.items = JSON.parse(sessionStorage.getItem(queryName));
      },
    },
    async mounted(){
      await this.getUserRepos();
    }
  }
</script>

