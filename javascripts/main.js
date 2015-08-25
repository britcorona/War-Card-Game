requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});


requirejs(
  ["dependencies", "deck", "send", "flip", "show"],
  function(dependencies, deck, send, flip, show) {

    deck.allCards();

    show.player1();
    show.player2();

    // console.log(p1Flip);
    // console.log(p2Flip);

    // show.player1(p1Flip);
    // show.player2(p2Flip);

});