const accountId=1234
let accountEmail="aman@google.com"
var accountPassword="64534"
accountCity="Jaipur"
let accountState

//accountId =2  //not allowed

accountEmail="asdfg@c.com"
accountPassword="13124"
accountCity="Kota"
console.log(accountEmail)

/*
prefer not to use var
because of issue in black scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])