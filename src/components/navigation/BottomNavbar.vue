<template>
  <v-card
  >
    <v-bottom-navigation dark app color="primary" class="d-md-none black" fixed>
      
      <v-btn to=/profile text>
        <span>Profile</span>
        <v-icon>mdi-chart-histogram</v-icon>
      </v-btn>

      <v-btn to=/dashboard text>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to=/user-repos text>
        <span>My Repos</span>
        <v-icon>mdi-database</v-icon>
      </v-btn>

      <v-btn to=/watchlist text>
        <span>Watchlist</span>
        <v-icon>mdi-playlist-star</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-card>
</template>

<script>
export default {
   data() {
    return {
    }
  }
}
</script>