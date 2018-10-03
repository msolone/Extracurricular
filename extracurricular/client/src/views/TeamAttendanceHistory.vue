<template>
    <section class="team_attendance_history_page">
        <section class="attendance_entry_buttons">
            <button>Change Team</button>
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
                        <section :class="{status_marker: true, 
                            green_color: isPresent(getStatusForUserForDate(person, date)),
                            red_color: isAbsent(getStatusForUserForDate(person, date)), 
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
      } else return "❓";
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
  padding: 0 0.5em;
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
