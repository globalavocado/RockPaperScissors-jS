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

// write method to pick random item
// use that method to make that pick



// write method to let player make random pick


// var picks = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// var RandomPick = pick[Math.floor(Math.random()*pick.length)];

// alert('The computer chose: ' + thing);

// Player.prototype.RandomPick ? ['rock', 'paper', 'scissors', 'lizard', 'spock']
