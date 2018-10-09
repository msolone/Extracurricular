<template>
    <section class="team_attendance_history_page">
        <section class="attendance_entry_buttons">
          <form class="time_frame_radios">
            <div class="last_month" v-on:click="lastMonth" >▶︎</div> 
            <h3>{{MonthDisplay}}</h3>
            <div v-on:click="nextMonth">▶︎</div> 
          </form>
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
const date = new Date();
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
      DateHeader: [],

      MonthStart: moment(
        new Date(date.getFullYear(), date.getMonth(), 1)
      ).format("YYYY-MM-DD"),
      MonthEnd: moment(
        new Date(date.getFullYear(), date.getMonth() + 1, 0)
      ).format("YYYY-MM-DD"),
      MonthDisplay: ""
    };
  },

  mounted: function() {
    this.MonthDisplay = moment(this.MonthStart).format("MMMM");
    const currentMonth = parseInt(moment(this.MonthEnd).format("DD"));
    const week = "."
      .repeat(currentMonth)
      .split("")
      .map((_, i) =>
        moment(this.MonthEnd)
          .subtract(i, "days")
          .format("DD")
      )
      .reverse();
    console.log(week);
    this.DateHeader = week;
    fetch(`https://extracurricular.herokuapp.com/api/teams/monthly/
    ${this.$route.params.TeamId}
    ?b=${this.MonthStart}
    &e=${this.MonthEnd}`)
      .then(resp => resp.json())
      .then(Data => {
        this.TeamHistory = Data;
        console.log(Data);
      });
  },

  methods: {
    getStatusForUserForDate: function(person, dateSlug) {
    const currentMonth = parseInt(moment(this.MonthEnd).format("MM"));

      const _attendance = person.attendance.filter(
        i => moment(i.date).format("MM/DD") == currentMonth+"/"+dateSlug
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
    
    lastMonth: function() {
      this.MonthEnd = moment(this.MonthStart)
        .subtract(1, "day")
        .format("YYYY-MM-DD");
      this.MonthStart = moment(this.MonthStart)
        .subtract(1, "month")
        .format("YYYY-MM-DD");
      this.MonthDisplay = moment(this.MonthStart).format("MMMM");
      const currentMonth = parseInt(moment(this.MonthEnd).format("DD"));
      const week = "."
        .repeat(currentMonth)
        .split("")
        .map((_, i) =>
          moment(this.MonthEnd)
            .subtract(i, "days")
            .format("DD")
        )
        .reverse();
      this.DateHeader = week;
      fetch(`https://extracurricular.herokuapp.com/api/teams/monthly/
      ${this.$route.params.TeamId}
      ?b=${this.MonthStart}
      &e=${this.MonthEnd}`)
        .then(resp => resp.json())
        .then(Data => {
          this.TeamHistory = Data;
          console.log(Data);
        });
    },

    nextMonth: function(t) {
      const oldMonthEnd = this.MonthEnd;
      this.MonthEnd = moment(this.MonthStart)
        .add(2, "month")
        .subtract(1, "day")
        .format("YYYY-MM-DD");
      this.MonthStart = moment(oldMonthEnd)
        .add(1, "day")
        .format("YYYY-MM-DD");
      this.MonthDisplay = moment(this.MonthStart).format("MMMM");
      const currentMonth = parseInt(moment(this.MonthEnd).format("DD"));
        const week = "."
        .repeat(currentMonth)
        .split("")
        .map((_, i) =>
          moment(this.MonthEnd)
            .subtract(i, "days")
            .format("DD")
            
        ).reverse();
      this.DateHeader = week;
        fetch(`https://extracurricular.herokuapp.com/api/teams/monthly/
        ${this.$route.params.TeamId}
        ?b=${this.MonthStart}
        &e=${this.MonthEnd}`)
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
  justify-content: center;
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
  color: white;
  background: #103072;
  align-items: center;
}
.name_header {
  width: 30%;
  min-width: 10em;
  padding: 0 0.5em;
}
.date_header {
  width: 10%;
  padding: 0 0.05em;
  min-width: 2em;
  font-size: 0.9em;
}
tr {
  width: 100%;
  display: flex;
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
  padding: 0 0.05em;
  min-width: 2em;
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
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 0.5em;
}

.time_frame_radios div {
  font-size: 1em;
  padding: 0 0.5em;
  cursor: pointer;
  color: #545b62;
}

.time_frame_radios h3 {
  color: #545b62;
}

.time_frame_div {
  display: flex;
  align-items: center;
  
}

.last_month {
-moz-transform: scale(-1, 1);
-webkit-transform: scale(-1, 1);
-o-transform: scale(-1, 1);
-ms-transform: scale(-1, 1);
transform: scale(-1, 1);
}
</style>
