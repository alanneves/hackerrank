function getQuantityOfHigherCandle(candles) {
  let higherCandle = 0;
  let quantityOfHigherCandle = 0;
  for (let i = 0; i < candles.length; i++) {
    if(i == 0 || candles[i] > higherCandle) {
      higherCandle = candles[i];
      quantityOfHigherCandle = 1;
      continue;
    }

    if(candles[i] == higherCandle)
      quantityOfHigherCandle++;
  }

  return quantityOfHigherCandle;
}

console.log(getQuantityOfHigherCandle([1,2,3,4,4,4,4,3,4]))