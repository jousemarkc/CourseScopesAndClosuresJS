// without closure
// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);


// using closure
function moneyBox(name) {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox of ${name}: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox('José');
myMoneyBox(5);
myMoneyBox(10);
moneyBox(25);

const moneyBoxAna = moneyBox('Ana');
moneyBoxAna(6);
moneyBoxAna(7);
moneyBoxAna(10);

myMoneyBox(10);

moneyBoxAna(50);