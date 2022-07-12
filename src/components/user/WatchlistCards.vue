<template>

    <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card dark target="_blank">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="info_text">{{i+1}} - {{item.name}}</v-card-title>
                <v-card-subtitle>{{item.description}}</v-card-subtitle>
                <v-card-subtitle> Updated: {{item.pushed_at}}</v-card-subtitle>
                <v-flex class="d-flex flex-wrap mb-3 ml-2">
                    <v-btn outlined small v-if="item.owner.type=='Organization'" class="mx-2" @click="previewLeaderboardForOrg(item)">Org Leaderboard</v-btn>
                    <v-btn outlined small class="mx-2" @click="previewLeaderboardForRepo(item)">Repo Leaderboard</v-btn>
                </v-flex>
              </div>
              
              <v-avatar class="ma-3" size="100" tile>
                <v-img :src="item.owner.avatar_url"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>

</template>

<script>
export default {
    name: "WatchlistCards",
    props: {
        items: Array,
    },
    data(){
        return{
            data: {}
        }
    },
    methods:{
        async previewLeaderboardForOrg(item) {
            sessionStorage.setItem("leaderboard_org_name", item.owner.login);
            this.$router.push('/leaderboard');
        },
        async previewLeaderboardForRepo(item) {
            console.log(item)
            // sessionStorage.setItem("leaderboard_org_name", item.name);
            // this.$router.push('/leaderboard');
        },
    }
}
</script>


<style scoped>
  .v-card__text, .v-card__title {
    word-break: normal; /* maybe !important  */
  }
  
</style>