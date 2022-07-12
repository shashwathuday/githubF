<template>
    <!-- This page should display the member's history with the app -->
     <v-container width=80 justify-center>
        <Header header_title="Leaderboard" header_background='recent' />
        <Leaderboard />
        <Redirect />
    </v-container>



</template>

<script>

    import Header from '@/components/common/Header';
  import Leaderboard from '@/components/Leaderboard';
  import Redirect from '@/components/common/Redirect';
  

  export default {
    components: {Header, Redirect, Leaderboard},

  }
</script>
