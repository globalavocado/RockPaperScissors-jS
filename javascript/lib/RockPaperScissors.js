Game.prototype.PAIRS = {
    rock:     { scissors:'crushes', lizard: 'squashes' },
    paper:    { rock: 'covers', spock: 'disproves' },
    scissors: { paper: 'cuts', lizard: 'decapitates' },
	lizard:   { spock: 'poisons', paper: 'eats' },
	spock: 	  { rock: 'vapourises', scissors: 'smashes' }
  };

function Player(name){
	this.name = name;
};

function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2;
};

Player.prototype.picks = function(pick){
	this.pick = pick;
};

Game.prototype.winner = function(){
	if (this.isSamePick()) return null

	if (this.PAIRS[this.player1.pick].beats === this.player2.pick)
      {return this.player1;}
    else
      {return this.player2;}
};

Game.prototype.isSamePick = function(){
    return this.player1.pick === this.player2.pick; 
 };

 Game.prototype.winningMessage = function(){
 	return 'Alex crushes Mario';
 };

