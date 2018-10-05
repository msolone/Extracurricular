<template>
    <section class="add_team_section">
        <section class="add_team_header">
            Create a New Team
        </section>
        <form  class="add_team_form" action="">
            <input class="add_team_input" type="text" name="team_name" placeholder="Enter Team Name Here..." v-model="teamName"/>
            <button class="add_team_button" type="submit" v-on:click.prevent="submitTeam" data-toggle="modal" data-target="#exampleModalCenter">Submit</button> 
        </form>
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
              Team Added
          </div>
             <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AddTeam",
    data: function() {
        return {
            teamName: ''
        }
    },
    methods: {
        submitTeam: function() {
            fetch("https://localhost:5001/api/Teams", {
                method: "POST",
                body: JSON.stringify({
                    name: this.teamName 
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then( resp => resp.json())
            .then( TeamData => {
                console.log(TeamData)
            }) 
        }
   }

}
</script>

<style scoped>
.add_team_section {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.add_team_form {
    height: 66%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.add_team_header {
    font-size: 2em;
}

.add_team_input {
    border: 1px solid #545b62;
    width: 90%;
    height: 2em;
}
.add_team_input[placeholder] {
    text-align: center;
}

.add_team_button {
    color: white;
    font-weight: bold;
    background: #103072;
    height: 2.5em;
    width: 25%;
    border-radius: 0.2em;
    padding: 0.4em 0.8em;

}

</style>
