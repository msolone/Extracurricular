<template>
    <section class="add_player_section">
        <section class="add_player_header">
            Add New Player
        </section>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle"
            type="button" id="dropdownMenu1" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <!-- Need to get this to update dynamical based on actual teams -->
            {{ team_name }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li class="dropdown-item" v-on:click="updateTeamName(team)" v-for="team in TeamsArray" v-bind:key="team.id">
                  {{team.name}}
                </li>
            </ul>
      </div>
      
        <form class="add_player_form" action="">
            <input class="add_player_input" type="text" name="first_name" placeholder="First Name" v-model="firstName"/>
            <input class="add_player_input" type="text" name="last_name" placeholder="Last Name" v-model="lastName"/>
            <button class="add_player_button" type="submit" v-on:click.prevent="submitPlayer">Submit</button>
        </form>

    </section>
</template>

<script>
export default {
  name: "AddPlayer",
  data: function() {
    return {
      team_name: "Select Team",
      TeamsArray: [],
      currentTeamId: 0,
      firstName: "",
      lastName: ""
    };
  },
  mounted: function() {
    fetch("https://extracurricular.herokuapp.com/api/Teams")
      .then(resp => resp.json())
      .then(TeamData => {
        this.TeamsArray = TeamData;
      });
  },
  methods: {
    updateTeamName: function(team) {
      this.currentTeamId = team.id;
      this.team_name = team.name;
    },
    submitPlayer: function() {
      fetch("https://extracurricular.herokuapp.com/api/Players", {
        method: "POST",
        body: JSON.stringify({
          FirstName: this.firstName,
          LastName: this.lastName,
          TeamId: this.currentTeamId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(PlayerData => {
          console.log(PlayerData);
          this.resetForm();
        });
    },
    resetForm: function() {
      this.firstName = "";
      this.lastName = "";
    }
  }
};
</script>

<style scoped>
.add_player_section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.add_player_header {
  font-size: 2em;
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
  padding-right: 0;
  margin-bottom: 5em;
}
.dropdown button {
  padding: 0 2em;
}
.btn-secondary.dropdown-toggle {
  background: #103072;
}
.dropdown-toggle::after {
  content: "";
}

.add_player_form {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.add_player_input {
  border: 1px solid #545b62;
  width: 90%;
  height: 2em;
}
.add_player_input[placeholder] {
  text-align: center;
}
.add_player_button {
  color: white;
  font-weight: bold;
  background: #103072;
  height: 2.5em;
  width: 25%;
  border-radius: 0.2em;
  padding: 0.4em 0.8em;
}
</style>