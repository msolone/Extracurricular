<template>
  <div class="home">
    <section class="my-teams-dropdown">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle"
        type="button" id="dropdownMenu1" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <!-- Need to get this to update dynamical based on actual teams -->
        {{ team_name }}
        </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <h5 class="dropdown-item" v-on:click="updateVarsityTeamName">Varsity</h5>
        <h5 class="dropdown-item" v-on:click="updateJVTeamName">Junior Varsity</h5>
        <h5 class="dropdown-item" v-on:click="updateFreshmenTeamName">Freshmen</h5>
      </div>
      </div>
    </section>
    <section class="attendance-buttons">
      <router-link to='/home/take_attendance'>
        <button class="attendance-button">Take Attendance</button>
      </router-link>
      <button class="attendance-button">Attendance History</button>
    </section>
    <section class="search-by-name">
      <input type="text" placeholder="  Search by Name..." />
      <button>GO!</button>
    </section>
    <section class="adding-section">
      <section class="add-team">
        <h5>Add Team</h5><button><h4>+</h4></button>
      </section>
      <section class="add-player">
        <h5>Add Player</h5><button><h4>+</h4></button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      team_name: 'My Teams'
    }
  },
  methods: {
    updateVarsityTeamName: function() {
      this.team_name = 'Varsity'
    },
    updateJVTeamName: function() {
      this.team_name = 'Junior Varsity'
    },
    updateFreshmenTeamName: function() {
      this.team_name = 'Freshmen'
    }
  }
};
</script>

<style scoped>
.home {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 3px solid #103072;
  border-radius: 0.5em;
}
button {
  border: 3px solid #103072;
  color: white;
  font-weight: bold;
  background: #103072;
  height: 2.5em;
  border-radius: 0.2em;
  padding: 0.4em 0.8em;
}

.dropdown {
  background: none;
  padding-right: 0
}
.dropdown button {
  padding: 0 2em;
}
.btn-secondary.dropdown-toggle{
  background: #103072
}
.dropdown-toggle::after {
  content: "";
}
.attendance-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 5em
}
input {
  border: 1px solid #545b62;
  width: 18em;
}
.search-by-name {
  display: flex;
  justify-content: center;
}
.adding-section {
  display: flex;
  justify-content: space-around;
}
h5 {
  padding-top: 0.5em;
  color: #103072;
}
.adding-section button {
  height: 2.5em;
  width: 2.5em;
  border-radius: 1.25em;
  margin: 0.5em;
  padding: 0.2em;
}
.adding-section button h4 {
  text-align: center;
  font-weight: bold;
  
}
.add-team {
  display: flex;
  align-items: center;
}
.add-player {
  display: flex;
  align-items: center;
}
</style>

