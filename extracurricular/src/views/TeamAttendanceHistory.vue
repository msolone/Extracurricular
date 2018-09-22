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
                <th class="date_header" v-for="(date, i) in TeamHistory.date_range" v-bind:key="i">
                    {{date}}
                </th>
            </thead>
            <tbody>
                 <tr v-for="(person, i) in TeamHistory.varsity" v-bind:key="i">
                     <section class="name_row">{{person.first_name + ' ' + person.last_name}}</section>
                     <td class="status_marker" v-for="(col, j) in person.attendance" v-bind:key="j">
                        <section>{{col.status}}</section>
                     </td>
      
                </tr>
    
            </tbody>
        </table>
    </section>
</template>

<script>
import TeamData from '../Data/practice_attendance_table'
export default {
    name: 'TeamAttendanceHistory',
    data: function() {
        return {
            TeamHistory: TeamData
        }
    },

    mounted: function() {
        console.log(this.TeamHistory)
        console.log(this.TeamHistory.varsity[0].attendance)
        },
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
    background: #E0E0E0;
    margin: 0 0.2em
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
    justify-content: space-around; 
    color: white;
    background: #103072
}
.name_header {
    width: 45%;
    min-width: 10em;
    padding: 0 0.5em
    
}
.date_header {
    width: 25%;
    padding: 0 0.5em

}
tr {
    width: 100%;
    display: flex;
    justify-content: space-around; 
}
td {
    border: 0.5px solid #545b62;
}

.name_row {
    width: 45%;
    border: 0.5px solid #545b62;
    min-width: 10em;
    padding: 0 0.5em
}
.status_marker {
    width: 25%;
    padding: 0 0.5em
}
</style>
