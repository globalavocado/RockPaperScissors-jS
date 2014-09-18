

Game.prototype.PAIRS = {
    rock:     { scissors: 'crushes', lizard: 'crushes' },
    paper:    { rock: 'covers', spock: 'disproves' },
    scissors: { paper: 'cuts', lizard: 'decapitates' },
	lizard:   { spock: 'poisons', paper: 'eats' },
	spock: 	  { rock: 'vapourises', scissors: 'smashes' }
  };

  function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2;
};

Game.prototype.winner = function(){
	if (this.isSamePick()) return null;

	if (this._victoryVerbFor(this.player1.pick, this.player2.pick)){
      	return this.player1;
  		}
    else {
     	return this.player2;
 		}
};

Game.prototype._victoryVerbFor = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
}

Game.prototype.loser = function(){
	return (this.winner() === this.player1 ? this.player2 : this.player1);
}

Game.prototype.isSamePick = function(){
    return this.player1.pick === this.player2.pick; 
 };

Game.prototype.winningMessage = function(){
 	var message;
 	if (this.winner()){
 		message = [this.winner().name, 
 		this._victoryVerbFor(this.winner().pick, this.loser().pick), 
 		this.loser().name].join(' '); 		
 	} else {
 		message = "it's a draw...";
 	}
 	return message;
 };
