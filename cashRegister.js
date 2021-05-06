let objectPrices = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN" : 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}


function checkCashRegister(price, cash, cid) {
    var changeTo = cash - price;
    let arr = cid.reverse();
    let changeArr = [];
    let allChange= 0;
    for (const i of arr) {
      allChange += i[1];
        if (objectPrices[i[0]] <= changeTo && i[1]> 0) {
            let cant = 0;
            while (objectPrices[i[0]] <= changeTo && cant < i[1]) {
                cant = cant*1000 + objectPrices[i[0]]*1000;
                cant = cant/1000
                changeTo = changeTo*1000 - objectPrices[i[0]]*1000;
                changeTo = changeTo/1000
            }
            changeArr.push([i[0],cant])

            continue
        }
    }
    console.log(changeArr);
    console.log(changeTo);
    if(changeTo > 0 || (cash-price) > allChange){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }else if(changeTo == 0 && allChange == cash - price){
      return {status: "CLOSED", change: changeArr}
    }else{
      return {status: "OPEN", change: changeArr}
    }
  }
  

  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));