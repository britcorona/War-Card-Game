define(function(require) {
 var $ = require("jquery");
 var deal = require("deal");

 return {
 	cards: function(deckID) {
 		$.ajax({
 			url: "http://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=104"
 		}).done(function(data) {
 			//console.log(data);
 			deal.hands(data);
 		});
 	}
 };

});