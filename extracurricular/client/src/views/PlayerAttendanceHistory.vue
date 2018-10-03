<template>
    <section class="player_history_page">
        <section class="top_display">
        <section class="player_search_bar">
          <section class="player_search_bar_and_button">
            <input class="player_search_input" type="text" name="search_player_name" v-on:focus="unhidden" placeholder="  search by name..." v-model="searchName">
            <button v-on:click="searchForPlayer">Search</button>
          </section>
          <section v-bind:class="{search_list_container: true,  hidden: hasPlayerId}"> 
            <section v-bind:class="{search_list: true}" v-for="(player) in searchResults" v-bind:key="player.id"  v-on:click="updateCurrentPlayerId(player)">{{player.firstName}} {{player.lastName}}</section>
          </section>
        </section>
        <form v-bind:class="{hidden: !hasPlayerId}">
            <input type="radio" name="player_history_range" v-on:click="changeTimeFrame(7)" checked/>Last Week
            <input type="radio" name="player_history_range" v-on:click="changeTimeFrame(30)" />Last Month
            <input type="radio" name="player_history_range" v-on:click="changeTimeFrame(365)" />All Time
        </form>
        </section>
        
    <section class="calendar">
        <section class="player_info">   
            <section class="player_name">{{PlayerData.firstName}} {{PlayerData.lastName}}  </section>
        </section>
        <section class="calendar_display">
          <section class="calendar_entry"  v-for="(date, i) in PlayerAttendance" v-bind:key="i">
            <section class="calendar_date">{{formatDate(date.date)}}</section>
            <section :class="{calendar_status: true, green_color: isPresent(date.status), red_color: isAbsent(date.status), yellow_color: isTardy(date.status) }">{{renderStatus(date.status)}}</section>
         </section>
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
      hasPlayerId: false,
      TimeFrame: moment()
        .subtract(7, "days")
        .calendar()
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
      fetch(
        `https://localhost:5001/api/attendance/${
          this.CurrentPlayerId
        }?d=${moment(this.TimeFrame).format("YYYY-MM-DD")}`
      )
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
          this.PlayerAttendance = Data;
        });
    },
    unhidden: function() {
      this.hasPlayerId = false;
    },

    changeTimeFrame: function(t) {
      this.TimeFrame = moment()
        .subtract(t, "days")
        .calendar();
      fetch(
        `https://localhost:5001/api/attendance/${
          this.CurrentPlayerId
        }?d=${moment(this.TimeFrame).format("YYYY-MM-DD")}`
      )
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
          this.PlayerAttendance = Data;
        });
    },
    lastWeek: function() {
      this.TimeFrame = moment()
        .subtract(7, "days")
        .calendar();
      fetch(
        `https://localhost:5001/api/attendance/${
          this.CurrentPlayerId
        }?d=${moment(this.TimeFrame).format("YYYY-MM-DD")}`
      )
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
          this.PlayerAttendance = Data;
        });
    },
    lastMonth: function() {
      this.TimeFrame = moment()
        .subtract(30, "days")
        .calendar();
      fetch(
        `https://localhost:5001/api/attendance/${
          this.CurrentPlayerId
        }?d=${moment(this.TimeFrame).format("YYYY-MM-DD")}`
      )
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
          this.PlayerAttendance = Data;
        });
    },
    lastYear: function() {
      this.TimeFrame = moment()
        .subtract(365, "days")
        .calendar();
      fetch(
        `https://localhost:5001/api/attendance/${
          this.CurrentPlayerId
        }?d=${moment(this.TimeFrame).format("YYYY-MM-DD")}`
      )
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
          this.PlayerAttendance = Data;
        });
    },
    renderStatus: function(status) {
      if (status.toLowerCase() === "present") {
        return "✔︎";
      } else if (status.toLowerCase() === "absent") {
        return "✘";
      } else return "🕐";
    },
    isPresent: function(status) {
      if (status.toLowerCase() === "present") {
        return true;
      } else {
        return false;
      }
    },
    isAbsent: function(status) {
      if (status.toLowerCase() === "absent") {
        return true;
      } else {
        return false;
      }
    },
    isTardy: function(status) {
      if (status.toLowerCase() === "tardy") {
        return true;
      } else {
        return false;
      }
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
  padding: 0.5em 0;
}
.top_display {
  /* height: 35%; */
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
  border: 0.5px solid white;
  padding: 0 0.5em;
}
.calendar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 80%;
}
.calendar_entry {
  width: 13%;
  height: 20%;
  min-width: 3em;
  min-height: 3em;
}
.calendar_date {
  background: #103072;
  color: white;
  border: 0.5px solid white;
  text-align: center;
  font-size: 0.8em;
  height: 18%;
  font-weight: bold;
}
.calendar_status {
  border: 0.5px solid white;
  padding: 0 0.5em;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.player_search_bar_and_button {
  display: flex;
}

.search_list_container {
  position: relative;
  background: white;
  z-index: 1000;
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

form {
  margin: 1em 0;
}
.calendar_display {
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
}
.player_name {
  font-size: 1.5em;
}
.green_color {
  background: #AFC9A6;
}
.red_color {
  background: #F0C1BD;
}
.yellow_color {
  background: #D4D491;
}
</style>
