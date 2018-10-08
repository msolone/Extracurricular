<template>
<section class="take_attendance_page">
    <form name="attendance" >
        <section class="attendance_entry_buttons"> 
        <!-- Add change date feature later 
             <input class="change_date" type="date" /> -->
            <section class="print_save">
              <!-- Add print feature later 
                <button>Print</button> -->
                <input type="submit" value="Save" :disabled="isDisabled" v-on:click.prevent="submitAttendance(); lockSubmit()" data-toggle="modal" data-target="#exampleModalCenter"/>
            </section>
        </section>



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

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" v-on:blur="lockSubmit">
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
</section>
</template>

<script>
import moment from "moment";
export default {
  name: "TakeAttendance",
  data: function() {
    return {
      TeamData: [],
      currentTeamId: this.$route.params.TeamId,
      isDisabled: false
    };
  },
  mounted: function() {
    console.log(this.TeamData);
    console.log(this.$route.params.TeamId);
      fetch(
        `https://localhost:5001/api/players/${
          this.$route.params.TeamId
        }?d=${moment().format("YYYY-MM-DD")}`
      )
        .then(resp => resp.json())
        .then(Data => {
          console.log(Data);
          this.TeamData = Data.map(player => {
            player.status = player.attendance[0] ? player.attendance[0].status : "present";
            player.playerId = player.id;
            player.id = 0;
            return player;
          });
        });
  },
  methods: {
    submitAttendance: function() {
      // make if statement that patches the status if it was already there, and post if not
      fetch(`https://localhost:5001/api/attendance?d=${moment().format("YYYY-MM-DD")}`, {
        method: "PUT",
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
    },
    lockSubmit: function() {
      this.isDisabled = true;
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
  justify-content: flex-end;
  margin: 0.3em;
  align-items: center;
}

.print_save {
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
