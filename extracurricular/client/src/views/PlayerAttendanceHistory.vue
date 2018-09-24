<template>
    <section class="player_history_page">
        <section class="top_display">
        <section class="player_search_bar">
            <input class="player_search_input" type="text" name="search_player_name" placeholder="search by name...">
            <button>Search</button>
        </section>
        <section class="player_info">   
            <section class="player_name">{{PlayerHistory.team.players[0].first_name}} {{PlayerHistory.team.players[0].last_name}}  </section>
            <section class="player_team"> Team: {{PlayerHistory.team.team_name}}</section>
        </section>
        <form>
            <input type="radio" name="player_history_range" checked/>Last Week
            <input type="radio" name="player_history_range"/>Last Month
            <input type="radio" name="player_history_range"/>All Time
        </form>
        </section>
        <!-- <table>
            <thead class="date_header">
                <th class="date_head" v-for="(date, i) in PlayerHistory.date_range" v-bind:key="i">
                    {{date}}
                </th>
            </thead>
            <tbody>
                <tr>
                    <td class="status_display" v-for="(date, i) in PlayerHistory.attendance" v-bind:key="i">
                        {{date.status}}
                    </td>
                </tr>
            </tbody>
        </table> -->
    <section class="calendar">
        <section class="calendar_entry"  v-for="(date, i) in PlayerHistory.team.players[0].attendance" v-bind:key="i">
            <section class="calendar_date">{{date.date}}</section>
            <section class="calendar_status">{{date.status}}</section>
        </section>
    </section>
    </section>
</template>

<script>
import PlayerData from "../Data/practice_player_history";
export default {
  name: "PlayerAttendanceHistory",
  data: function() {
    return {
      PlayerHistory: PlayerData
    };
  },
  mounted: function() {
    console.log(PlayerData.varsity[0].attendance);

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
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.player_search_bar {
    display: flex;
    justify-content: center;
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


input[type=radio] {
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
.calendar  {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 80%;
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

</style>
