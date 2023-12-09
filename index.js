
import { Client } from "./Client.js"
import { CurrentAccount } from "./CurrentAccount.js";
/** Instantiating classes and assigning values to objects*/

const client1 = new Client();
client1.name = 'Frederico Azevedo';
client1.cpf = '1234565632'; 

const account1 = new CurrentAccount();
account1.agency = 123;
account1.numberAccount = 1548762;
account1._balance = 0;

/**call methods */
const valueDeposit = account1.depositOperation(2500);
console.log("Deposito: ",valueDeposit)
console.log(account1)

const valueWithdrawal = account1.withdrawalOperation(1000);
console.log("Saque: ",valueWithdrawal)
console.log(account1)
