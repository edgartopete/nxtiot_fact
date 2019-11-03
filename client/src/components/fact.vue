<!--
* 
* fact.js
*
* This file renders the element to get the facts from our api and adds fuctionality to it.
* 
* [created] : 11/02/2019
* [author]: ETF
-->
<template>
  <div class="container">
    <div class="create-post">
      <h3 for="create-post">
        Add a fact by clicking the button
        <!-- Button to get a fact-->
        <a
          v-on:click="createPost"
          class="waves-effect waves-light btn"
        >
          <i class="material-icons right">library_add</i>Add
        </a>
      </h3>
    </div>
    <hr />
    <!-- Display an error if the back-end call fails-->
    <p v-if="error">{{ error }}</p>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Latest Fact's</h4>
      </li>
      <!-- Render each of the facts store in the database, by doble clicking the li we call the deletefact method-->
      <li
        class="collection-item avatar"
        v-for="(fact,index) in facts"
        v-bind:item="fact"
        v-bind:index="index"
        v-bind:key="fact._id"
        v-on:dblclick="deletePost(fact._id)"
      >
        <i class="material-icons circle">comment</i>
        <span class="title">{{fact.text}}</span>
        <p>Source:{{fact.source}}</p>
        <a v-bind:href="fact.sourceUrl" target="_blank" class="secondary-content">
          <i class="material-icons">link</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<!-- Compiled and minified JavaScript for Materilizecss to be use for the Toast-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

<script>
// Import the service that allows to call the back-end 
import factService from "../FactService";
//export component
export default {
  name: "factComp",
  data() {
    return {
      //Array to store the facts from db
      facts: [],
      //String to store erro from back-end
      error: ""
    };
  },
  async created() {
    //gets the facts through the service class
    try {
      this.facts = await factService.getFacts();
    } catch (err) {
      this.error = err.mesage;
    }
  },
  methods: {
    // gets a fact through the service class
    async createPost() {
      try {
        await factService.getFact();
        //gets the updated information from the database
        this.facts = await factService.getFacts();
        //display a Toasts to let the user know that a fact has been added
        M.toast({
          html: "Fact added to the list, to remove a fact doble click the item",
          classes: "rounded",
          displayLength: "2000"
        });
      } catch (err) {
        this.error = err.mesage;
      }
    },
     // deletes a fact by id through the service class 
    async deletePost(id) {
      await factService.deleteFact(id);
      //gets the updated information from the database
      this.facts = await factService.getFacts();
      //display a Toasts to let the user know that a fact has been deleted
      M.toast({
        html: "Fact deleted",
        classes: "rounded",
        displayLength: "2000"
      });
    }
  }
};
</script>


