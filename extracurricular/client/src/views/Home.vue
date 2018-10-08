<template>
  <div class="home">
    <section class="my-teams-dropdown">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle"
        type="button" id="dropdownMenu1" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        {{ team_name }}
        </button>
      <ul class="dropdown-menu teams_dropdown" aria-labelledby="dropdownMenu1" >
        <li class="dropdown-item" v-for="team in TeamsArray" v-bind:key="team.id" v-on:click="updateTeamName(team)" >
          {{team.name}}
          </li>
      </ul>
      </div>
    </section>
    <section class="attendance-buttons">
      <router-link :to="`/home/take_attendance/${currentTeamId}`">
        <button class="attendance-button">Take Attendance</button>
      </router-link>
      <router-link :to="`/home/team_attendance_history/${currentTeamId}`">
        <button class="attendance-button">Attendance History</button>
      </router-link>
    </section>
      <section class="player_search_bar">
           <input class="player_search_input" 
           type="text"
           name="search_player_name" 
           v-on:focus="unhidden" 
           v-on:keyup="searchForPlayer" 
           placeholder="  Search by name..." 
           v-model="searchName">
        <section v-bind:class="{search_list_container: true,  hidden: hasPlayerId}"> 
          <section 
          v-bind:class="{search_list: true}" 
          v-for="(player) in searchResults" v-bind:key="player.id"  
          v-on:click="updateCurrentPlayerId(player)">
          {{player.firstName}} {{player.lastName}}
          </section>
        </section>
      </section>
    <section class="adding-section">
    <section class="adding-section-top">
      <router-link class="add-team" to="/home/add_team">
        <h5>Add Team</h5><button ><h4>+</h4></button>
      </router-link>
      <router-link class="remove-team" to="/home/remove_team">
        <h5>Remove Team</h5><button><h4>+</h4></button>
      </router-link>
    </section>
      <section class="adding-section-bottom">
      <router-link class="add-player" to="/home/add_player">
        <h5>Add Player</h5><button><h4>+</h4></button>
      </router-link>
      <router-link class="remove-player" to="/home/remove_player">
        <h5>Remove Player</h5><button><h4>+</h4></button>
      </router-link>
      </section>
    </section>
  </div>
</template>

<script>
import router from "vue-router";
export default {
  name: "Home",
  props:{
    auth: Object
  },
  data: function() {
    return {
      team_name: "My Teams",
      TeamsArray: [],
      currentTeamId: 0,
      searchName: "",
      hasPlayerId: false,
      searchResults: [],
      CurrentPlayerId: 0,
      user: {
        given_name: '',
        family_name: ''
      }
    };
  },
  mounted: function() {
    this.auth.getProfile((err, user) => {
      console.log({ err, user });
      this.user = user;
    });
    fetch("https://localhost:5001/api/Teams")
      .then(resp => resp.json())
      .then(TeamData => {
        this.TeamsArray = TeamData;
        this.currentTeamId = TeamData[0].id;
        this.team_name = TeamData[0].name;
      });
  },
  methods: {
    updateTeamName: function(team) {
      this.currentTeamId = team.id;
      this.team_name = team.name;
    },
    unhidden: function() {
      this.hasPlayerId = false;
    },
    searchForPlayer: function() {
      fetch(`https://localhost:5001/api/search?q=${this.searchName}`)
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
          this.searchResults = Data;
        });
    },
    updateCurrentPlayerId: function(player) {
      this.CurrentPlayerId = player.id;
      this.hasPlayerId = true;
      this.$router.push({
        path: `/home/player_attendance_history/${this.CurrentPlayerId}`
      });
    }
  }
};
</script>

<style scoped>
.home {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 3px solid #103072;
  border-radius: 0.5em;
}
button {
  border: 3px solid #103072;
  color: white;
  font-weight: bold;
  background: #103072;
  height: 2.5em;
  border-radius: 0.2em;
  padding: 0.4em 0.8em;
}

.dropdown {
  background: none;
  padding-right: 0;
}
.dropdown button {
  padding: 0 2em;
}
.btn-secondary.dropdown-toggle {
  background: #103072;
}
.dropdown-toggle::after {
  content: "";
}
.attendance-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 5em;
}
input {
  border: 1px solid #545b62;
  width: 18em;
}
.search-by-name {
  display: flex;
  justify-content: center;
}
.search-button {
  border: 3px solid #103072;
  color: white;
  font-weight: bold;
  background: #103072;
  height: 2.5em;
  border-radius: 0.2em;
  padding: 0.4em 0.8em;
}
.adding-section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
h5 {
  padding-top: 0.5em;
  color: #103072;
}
.adding-section button {
  height: 2.5em;
  width: 2.5em;
  border-radius: 1.25em;
  margin: 0.5em;
  padding: 0.2em;
}
.adding-section button h4 {
  text-align: center;
  font-weight: bold;
}

.adding-section-top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 0.5em;
}
.add-team {
  display: flex;
  align-items: center;
}

.remove-team {
  display: flex;
  align-items: center;
}

.adding-section-bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 0.5em;
  padding-top: 1.5em;
}
.add-player {
  display: flex;
  align-items: center;
}
.remove-player {
  display: flex;
  align-items: center;
}

.teams_dropdown {
  max-height: 8em;
  overflow: scroll;
}

.player_search_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 90% */
}

.search_list_container {
  position: relative;
  background: white;
  width: 80%;
  z-index: 1000;
  max-width: 20em;
}

.search_list {
  display: flex;
  flex-direction: column;
  padding: 0.05em 0;
  border: 2px solid #545b62;
  margin: 0.05em 0;
}

.search_list:active {
  background: #103072;
  color: white;
}

.player_search_input {
  border: 0.5px solid #545b62;
  width: 80%;
  min-height: 2em;
  max-width: 20em;
}
</style>

