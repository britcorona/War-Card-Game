define(function(require) {
 var $ = require("jquery");
 
	return {
	 	p1deck: function(deck1) {
	 		//console.log(deck1);
	 		var p1Array = []; 
	 		var p1Card = deck1.shift();
	 		p1Array.push(p1Card);
			//console.log(p1Array);
			$(".flip1").html("<img src=" + p1Array[0].image + ">");
		},
		p2deck: function(deck2) {
			var p2Array = [];
			var p2Card = deck2.shift();
			p2Array.push(p2Card);
			//console.log(p2Array);
			$(".flip2").html("<img src=" + p2Array[0].image + ">");
		}
	};
});