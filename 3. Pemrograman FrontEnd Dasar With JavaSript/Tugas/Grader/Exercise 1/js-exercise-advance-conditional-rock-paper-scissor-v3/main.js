function rockPaperScissor(player1, player2) {
    // kondisi draw 
  if(player1 === player2){
      return 'Draw!';
    } 
// CARA KE 2
    if(player1 === 'paper' && player2 === 'rock'){
      return ' Player 1 Won!';
    } else if (player1 === 'rock' && player2 === 'scissor'){
      return ' Player 1 Won!';
    } else if (player1 === 'scissor' && player2 === 'paper'){
      return ' Player 1 Won!';
    } else{
      return 'Player 2 Won!'
    }
  }

    // CARA KE 1 
  //   if(player1 === 'paper'){
  //     if(player2 === 'rock'){
  //       return 'Player 1 Won!';
  //     } else {
  //       return 'Player 2 Won!'
  //     }
  //   }

  //   if(player1 === 'rock'){
  //     if(player2 === 'scissor'){
  //       return 'Player 1 Won!';
  //     } else {
  //       return 'Player 2 Won!'
  //     }
  //   }

  //   if(player1 === 'scissor'){
  //     if(player2 === 'paper'){
  //       return 'Player 1 Won!';
  //     } else {
  //       return 'Player 2 Won!'
  //     }
  //   }
  // }
  
  console.log(rockPaperScissor('scissor', 'paper')); // "Player 1 Won!"
  console.log(rockPaperScissor('rock', 'paper')); // "Player 2 Won!"
  console.log(rockPaperScissor('paper', 'paper')); // "Draw!"
  console.log(rockPaperScissor('rock', 'rock')); // "Draw!"
  
  module.exports = rockPaperScissor;
  