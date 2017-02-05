function change (cashIn,price) {
  var coins = [10,5,2,1];
  var store = [];
  var rest = cashIn - price;
  for(var i = 0;i < coins.length;i++){
    while(rest/coins[i] >= 1) {
      store.push(coins[i]);
      rest = rest - coins[i];
    }
  }
  return store;
}