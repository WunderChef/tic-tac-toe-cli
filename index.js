console.log('Player one\'s move:');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
  if (text === 'quit\n' || text === 'q\n') {
    done();
  }
  console.log('Next player:');
});

function done() {
  console.log('Thanks for playing!');
  process.exit();
}