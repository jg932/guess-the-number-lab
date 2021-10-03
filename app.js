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
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  getGuess: function(){
    game.currentGuess = window.prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}!`);
    while(game.currentGuess !== game.secretNum){
      game.prevGuesses.push(game.currentGuess);
      if(game.currentGuess > game.secretNum){
        game.currentGuess = window.prompt(`Your guess is too high. Previous guess: ${game.prevGuesses}, `)
      } else {
      if (game.currentGuess < game.secretNum){
        game.currentGuess = window.prompt(`Your guess is too low. Previous guess: ${game.prevGuesses}, `)
      } else {
      if (game.currentGuess === game.secretNum){
        window.prompt(`You guess it! You win!`) 
        }
      }
      }
    }
  }
}
game.play() 
game.getGuess()




