const accountID = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountID);

/*
Prefer not to use var
because of issue in blockscope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

