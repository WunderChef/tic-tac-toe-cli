const helpText = `
At any time you can type:
  - help : to see a list of options
  - quit : to quit the game
  
While the game is running you can type:
  - [A-B][1-3] : to place a marker in a spot on the board, 
    for example 'A1' to place a marker in the top left spot.

When someone wins a game, answer the end game prompt with:
  - y : to play again
  - n : to exit the game
  
Enjoy!
`;

const done = () => {
  console.log('\n\nThanks for playing!\n');
  process.exit();
}

const startGame = () => {
  console.log('Player one\'s move:');
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (text) {
    if (text === 'quit\n') {
      done();
    } else if (text === 'help\n') {
      console.log(helpText);
    } else {
      console.log('That was not a valid command! Type \'help\' for options.\n');
    }
    console.log('Next player:');
  });
}

startGame();