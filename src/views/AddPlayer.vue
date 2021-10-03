<template>
  <div>
    <div>
      <label> Name: </label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label> Server: </label>
      <input type="radio" value="Alpha" v-model="server" /> Alpha
      <input type="radio" value="Beta" v-model="server" /> Beta
      <input type="radio" value="Charlie" v-model="server" /> Charlie
    </div>
    <div>
      <label> Role: </label>
      <select v-model="role">
        <option value="adc">Adc</option>
        <option value="solo">Solo</option>
        <option value="mid">Mid</option>
        <option value="sp">Sp</option>
        <option value="roam">roam</option>
      </select>
    </div>
    <div>
      <label> Status: </label>
      <input type="radio" value="online" v-model="status" />Online
      <input type="radio" value="offline" v-model="status" />Offline
    </div>
    <div>
      <label> Items: </label>
      <select multiple v-model="items">
        <option value="boots">Boots</option>
        <option value="helmet">Helmet</option>
        <option value="gloves">Gloves</option>
        <option value="weapon">Weapon</option>
        <option value="belt">Belt</option>
      </select>
    </div>
    <div> 
      <b-form-checkbox
      id="checkbox-1"
      v-model="items"
      value="boots"
      name = "checkbox-1">
      
      
      </b-form-checkbox>
    
    </div>
    <button v-on:click="processAdd" class="btn btn-success custom_btn1">
      Add
    </button>
    <router-link to="player" class="btn btn-primary custom_btn"
      >Cancel</router-link
    >
  </div>
</template>



<script>
import axios from "axios";
const API_URL = "https://jr-wildpath-project2.herokuapp.com/addplayer";



export default {
  name: "addplayer",
  data: function () {
    return {
      name: "",
      role: [],
      server: [],
      status: [],
      items: [],
    };
  },
  methods: {
    processAdd: async function () {
      let response = await axios.post(API_URL, {
        name: this.name,
        role: this.role,
        server: this.server,
        status: this.status,
        items: this.items,
      });
      console.log(response.data);
      this.$emit("new-player-added");
      console.log(this.$router);
      this.$router.push('/player');
      
      
    },
  },
};
</script>


<style>
.btn {
    margin: 10px 10px;
}
</style>