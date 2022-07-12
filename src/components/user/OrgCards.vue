<template>

    <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card dark :href=item.html_url target="_blank">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="info_text">{{i+1}} - {{item.login}}</v-card-title>
                <v-card-subtitle>{{item.name}}</v-card-subtitle>
                <v-card-subtitle>{{item.description}}</v-card-subtitle>
                <v-card-subtitle> Followers: {{item.followers}}</v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="100" tile>
                <v-img :src="item.avatar_url"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>

</template>

<script>
export default {
    name: "OrgCards",
    props: {
        items: Array,
    }
}
</script>


<style scoped>
  .v-card__text, .v-card__title {
    word-break: normal; /* maybe !important  */
  }
  
</style>