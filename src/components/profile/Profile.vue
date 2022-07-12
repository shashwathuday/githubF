<template>
  <div>
    <Header :v-if="profile" :header_title=profile.name header_background="recent" />
    <v-card :href=profile.html_url target="_blank" dark>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="info_text">{{profile.name}}</v-card-title>
            <v-card-subtitle>Bio: {{profile.bio}}</v-card-subtitle>
            <v-card-text>Followers: {{profile.followers}}   |   Following: {{profile.following}}</v-card-text>
        </div>
        
        <v-avatar class="ma-3" size="100" tile>
          <v-img :src="profile.avatar_url"></v-img>
        </v-avatar>
      </div>
    </v-card>
</div>
    
</template>

<script>

import axios from 'axios';
import Header from '../common/Header'

export default {
    components: {Header},
    data() {
      return {
          profile: null
      }
    },
    methods : {
        async getUser(){
            if(localStorage.profile){
              await this.getUserFromLocal();
            }else{
              await this.getUserFromAPI();
            }
        },
        async getUserFromAPI(){
          const url = "https://githubtrackr.herokuapp.com/api/user"
            const response = await axios.get(url, {
                headers: {
                    Authorization: "token " + localStorage.access_token,
                    "Access-Control-Allow-Origin": "*",
                }
            });
            const profile = response.data.data;
            this.profile = profile
            localStorage.setItem('profile', JSON.stringify(profile));
        },
        async getUserFromLocal(){
          this.profile = JSON.parse(localStorage.getItem('profile'));
        }
    },
    async beforeMount(){
      await this.getUser();
    }
}
</script>