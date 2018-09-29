<template>
<section class="take_attendance_page">
    <section class="attendance_entry_buttons">
        <button>Change Team</button>
        <section class="print_save">
            <button>Print</button>
            <button>Save</button>
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
         
            <form name="attendance" >
                <tr v-for="(player, i) in TeamData" v-bind:key="i">
                    <td class="player_name">{{player.firstName + " " + player.lastName}}</td>
                    <td><input class="attendance_radio" type="radio" :name="`${i}`" value="present" checked></td>
                    <td><input class="attendance_radio" type="radio" :name="`${i}`" value="absent"></td>
                    <td><input class="attendance_radio" type="radio" :name="`${i}`" value="tardy"></td>
                </tr>
            </form>
        
        </tbody>
    </table>

</section>
</template>

<script>
export default {
  name: "TakeAttendance",
  data: function() {
    return {
      TeamData: []
    };
  },
  mounted: function() {
    console.log(this.TeamData);
    console.log(this.$route.params.TeamId);
    fetch(`https://localhost:5001/api/players/${this.$route.params.TeamId}`)
      .then(resp => resp.json())
      .then(Data => {
        console.log(Data);
        this.TeamData = Data;
      });
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
.attendance_entry_buttons button {
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
</style>
