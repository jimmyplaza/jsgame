// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets
	// Change the background color of the game
	this.game.stage.backgroundColor = '#71c5cf';
	// Load the bird sprite
	this.game.load.image('bird', 'assets/bird2.png'); 
	this.game.load.image('pipe', 'assets/pipe.png');  
    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game    
	// Display the bird on the screen
	this.bird = this.game.add.sprite(100, 245, 'bird');
	// Add gravity to the bird to make it fall
	this.bird.body.gravity.y = 1000;  
	// Call the 'jump' function when the spacekey is hit
	var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	space_key.onDown.add(this.jump, this);

    },
    
    update: function() {
		// Function called 60 times per second
	// If the bird is out of the world (too high or too low),call the 'restart_game' function
	if (this.bird.inWorld == false)
		this.restart_game();
    },
	// Make the bird jump 
	jump: function() {  
		// Add a vertical velocity to the bird
		this.bird.body.velocity.y = -350;
	},

	// Restart the game
	restart_game: function() {  
		// Start the 'main' state, which restarts the game
		this.game.time.events.remove(this.timer); 
		this.game.state.start('main');
	},










};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 
