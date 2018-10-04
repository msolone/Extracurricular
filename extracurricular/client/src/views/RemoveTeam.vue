<template>
    <section class="remove_team_section">
        <section class="remove_team_header">
            Remove a Team
        </section>
      <section class="my-teams-dropdown">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle"
          type="button" id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          {{ team_name }}
          </button>
        <ul class="dropdown-menu teams_dropdown" aria-labelledby="dropdownMenu1" >
          <li class="dropdown-item" v-for="team in TeamsArray" v-bind:key="team.id" v-on:click="updateTeamName(team)" >
          {{team.name}}
          </li>
        </ul>
        </div>
    </section>
        <p class="warning_text">
            Warning this is a permanent deletion, 
            you will no longer be able to access any 
            information about this team once you click 
            the remove button
        </p>
        <section class="warning_checkbox">
            <section>
                <input class="warning_checkbox_input" type="checkbox" name="agreed_to_delete" value="yes" v-on:change="unlockSubmit">
            </section>
            <section>
                <p class="warning_checkbox_text"> I understand this is permanent </p>
            </section>
        </section>
    
        <button class="remove_team_button" type="submit" :disabled="isDisabled" v-on:click="deleteTeam">Remove</button>

    </section>
</template>

<script>
export default {
  name: "RemoveTeam",
  data: function() {
    return {
      team_name: "Select Team",
      currentTeamId: 0,
      TeamsArray: [],
      isDisabled: true
    };
  },
  mounted: function() {
    fetch("https://localhost:5001/api/Teams")
      .then(resp => resp.json())
      .then(TeamData => {
        this.TeamsArray = TeamData;
      });
  },
  methods: {
    updateTeamName: function(team) {
      this.currentTeamId = team.id;
      this.team_name = team.name;
      // fetch(`https://localhost:5001/api/players/${this.currentTeamId}`)
      //   .then(resp => resp.json())
      //   .then(Data => {
      //     this.PlayersArray = Data;
      //   });
    },
    unlockSubmit: function() {
      this.isDisabled = false;
    },
    deleteTeam: function() {
      fetch(`https://localhost:5001/api/teams/${this.currentTeamId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(PlayerData => {
          console.log(this.team_name + "  Deleted");
        });
    }
  }
};
</script>


<style scoped>
.remove_team_section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.remove_team_header {
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

.remove_team_form {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.remove_team_input {
  border: 1px solid #545b62;
  width: 90%;
  height: 2em;
}
.remove_team_input[placeholder] {
  text-align: center;
}
.warning_text {
  color: red;
}
.warning_checkbox {
  display: flex;
  justify-content: center;
}
.warning_checkbox_input {
  height: 1.5em;
  width: 1.5em;
}
.warning_checkbox_text {
  padding-left: 1em;
}
.remove_team_button {
  color: white;
  font-weight: bold;
  background: #103072;
  height: 2.5em;
  width: 25%;
  border-radius: 0.2em;
  padding: 0.4em 0.8em;
}

.teams_dropdown {
  width: 100%;
  max-height: 8em;
  overflow: scroll;
}
</style>