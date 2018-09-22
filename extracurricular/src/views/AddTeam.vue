<template>
    <section class="add_team_section">
        <section class="add_team_header">
            Create a New Team
        </section>
        <form  class="add_team_form" action="">
        <input class="add_team_input" type="text" name="team_name" placeholder="Enter Team Name Here..." />
        <button class="add_team_button" type="submit">Submit</button> 
        </form>
    </section>
    
</template>

<script>
export default {
    name: "AddTeam"

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
    color: yellow;
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
