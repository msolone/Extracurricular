<template>
    <section class="player_history_page">
        <section class="top_display">
        <section class="player_search_bar">
          <section class="player_search_bar_and_button">
            <input class="player_search_input" type="text" name="search_player_name" v-on:focus="unhidden" placeholder="  search by name..." v-model="searchName">
            <button v-on:click="searchForPlayer">Search</button>
          </section>
          <section> 
            <section v-bind:class="{search_list: true, hidden: hasPlayerId}" v-for="(player) in searchResults" v-bind:key="player.id"  v-on:click="updateCurrentPlayerId(player)">{{player.firstName}} {{player.lastName}}</section>
          </section>
        </section>
        <form>
            <input type="radio" name="player_history_range" checked/>Last Week
            <input type="radio" name="player_history_range"/>Last Month
            <input type="radio" name="player_history_range"/>All Time
        </form>
        </section>
        
    <section class="calendar">
        <section class="player_info">   
            <section class="player_name">{{PlayerData.firstName}} {{PlayerData.lastName}}  </section>
        </section>
        <section class="calendar_entry"  v-for="(date, i) in PlayerAttendance" v-bind:key="i">
            <section class="calendar_date">{{formatDate(date.date)}}</section>
            <section class="calendar_status">{{date.status}}</section>
        </section>
    </section> 
    </section>
</template>

<script>
import moment from "moment";
export default {
  name: "PlayerAttendanceHistory",
  data: function() {
    return {
      PlayerData: "",
      PlayerAttendance: "",
      CurrentPlayerId: 0,
      searchName: "",
      searchResults: [],
      hasPlayerId: false
    };
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format("MM/DD");
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
      fetch(`https://localhost:5001/api/players/player/${this.CurrentPlayerId}`)
        .then(resp => resp.json())
        .then(Data => {
          this.PlayerData = Data[0];
        });
      fetch(`https://localhost:5001/api/attendance/${this.CurrentPlayerId}`)
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
          this.PlayerAttendance = Data;
        });
    },
    unhidden: function() {
        this.hasPlayerId = false;
    }
  }
};
</script>

<style scoped>
.player_history_page {
  overflow: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5em;
}
.top_display {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
}
.player_search_bar {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.player_search_bar button {
  background: #103072;
  color: white;
  padding: 0 0.5em;
}
.player_search_input {
  border: 0.5px solid #545b62;
  width: 80%;
  height: 2em;
}
.player_info {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.player_info section {
  font-weight: 900;
}

input[type="radio"] {
  padding: 0 1em;
  margin: 0 0.2em;
}

.date_head {
  background: #103072;
  color: white;
  padding: 0 0.5em;
}
.status_display {
  border: 0.5px solid #545b62;
  padding: 0 0.5em;
}
.calendar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 25%;
}
.calendar_entry {
  width: 13%;
}
.calendar_date {
  background: #103072;
  color: white;
  border: 0.5px solid #545b62;
  /* padding: 0 0.5em; */
  height: 20%;
  text-align: center;
}
.calendar_status {
  border: 0.5px solid #545b62;
  padding: 0 0.5em;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.player_search_bar_and_button {
  display: flex;
}

.search_list {
  display: flex;
  flex-direction: column;
  padding: 0.2em 0;
  border: 2px solid #545b62;
  margin: 0.1em 0;
}

.search_list:active {
  background: #103072;
  color: white;
}

.hidden {
  display: none;
}
</style>
