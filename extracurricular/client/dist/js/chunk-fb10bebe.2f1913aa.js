(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb10bebe"],{7229:function(t,e,a){"use strict";var n=a("a7b2"),s=a.n(n);s.a},"7f7f":function(t,e,a){var n=a("86cc").f,s=Function.prototype,r=/^\s*function ([^ (]*)/,o="name";o in s||a("9e1e")&&n(s,o,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},a7b2:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"my-teams-dropdown"},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n      "+t._s(t.team_name)+"\n      ")]),a("ul",{staticClass:"dropdown-menu teams_dropdown",attrs:{"aria-labelledby":"dropdownMenu1"}},t._l(t.TeamsArray,function(e){return a("li",{key:e.id,staticClass:"dropdown-item",on:{click:function(a){t.updateTeamName(e)}}},[t._v("\n        "+t._s(e.name)+"\n        ")])}))])]),a("section",{staticClass:"attendance-buttons"},[a("router-link",{attrs:{to:"/home/take_attendance/"+t.currentTeamId}},[a("button",{staticClass:"attendance-button"},[t._v("Take Attendance")])]),a("router-link",{attrs:{to:"/home/team_attendance_history/"+t.currentTeamId}},[a("button",{staticClass:"attendance-button"},[t._v("Attendance History")])])],1),a("section",{staticClass:"player_search_bar"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchName,expression:"searchName"}],staticClass:"player_search_input",attrs:{type:"text",name:"search_player_name",placeholder:"  Search by name..."},domProps:{value:t.searchName},on:{focus:t.unhidden,keyup:t.searchForPlayer,input:function(e){e.target.composing||(t.searchName=e.target.value)}}}),a("section",{class:{search_list_container:!0,hidden:t.hasPlayerId}},t._l(t.searchResults,function(e){return a("section",{key:e.id,class:{search_list:!0},on:{click:function(a){t.updateCurrentPlayerId(e)}}},[t._v("\n        "+t._s(e.firstName)+" "+t._s(e.lastName)+"\n        ")])}))]),a("section",{staticClass:"adding-section"},[a("section",{staticClass:"adding-section-top"},[a("router-link",{staticClass:"add-team",attrs:{to:"/home/add_team"}},[a("h5",[t._v("Add Team")]),a("button",[a("h4",[t._v("+")])])]),a("router-link",{staticClass:"remove-team",attrs:{to:"/home/remove_team"}},[a("h5",[t._v("Remove Team")]),a("button",[a("h4",[t._v("+")])])])],1),a("section",{staticClass:"adding-section-bottom"},[a("router-link",{staticClass:"add-player",attrs:{to:"/home/add_player"}},[a("h5",[t._v("Add Player")]),a("button",[a("h4",[t._v("+")])])]),a("router-link",{staticClass:"remove-player",attrs:{to:"/home/remove_player"}},[a("h5",[t._v("Remove Player")]),a("button",[a("h4",[t._v("+")])])])],1)])])},s=[],r=(a("7f7f"),a("cadf"),a("551c"),a("097d"),a("8c4f"),{name:"Home",props:{auth:Object,team:Object},data:function(){return{team_name:"My Teams",TeamsArray:[],currentTeamId:0,searchName:"",hasPlayerId:!1,searchResults:[],CurrentPlayerId:0,user:{given_name:"",family_name:""}}},mounted:function(){var t=this;console.log("selected team:",this.team),this.currentTeamId=this.team.id,this.team_name=this.team.name?this.team.name:"My Teams",this.auth.getProfile(function(e,a){console.log({err:e,user:a}),t.user=a}),fetch("".concat("https://extracurricular.herokuapp.com/api","/Teams")).then(function(t){return t.json()}).then(function(e){t.TeamsArray=e})},methods:{updateTeamName:function(t){this.currentTeamId=t.id,this.team_name=t.name,this.team.update(t.id,t.name)},unhidden:function(){this.hasPlayerId=!1},searchForPlayer:function(){var t=this;fetch("".concat("https://extracurricular.herokuapp.com/api","/search?q=").concat(this.searchName)).then(function(t){return t.json()}).then(function(e){console.log(e),t.searchResults=e})},updateCurrentPlayerId:function(t){this.CurrentPlayerId=t.id,this.hasPlayerId=!0,this.$router.push({path:"/home/player_attendance_history/".concat(this.CurrentPlayerId)})}}}),o=r,c=(a("7229"),a("2877")),i=Object(c["a"])(o,n,s,!1,null,"080d1354",null);i.options.__file="Home.vue";e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-fb10bebe.2f1913aa.js.map