function Player(name){
	this.name = name;
};



Player.prototype.picks = function(pick) {
	this.pick = pick;
};

var weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

Player.prototype.randomPicks = function(randomPick) {
	


	var randomPick = weapons[Math.floor(Math.random()*weapons.length)];


	this.pick = randomPick;
	

};