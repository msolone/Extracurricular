<template>
    <form class="remove_player_section">
        <section class="remove_player_header">
            Remove a Player
        </section>
      <section class="my-teams-dropdown">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle"
          type="button" id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          {{ team_name }}
          </button>
        <ul class="dropdown-menu players_dropdown" aria-labelledby="dropdownMenu1" >
          <li class="dropdown-item" v-for="team in TeamsArray" v-bind:key="team.id" v-on:click="updateTeamName(team)" >
          {{team.name}}
          </li>
        </ul>
        </div>
    </section>
      <!-- <section class="my-teams-dropdown"> -->
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle"
            type="button" id="dropdownMenu1" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <!-- Need to get this to update dynamical based on actual teams -->
            {{ player_name }}
            </button>
            <ul class="dropdown-menu players_dropdown" aria-labelledby="dropdownMenu1">
              <li class="dropdown-item" v-for="player in PlayersArray" v-bind:key="player.id"
              v-on:click="updatePlayerName(player)">
                {{player.firstName + " " + player.lastName}}
              </li>
            </ul>
        </div>
      <!-- </section> -->
        <p class="warning_text">
            Warning this is a permanent deletion, 
            you will no longer be able to access any 
            information about this player once you click 
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
    
        <button class="remove_player_button" type="submit" :disabled="isDisabled" v-on:click.prevent="deletePlayer"  data-toggle="modal" data-target="#exampleModalCenter">Remove</button>
         <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Message from Extracurricular</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
          <div class="modal-body">
              Player Removed
          </div>
             <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             </div>
            </div>
          </div>
        </div>

    </form>
</template>

<script>
export default {
  name: "RemovePlayer",
  data: function() {
    return {
      isDisabled: true,
      team_name: "Select Team",
      currentTeamId: 0,
      player_name: "Select Player",
      currentPlayerId: 0,
      TeamsArray: [],
      PlayersArray: []
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
      fetch(`https://localhost:5001/api/players/${this.currentTeamId}`)
        .then(resp => resp.json())
        .then(Data => {
          this.PlayersArray = Data;
        });
    },
    updatePlayerName: function(player) {
      this.currentPlayerId = player.id;
      this.player_name = player.firstName + " " + player.lastName;
    },
    unlockSubmit: function() {
      this.isDisabled = false;
    },
    deletePlayer: function() {
      fetch(`https://localhost:5001/api/Players/${this.currentPlayerId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(PlayerData => {
          console.log(this.player_name + "Deleted");
        });
    }
  }
};
</script>

<style scoped>
.remove_player_section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.remove_player_header {
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

.remove_player_form {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.remove_player_input {
  border: 1px solid #545b62;
  width: 90%;
  height: 2em;
}
.remove_player_input[placeholder] {
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
.remove_player_button {
  color: white;
  font-weight: bold;
  background: #103072;
  height: 2.5em;
  width: 25%;
  border-radius: 0.2em;
  padding: 0.4em 0.8em;
}

.players_dropdown {
  max-height: 6.5em;
  overflow: scroll;
}
</style>