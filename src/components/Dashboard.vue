<template>
    <header v-bind:style="bgc">
        <div class="images">
            <v-img v-if="random1" :src="random1" class="under" width="180px" height="180px" > </v-img>
            <v-img v-if="random2" :src="random2" class="above" width="170px" height="170px"/>
        </div>
        <div class="menu">
            <span v-if="greeting" class="greeting">{{greeting}},</span>
            <h1 v-if="profile">{{profile.name}}</h1>
            <div class="menu-options">
                <Miniboard title="Profile" background='recent' route='/profile' />
                <Miniboard title="My Repos" background='track' route='/user-repos' />
                <Miniboard title="My Orgs" background='artist' route='/user-orgs' />
                <Miniboard title="Watchlist" background='insight' route='/watchlist' />
            </div>
        </div>
    </header>
    
</template>


<script>
import axios from 'axios';
import Miniboard from '@/components/common/Miniboard';

export default {
    name: 'Dashboard',
    components: {Miniboard},
    props: {
        profile: Object,
    },
    data(){
        return{
            items: [],
            term: "short_term",
            greeting: null,
            random1: null,
            random2: null,
            imageColors: null,
            bgc: {
                background: '',
                color: '',
            }
        }
    },
    methods: {
        computeGreeting(){
            var date = new Date();
            const time = date.getHours();
            if(time >= 4 && time < 12) this.greeting = "Good Morning";
            else if(time >= 12 && time < 17) this.greeting = "Good Afternoon";
            else this.greeting = "Good Evening";
        },
        routeTo(route){
            this.$router.push(route);
        },
        async mounted(){
            this.computeGreeting();
            await this.getUserTop();
            this.setRandom();
        }
    }
}
</script>


<style scoped>

    header{
        height: 70vh;
        max-height: 450px;
        border-radius: 0 0 90px 20px;
    }

    .images{
        height: 275px;
    }

    .under{
        position: absolute;
        top: 40px;
        left: 180px;
        border-radius: 30px;

        -webkit-animation: fadein 1.2s, mover 2.5s infinite  alternate ;
        animation: fadein 1.2s, mover 2.5s infinite  alternate ;
        animation-delay: 0ms, 2000ms;
    }
    
    .above{
        position: absolute;
        top: 70px;
        left: 20px;
        border-radius: 30px;

        -webkit-animation: fadein 2s alternate, mover 2.25s infinite  alternate ;
        animation: fadein 2s alternate, mover 2.25s infinite  alternate ;
        animation-delay: 0ms, 3000ms;
    }

    @keyframes fadein {
        0% {opacity: 0; }
        25%{ opacity: 0;  transform: scale(0.5);}
        100% {opacity: 1; transform: scale(1);}
    }
    @-webkit-keyframes fadein {
        0% {opacity: 0; }
        25%{ opacity: 0;  -webkit-transform: scale(0.5);}
        100% {opacity: 1; -webkit-transform: scale(1);}
    }


    @-webkit-keyframes mover {
        0% { -webkit-transform: translateY(0); }
        100% { -webkit-transform: translateY(-12px); }
    }
    @keyframes mover {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }

    .menu{
        margin: 0 10%;
    }

    @import url('https://fonts.googleapis.com/css2?family=Signika:wght@600&display=swap');
    h1{
        position: absolute;
        white-space: nowrap;
        animation: floatText 2s alternate ease-in-out;
    }

    .greeting{
        font-family: 'Signika', sans-serif;
        animation: floatText 2s alternate ease-in-out;
    }


    .menu-options{
        position: relative;
        top: 75px;
        font-family:'Signika', sans-serif;
        padding-bottom: 80px;
        -webkit-animation: fadein 2s alternate, mover 2.25s infinite  alternate ;
        animation: fadein 2s alternate, mover 2.25s infinite  alternate ;
        animation-delay: 0ms, 3000ms;
    }

    @-webkit-keyframes floatText{
        0% {left: 0%; opacity: 0; }
        66%{ left: 0%; opacity: 0; }
        100% { left: 10%; opacity: 1;}
    }

    @keyframes floatText{
        0% {left: 0%; opacity: 0; }
        66%{ left: 0%; opacity: 0; }
        100% { left: 10%; opacity: 1;}
    }


</style>