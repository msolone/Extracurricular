<template>
    <section class="team_attendance_history_page">
        <section class="attendance_entry_buttons">
          <form class="time_frame_radios">
            <input type="radio" class="time_frame_radio" name="team_history_range" v-on:click="changeTimeFrame(7)" checked/><div>Week</div>
            <input type="radio" class="time_frame_radio" name="team_history_range" v-on:click="changeTimeFrame(30)" /><div>Month</div>
            <input type="radio" class="time_frame_radio" name="team_history_range" v-on:click="changeTimeFrame(365)" /><div>Year</div>
          </form>
            <section class="print_save">
                <button>Print</button>
                <button>Save</button>
            </section>
        </section>
        <table>
            <thead>
                <th class="name_header">Name</th>
                <th class="date_header" v-for="(date, i) in DateHeader" v-bind:key="i">{{date}}</th> 
            </thead>
            <tbody>
                 <tr v-for="(person, i) in TeamHistory" v-bind:key="i">
                     <section class="name_row">{{person.firstName}} {{person.lastName}}</section>
                     <section  class="status_marker" v-for="(date, j) in DateHeader" v-bind:key="j">
                        <section :class="{status_style: true, 
                            green_color: isPresent(getStatusForUserForDate(person, date)),
                            red_color: isAbsent(getStatusForUserForDate(person, date)),
                            gray_color: isNoMark(getStatusForUserForDate(person, date)), 
                            yellow_color: isTardy(getStatusForUserForDate(person, date))}">
                            {{renderStatus(getStatusForUserForDate(person, date))}}
                        </section>
                     </section>
                </tr>
    
            </tbody>
        </table> 
    </section>
</template>

<script>
import moment from "moment";
export default {
  name: "TeamAttendanceHistory",
  data: function() {
    return {
      TeamHistory: [],
      TimeFrame: moment(
        moment()
          .subtract(7, "days")
          .calendar()
      ).format("YYYY-MM-DD"),
      DateHeader: []
    };
  },

  mounted: function() {
    const week = "."
      .repeat(7)
      .split("")
      .map((_, i) =>
        moment()
          .subtract(i, "days")
          .format("MM/DD")
      );
    console.log({ week });
    this.DateHeader = week;
    fetch(`https://localhost:5001/api/teams/history/${this.$route.params.TeamId}
                                    ?d=${this.TimeFrame}`)
      .then(resp => resp.json())
      .then(Data => {
        this.TeamHistory = Data;
        console.log(Data);
      });
  },

  methods: {
    getStatusForUserForDate: function(person, dateSlug) {
      const _attendance = person.attendance.filter(
        i => moment(i.date).format("MM/DD") == dateSlug
      )[0];
      return _attendance ? _attendance.status : "no marks";
    },
    formatDate: function(date) {
      return moment(date).format("MM/DD");
    },
    renderStatus: function(status) {
      if (status.toLowerCase() === "present") {
        return "✔︎";
      } else if (status.toLowerCase() === "absent") {
        return "✘";
      } else if (status.toLowerCase() === "tardy") {
        return "🕐";
      } else return "?";
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
    isNoMark: function(status) {
      if (status.toLowerCase() === "no marks") {
        return true;
      } else {
        return false;
      }
    },
    changeTimeFrame: function(t) {
    const week = "."
      .repeat(t)
      .split("")
      .map((_, i) =>
        moment()
          .subtract(i, "days")
          .format("MM/DD")
      );
    this.DateHeader = week;
      this.TimeFrame = moment(moment()
        .subtract(t, "days")
        .calendar()).format("YYYY-MM-DD");
      fetch(`https://localhost:5001/api/teams/history/${this.$route.params.TeamId}
                                    ?d=${this.TimeFrame}`)
      .then(resp => resp.json())
      .then(Data => {
        this.TeamHistory = Data;
        console.log(Data);
      });;
    }
  }
};
</script>

<style scoped>
.team_attendance_history_page {
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
table {
  width: 100%;
}
tbody {
  width: 100%;
}

thead {
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  color: white;
  background: #103072;
}
.name_header {
  width: 30%;
  min-width: 10em;
  padding: 0 0.5em;
}
.date_header {
  width: 10%;
  padding: 0 0.5em;
}
tr {
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
}
td {
  border: 0.5px solid #545b62;
}

.name_row {
  width: 30%;
  border: 0.5px solid #545b62;
  min-width: 10em;
  padding: 0 0.5em;
}
.status_marker {
  width: 10%;
  padding: 0 0.04em;
}
.status_style {
  width: 100%;
  padding: 0 0.5em;
}

.green_color {
  background: #afc9a6;
}
.red_color {
  background: #ffb0a9;
}
.yellow_color {
  background: #d4d491;
}
.gray_color {
  color: white;
  font-weight: bolder;
  background: #a2a2a1;
}

.time_frame_radios {
    display: flex;
    align-items: center;
}

.time_frame_radios div {
   font-size: 1em;
   padding: 0 0.5em;
}
</style>
