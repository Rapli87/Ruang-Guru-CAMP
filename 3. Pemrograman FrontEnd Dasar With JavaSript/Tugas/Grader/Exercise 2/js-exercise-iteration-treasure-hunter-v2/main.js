function trasureHunter(dailyLog) {
  let treasure = 0;

  for( let i = 0; i < dailyLog.length; i++) {
    if(dailyLog[i] === '$'){
      treasure = treasure + 100;
    } else if(dailyLog[i] === 'x'){
      if(treasure > 10){
        treasure = treasure - 10;
      } else {
        treasure = 0;
      }
    } else {
      if(treasure !== 0){
        treasure = treasure - (treasure*50) /100;
      }
    }
  }

  return treasure;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
