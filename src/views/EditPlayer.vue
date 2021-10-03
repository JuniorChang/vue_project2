<template>
  <div>
    <h1>Editing {{ JSON.parse(playerdata).name }}</h1>
    <!-- <table class="table" id="table_id">
      <thead>
        <tr>
          <th>Username</th>
          <th>Server</th>
          <th>Online Status</th>
          <th>Role</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input v-model="name" /></td>
          <div>
            <label> Server </label>
            <td><input v-model="server" type="radio" value="Alpha" /></td>
            Alpha
            <td><input v-model="server" type="radio" value="Beta" /></td>
            Beta
            <td><input v-model="server" type="radio" value="Charlie" /></td>
            Charlie
          </div>
          <div>
            <label> Status </label>
            <td><input v-model="status" type="radio" value="online" /></td>
            Online
            <td><input v-model="status" type="radio" value="offline" /></td>
            Offline
          </div>
          <td>{{ JSON.parse(playerdata).role }}</td>
          <td>{{ JSON.parse(playerdata).items }}</td>
        </tr>
      </tbody>
      <button v-on:click="Editplayer" class="btn btn-success custom_btn1">
        Edit
      </button>
    </table> -->
    <div class="card">
      
      <div>
        <h6>Name: <input v-model="name" /></h6>
      </div>
      <div>
        <h6>
          Server: <input v-model="server" type="radio" value="Alpha" /> Alpha
          <input v-model="server" type="radio" value="Beta" /> Beta
          <input v-model="server" type="radio" value="Charlie" /> Charlie
        </h6>
      </div>
      <div>
        <h6>
          Role: <input v-model="role" type="radio" value="adc" /> Adc
          <input v-model="role" type="radio" value="sp" /> Sp
          <input v-model="role" type="radio" value="roam" /> Roam
          <input v-model="role" type="radio" value="mid" /> Mid
          <input v-model="role" type="radio" value="solo" /> Solo
        </h6>
      </div>
      <div>
        Status: <input v-model="status" type="radio" value="online" /> Online
        <input v-model="status" type="radio" value="offline" /> Offline
      </div>
      <div>
        Items:
        <select multiple v-model="items">
          <option value="boots">Boots</option>
          <option value="helmet">Helmet</option>
          <option value="gloves">Gloves</option>
          <option value="weapon">Weapon</option>
          <option value="belt">Belt</option>
        </select>
      </div>
      <div> 
        <button v-on:click="Editplayer" class="btn btn-success custom_btn1">Confirm </button>
        <button v-on:click="Cancel" class="btn btn-danger"> Cancel </button>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
// const API_URL = `http://localhost:3000/showplayer/${this.playerid}/update`;

export default {
  name: "EditPlayer",
  data: function () {
    return {
      playerid: JSON.parse(this.playerdata)._id,
      name: JSON.parse(this.playerdata).name,
      role: JSON.parse(this.playerdata).role,
      server: JSON.parse(this.playerdata).server,
      status: JSON.parse(this.playerdata).status,
      items: JSON.parse(this.playerdata).items,
    };
  },
  methods: {
    Editplayer: async function () {
      let response = await axios.put(
        `https://jr-wildpath-project2.herokuapp.com/${this.playerid}/update`,
        {
          name: this.name,
          role: this.role,
          server: this.server,
          status: this.status,
          items: this.items,
        }
      );
      this.$router.push('/player');
    },
    Cancel: async function(){
        this.$router.push('/player');
    }
  },
  props: ["playerdata"],
};
</script>



<style scoped>

.btn {
    margin:  10px 10px;
}
</style>