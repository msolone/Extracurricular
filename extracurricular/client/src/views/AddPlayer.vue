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
            <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <h5 class="dropdown-item" v-on:click="updateVarsityTeamName">Varsity</h5>
                <h5 class="dropdown-item" v-on:click="updateJVTeamName">Junior Varsity</h5>
                <h5 class="dropdown-item" v-on:click="updateFreshmenTeamName">Freshmen</h5>
            </div>
      </div>
      
        <form class="add_player_form" action="">
            <input class="add_player_input" type="text" name="first_name" placeholder="First Name" />
            <input class="add_player_input" type="text" name="last_name" placeholder="Last Name" />
            <button class="add_player_button" type="submit">Submit</button>
        </form>

    </section>
</template>

<script>
export default {
  name: "AddPlayer",
    data: function() {
    return {
      team_name: "Select Team"
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