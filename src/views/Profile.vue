<template>
    <!-- This page should display the member's history with the app -->
     <v-container width=80 justify-center>
        <Profile />
        <Redirect />
    </v-container>



</template>

<script>

  import Redirect from '@/components/common/Redirect';
  import Profile from '@/components/profile/Profile';

  export default {
    components: {Redirect, Profile},

  }
</script>
