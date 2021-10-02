<template>
<div>
  <!-- <img class="banner" src="./assets/banner.png"> -->
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link to="/player">Show Players</router-link>
    <router-link to="/addplayer">Add Players</router-link>
    
  </div>
  <router-view />
  <!-- <div>

    <showPlayer v-if="page == 'ShowPlayer'" v-on: update-player = "editingplayer" />
  </div> -->
  
</div>
  
</template>

<script> 
import axios from "axios";
// import ShowPlayer from './views/ShowPlayer.vue';

export default{
  // components: { ShowPlayer },
  name: 'App',
  data: function () {
    return{}
  },
  
  methods: {
    update: async function() {
      let response = await axios.patch(update_URL, {
        name: this.name,
        role: this.role,
        server: this.server,
        status: this.status,
        items:this.items
      });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background: crimson;
}

.banner{
  min-width: 100vw;
}
</style>
