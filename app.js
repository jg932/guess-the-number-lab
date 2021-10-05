console.log('Guessing Party')

// Initial player prompt with space for player provided input
// Creation of random number within the boundaries of the game
// Compare the player guess to generated number
// When player guesses correct return winner prompt
// When player is incorrect add guess to prevGuesses array
  // Return prevGuesses array
  // Return guess is too high or too low prompt




const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  currentGuess: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    while(this.currentGuess !== this.secretNum){
      if (this.currentGuess !== null){
        game.render();
        game.update();
      }
      console.log("\n\n\n\n\n\n\n\n" + this.currentGuess, this.secretNum)
      this.currentGuess = game.getGuess()
    }
    window.alert(`You win! You got it in ${this.prevGuesses.length} guesses!`);
  },
  getGuess: function(){
    let guess = parseInt(window.prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}!`));
    console.log ("\n\n\n\n\n\n" + guess)
    if (guess < game.smallestNum){
      window.alert(`Invalid entry, guess must be more than ${game.smallestNum}`)
      guess = null
    } else if (guess > game.biggestNum){
      window.alert(`Invalid entry, guess must be less than ${game.biggestNum}`)
      guess = null
    } else if (isNaN(guess)){
      window.alert(`Numbers only smart ass!`)
      guess = null
    } else {
      game.prevGuesses.push(guess);
    }
    return guess;
  },
  render: function(){
    const prettyGuesses = this.prevGuesses.join(', ');
    if(this.currentGuess > this.secretNum){
      window.alert(`Your guess is too high. Previous guess: ${prettyGuesses}`)
    } else {
      window.alert(`Your guess is too low. Previous guess: ${prettyGuesses}`)
    }
  }, 
  update: function(){
    if(this.currentGuess > this.secretNum){
      this.biggestNum = this.currentGuess
    } else if (this.currentGuess < this.secretNum){
      this.smallestNum = this.currentGuess
    }
  },
}


game.play()


