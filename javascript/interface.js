$(document).ready(function(){
  var p1 = new Player('Sam');
  var p2 = new Player('Dan');
  var game = new Game(p1, p2);

  $('.choices img').on('click', function(){
    p1.picks($(this).data('pick'));
    p2.picks('rock');

    console.log('Hello')
    $('#results').append('<li>Hello world</li>');
  })
})