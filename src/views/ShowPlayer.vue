<template>
  <div>
    <h1>Player List</h1>

    <!-- <div class="container" >
        <p> Search: <input class="textbox" type="text" v-model="searching"/> </p>
        <ul>
            <li v-for="(b, index) in filtereddata" :key='index'> {{b.playerdata}} </li>
        </ul>
    </div> -->

    <div class="row">
      <div
        class="col-md-4"
        v-for="playerdata in playerdata"
        :key="playerdata.id"
      >
        <div class="card text-center">
          <div class="card-body">
            <img
              class="picbody"
              src="../assets/squareBanner.jpg"
              style="width: 100%" 
            />
            <div class="carddisplay">
              <h4 class="card-title">Name: {{ playerdata.name }}</h4>
              <p class="">Server: {{ playerdata.server }}</p>
              <p class="">Status: {{ playerdata.status }}</p>
              <p class="">Role: {{ playerdata.role }}</p>
              <p class="">Items: {{ playerdata.items }}</p>
              <button class="btn btn-outline-success">
                <router-link
                  :to="{
                    name: 'editPlayer',
                    params: {
                      playerdata: JSON.stringify({
                        name: playerdata.name,
                        server: playerdata.server,
                        role: playerdata.role,
                        status: playerdata.status,
                        items: playerdata.items,
                        _id: playerdata._id,
                      }),
                    },
                  }"
                >
                  Edit
                </router-link>
              </button>
              <button
                class="btn btn-danger"
                v-on:click="deleteplayer(playerdata._id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="table-responsive table">
        <table class="table" id="table_id">
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
                <tr v-for="playerdata in playerdata" :key="playerdata.id">
                    <td> {{playerdata.name}}</td>
                    <td> {{playerdata.server}}</td>
                    <td> {{playerdata.status}}</td>
                    <td> {{playerdata.role}}</td>
                    <td> {{playerdata.items}}</td>
                    <button class="btn btn-primary"> <router-link :to="{name:'editPlayer', params:{playerdata:JSON.stringify({name: playerdata.name, server: playerdata.server, role:playerdata.role, status: playerdata.status, items:playerdata.items, _id: playerdata._id})}}"> Edit </router-link> </button>
                    <button class="btn btn-danger" v-on:click="deleteplayer"> Delete </button>
                </tr>
            </tbody>
        </table>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "https://jr-wildpath-project2.herokuapp.com/showplayer";
const update_URL = "http://localhost:3000/showplayer/:id/update";

export default {
  name: "playerdata",
  data: function () {
    return {
      playerdata: [],
    };
  },
  // async created(){
  //     let response = await axios.get('playerid.json');
  //     this.playerid = response.data;
  //     console.log("Created");
  // },
  // computed:{
  //     filtereddata: function(){
  //         let filtered = this.playerid.filter((eachplayerid)=>{
  //             return eachplayerid.playerid()
  //         })
  //         return filtered;
  //     }
  // },

  mounted: async function () {
    let response = await axios.get(API_URL);
    this.playerdata = response.data;
  },
  methods: {
    update: function (playerdata) {
      this.$emit("update-player", playerdata);
    },
    deleteplayer: async function (playerid) {
      console.log(playerid);
      let response = await axios.delete(
        `https://jr-wildpath-project2.herokuapp.com/showplayer/${playerid}`
      );
      console.log(response);
      this.$router.go("/player");
    },
  },
};
</script>

<style scoped>
.table {
  max-width: 80vw;
}

.card{
  margin-top: 70px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.card-body {
  margin-top: 10px;
  border-radius: 5px;
}

.btn:hover {
  color: goldenrod;
  background-color: purple;
}

.btn {
  margin: 0 5px;
}

.container {
  margin-top: 40px;
  justify-items: left;
}

.container > p {
  font-size: 10;
}

.textbox {
  max-width: 200px;
}

.carddisplay{
  margin-top: -300px;
}

.picbody{
  margin-top: -20px;
  max-height: 370px;
}
</style>

