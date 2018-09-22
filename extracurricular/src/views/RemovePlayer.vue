<template>
    <form class="remove_player_section">
        <section class="remove_player_header">
            Remove a Player
        </section>
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
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle"
            type="button" id="dropdownMenu1" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <!-- Need to get this to update dynamical based on actual teams -->
            {{ player_name }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <h5 class="dropdown-item" v-on:click="updatePlayer1Name">John Doe</h5>
                <h5 class="dropdown-item" v-on:click="updatePlayer2Name">John Doe Jr</h5>
                <h5 class="dropdown-item" v-on:click="updatePlayer3Name">John Doe III</h5>
        </div>
        </div>
        <p class="warning_text">
            Warning this is a permanent deletion, 
            you will no longer be able to access any 
            information about this team once you click 
            the remove button
        </p>
        <section class="warning_checkbox">
            <section>
                <input class="warning_checkbox_input" type="checkbox" name="agreed_to_delete" value="yes">
            </section>
            <section>
                <p class="warning_checkbox_text"> I understand this is permanent </p>
            </section>
        </section>
    
        <button class="remove_player_button" type="submit">Remove</button>

    </form>
</template>

<script>
export default {
    name: "RemovePlayer",
        data: function() {
    return {
      team_name: "Select Team",
      player_name: "Select Player"
    };
  },
  methods: {
    updateVarsityTeamName: function() {
      this.team_name = "Varsity";
    },
    updateJVTeamName: function() {
      this.team_name = "Junior Varsity";
    },
    updateFreshmenTeamName: function() {
      this.team_name = "Freshmen";
    },
    updatePlayer1Name: function() {
      this.player_name = "John Doe";
    },
    updatePlayer2Name: function() {
      this.player_name = "John Doe Jr";
    },
    updatePlayer3Name: function() {
      this.player_name = "John Doe III";
    }
  }

}
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
</style>