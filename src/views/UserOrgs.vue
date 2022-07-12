<template>
 
     <v-container width=80 justify-center>
       
      <Header header_title="My Orgs" header_background='artist' />
      <Preloader :items="items"/>
      <OrgCards :items="items" />
      <Redirect />

    </v-container>

</template>

<script>

  import axios from 'axios';
  
  import Header from '@/components/common/Header';
  import Preloader from '@/components/common/Preloader';
  import Redirect from '@/components/common/Redirect';

  import OrgCards from '@/components/user/OrgCards';

  export default {
    components: {Header, Preloader,OrgCards, Redirect},
    data() {
      return {
        items: [],
      }
    },
    methods : {
       async getUserOrgs(){
         var queryName = "user-orgs";
         const orgs = sessionStorage.getItem(queryName);
        if(!orgs){
          await this.getUserOrgsFromAPI(queryName);
        }else{
          await this.getUserOrgsFromLocal(queryName);
        }
      },
      async getUserOrgsFromAPI(queryName){
        const url = "https://githubtrackr.herokuapp.com/api/user/orgs"
        const response = await axios.get(url, {
            headers: {
                Authorization: "token " + localStorage.access_token,
                "Access-Control-Allow-Origin": "*",
            }
        });
        const data = response.data.data;
        sessionStorage.setItem(queryName, JSON.stringify(data));
        this.items = data
      },
      async getUserOrgsFromLocal(queryName){
        this.items = JSON.parse(sessionStorage.getItem(queryName));
      },
    },
    async mounted(){
      await this.getUserOrgs();
    }
  }
</script>

