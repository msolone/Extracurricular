<template>
<section class="take_attendance_page">
    <form name="attendance" >
        <section class="attendance_entry_buttons">
            <input class="change_date" type="date" />
            <section class="print_save">
                <button>Print</button>
                <input type="submit" value="Save" v-on:click.prevent="submitAttendance" data-toggle="modal" data-target="#exampleModalCenter"/>
            </section>
        </section>

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Message from Extracurricular</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
          <div class="modal-body">
              Attendance Submitted
          </div>
             <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             </div>
            </div>
          </div>
        </div>

     <table class="take_attendance_table">
            <tbody>
                <tr>
                    <th class="player_name">NAME</th>
                    <th>PRE</th>
                    <th>ABS</th>
                    <th>TAR</th>
                </tr>
         
                <tr v-for="(player) in TeamData" v-bind:key="player.playerId"
                :class="{green_color: isPresent(player.status), red_color: isAbsent(player.status), yellow_color: isTardy(player.status)}">
                    <td class="player_name"><router-link class="link" :to="`/home/player_attendance_history/${player.playerId}`">{{player.firstName + " " + player.lastName}}</router-link></td>
                    <td><input class="attendance_radio" type="radio" :name="`${player.playerId}`" v-model="player.status" value="present"></td>
                    <td><input class="attendance_radio" type="radio" :name="`${player.playerId}`" v-model="player.status" value="absent"></td>
                    <td><input class="attendance_radio" type="radio" :name="`${player.playerId}`" v-model="player.status" value="tardy"></td>
                </tr>
        
            </tbody>
     </table>

    </form>
</section>
</template>

<script>
import moment from "moment";
export default {
  name: "TakeAttendance",
  data: function() {
    return {
      TeamData: [],
      currentTeamId: this.$route.params.TeamId
    };
  },
  mounted: function() {
    console.log(this.TeamData);
    console.log(this.$route.params.TeamId);
    fetch(`https://localhost:5001/api/players/${this.$route.params.TeamId}`)
      .then(resp => resp.json())
      .then(Data => {
        console.log(Data);
        this.TeamData = Data.map(player => {
          player.status = "present";
          player.playerId = player.id;
          player.id = 0;
          return player;
        });
      });
  },
  methods: {
    submitAttendance: function() {
      fetch(`https://localhost:5001/api/attendance`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.TeamData)
      })
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
        });
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
.take_attendance_page {
  width: 100%;
  height: 80%;
  overflow: scroll;
}
.attendance_entry_buttons {
  display: flex;
  justify-content: space-between;
  margin: 0.3em;
}
.attendance_entry_buttons button,
input {
  padding: 0.2em 1em;
  background: #e0e0e0;
  margin: 0 0.2em;
}
.change_date {
  padding: 0.2em 1em;
  background: #e0e0e0;
  margin: 0 0.2em;
}
.take_attendance_table {
  height: 80%;
  width: 100%;
}
tbody {
  width: 100%;
}

tr {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
td {
  width: 15%;
  border: 0.5px solid #545b62;
  /* padding: 0.5em */
}

form {
  width: 100%;
}
th {
  width: 15%;
  color: white;
  background: #103072;
}
.player_name {
  width: 55%;
}

.attendance_rows {
  width: 100%;
}
.link {
  color: #545b62;
}
.green_color {
  background: #afc9a6;
}
.red_color {
  background: #f0c1bd;
}
.yellow_color {
  background: #d4d491;
}
</style>
