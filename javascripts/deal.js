define(function(require) {
 var $ = require("jquery");
 var send = require("send");

 return {
 	hands: function(deck) {
 	
 	var p1Hand = [];
 	var p2Hand = [];

 	for (var i = 0; i < 104; i++) {
 		var card = deck.cards[i];
 		//console.log(card);
 		if ( i % 2 === 0) {
 			p1Hand.push(card);
 		} else {
 			p2Hand.push(card);
 		}
 	}
 	//console.log(p1Hand);
 	//console.log(p2Hand);
 	send.toFB(p1Hand, p2Hand);
 }
};

});