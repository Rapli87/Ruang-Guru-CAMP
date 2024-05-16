function profitMonitor(todayProfit, lastProfit) {
    // cek kondisi profit hari ini vs profit kemarin

    if(todayProfit > lastProfit) {
      return 'Profit naik sebanyak ' + (todayProfit - lastProfit) + ' point';
    } else if (todayProfit < lastProfit) {
      return 'Profit turun sebanyak ' + (lastProfit - todayProfit) + ' point';
    } else {
      return 'Profit stabil';
    }
}

console.log(profitMonitor(100, 50));
console.log(profitMonitor(50, 100));
console.log(profitMonitor(100, 100));

module.exports = profitMonitor;
