<template>
<section class="take_attendance_page">
    <section class="attendance_entry_buttons">
        <button>Change Team</button>
        <section>
            <button>Print</button>
            <button>Save</button>
        </section>
    </section>

    <table class="take_attendance_table">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Tardy</th>
            </tr>
            <section class="attendance_rows">
            <tr v-for="(player, i) in TeamData" v-bind:key="i">
                <form>
                    <td>{{player.first_name + " " + player.last_name}}</td>
                    <td><input class="attendance_radio" type="radio" name="daily_attendance" value="present" checked></td>
                    <td><input class="attendance_radio" type="radio" name="daily_attendance" value="absent"></td>
                    <td><input class="attendance_radio" type="radio" name="daily_attendance" value="tardy"></td>
                </form>
            </tr>
            </section>
        </tbody>
    </table>

</section>
</template>

<script>
import Data from "../Data/practice_team1.json"
export default {
    name: 'TakeAttendance',
    data: function() {
        return {
            TeamData: Data.varsity
        }

    },
    mounted: function() {
        console.log(this.TeamData)
    }

}
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
    background: #E0E0E0
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
   width: 25%;
   border: 0.5px solid #545b62;
   /* padding: 0.5em */
}
form {
    width: 100%
}
th {
    width: 25%;
    color: white;
    background: #103072
}
.attendance_rows {
    width: 100%;
}


</style>
