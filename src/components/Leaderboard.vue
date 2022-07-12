<template>
    <div class="stats text-center">

        <Preloader :items="stats"/>

        <div  class="display-Artists" v-if="stats.length != 0">
            <v-data-table dark
                :headers="headerAuthors"
                :items="authors"
            ></v-data-table>
        </div>

    </div>
</template>

<script>

import axios from 'axios';

import Preloader from "./common/Preloader";

export default {
    name: "Stats",
    components: {Preloader},
    data(){
        return{

            //mandatory
            model: null,

            stats: [],
            
            //Returned value
            topArtists: null,

            //Artists Table
            headerAuthors: [
            {
                text: 'Name',
                align: 'start',
                filterable: false,
                value: 'name',
            },
                { text: 'Code Additions: ', value: 'additions' },
                { text: 'Code Deletions', value: 'deletions' },
                { text: 'Total Changes', value: 'total' },
            ],
            authors: [],

        }
    },
    methods:{
        async getStats(org_name){
            if(sessionStorage[org_name]){
                await this.getStatsFromLocal(org_name);
            }else{
                await this.getStatsFromAPI(org_name);
            }
            await this.updateStats();
        },
        async getStatsFromAPI(org_name){
          const url = "https://githubtrackr.herokuapp.com/api/public/orgs/" + org_name + "/stats";
            const response = await axios.get(url, {
                headers: {
                    Authorization: "token " + localStorage.access_token,
                    "Access-Control-Allow-Origin": "*",
                }
            });
            const data = response.data.data;
            sessionStorage.setItem(org_name, JSON.stringify(data));
            console.log(data)
            this.stats = data
        },
        async getStatsFromLocal(org_name){
            const data = await JSON.parse(sessionStorage.getItem(org_name));
            console.log(data)
            this.stats = data
        },        
        async updateStats(){
            const stats = this.stats;
            const authors = [];
            for(let i = 0; i < stats.length; i++){
                const author_schema = {
                    name: stats[i].author,
                    additions: stats[i].stats.additions,
                    deletions: stats[i].stats.deletions,
                    total: stats[i].stats.total,
                };
                authors.push(author_schema);
            }
            this.authors = authors;
        },
    },
    async mounted(){
      if(!sessionStorage.leaderboard_org_name){
        this.$router.push('/watchlist');
      }
      const org_name = sessionStorage.getItem("leaderboard_org_name");
      await this.getStats(org_name);
    }
}
</script>


