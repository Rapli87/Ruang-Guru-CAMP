function mineralMining(mineral, miningPower, duration, cost) {
  let totalIncome = 0
  let timeToGet = 0
  let marketPrice = 1

  switch(mineral) {
    case 'gold':
      timeToGet = 30;
      marketPrice = 1;
      break;
    case 'silver':
      timeToGet = 20;
      marketPrice = 0.6;
      break;
    case 'coper':
      timeToGet = 5;
      marketPrice = 0.3;
      break;
    case 'uranium':
      timeToGet = 75;
      marketPrice = 3;
      break;
    case 'platinum':
      timeToGet = 15;
      marketPrice = 2;
      break;
    case 'titanium':
      timeToGet = 55;
      marketPrice = 1.5;
      break;
    default:
      return 'Invalid mineral name';
  }

  const miningIncome = (duration / timeToGet) * miningPower;

  totalIncome = miningIncome * marketPrice;

  if(cost > totalIncome){
    'Mineral mining at a loss ' + (totalIncome - cost);
  } else if(cost < totalIncome){
    return 'Mineral mining profit ' + (totalIncome - cost);
  } else {
    return 'Mineral mining get nothing';
  }
}

console.log(mineralMining('gold', 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining('rock', 10, 70, 40)); // Invalid mineral name
console.log(mineralMining('uranium', 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining('silver', 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining('titanium', 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining('gold', 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining('titanium', 20, 350, 150)); // Mineral mining at a loss 40.90909090909091

module.exports = mineralMining;
