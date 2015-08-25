define(function(require) {
 var $ = require("jquery");

	return {
 		
 		toFB: function(p1Hand, p2Hand) {
 			var ref = new Firebase("https://war-card-game.firebaseio.com/");

 			console.log(p1Hand);
 			ref.child('Game').child('Player1').set(p1Hand);
 			ref.child('Game').child('Player2').set(p2Hand);
 		}
	}
});