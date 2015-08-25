define(function(require) {
 var $ = require("jquery");
 var template = require("hbs!../templates/showDeck");
 var shuffle = require("shuffle");
   
 return {
   
   allCards: function() {

     console.log("pulling from api");
     $.ajax({
       url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2",
       method: "GET"

     }).done(function(data) {
       shuffle.cards(data.deck_id);
       console.log(data.deck_id);
     });
   }
 };
});
