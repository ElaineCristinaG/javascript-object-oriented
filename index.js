/**importing the class */
import { Client } from "./Client.js"
import { CurrentAccount } from "./CurrentAccount.js";

/** Instantiating and assigning values to client1*/
const client1 = new Client();
client1.name = 'Frederico Azevedo';
client1.cpf = '1234565632'; 

/** Instantiating and assigning values to client2*/
const client2 = new Client();
client2.name = 'Lucas Augusto';
client2.cpf = '654321987'; 

/** Instantiating and assigning values to account1*/
const account1 = new CurrentAccount();
account1.agency = 123;
account1.numberAccount = 1548762;
account1._balance = 0;
/**association the account with the client */ 
account1.client = client1; 

/** Instantiating and assigning values to account2*/
const account2 = new CurrentAccount();
account2.agency = 852;
account2.numberAccount = 6574123;
account2._balance = 0;
account2.client = client2;


/**call methods */
const valueDeposit = account1.depositOperation(2500);
console.log("Deposito: ",valueDeposit)
console.log(account1)

const valueWithdrawal = account1.withdrawalOperation(1000);
console.log("Saque: ",valueWithdrawal)
console.log(account1)

/**call method the transfer to account1 do account2 */
const valueTransfer = account1.transferOperation(50,account2)
console.log("Transferência: ",valueTransfer)
console.log(account2);

/**create account3 and client3 in level */
/* const account3 = new CurrentAccount();
account3.client = new Client();
account3.client.cpf = 11122233356;
account3.client.name = "José de Aquino"
account3.agency = 639;
account3.numberAccount = 965412384;
account3._balance = 0; */

//console.log("conta3: ",account3);

/**create account4 with client null
 * The good practice is to keep the direct assignment of the client object
 */
const account4 = new CurrentAccount();
account4.client = null;
account4.agency = 639;
account4.numberAccount = 965412384;
account4.depositOperation(200);

console.log("conta4: ",account4);

/**Here the client gets one instance of client */
const account5 = new CurrentAccount();
account5._client = client2;
account5.agency = 639;
account5.numberAccount = 965412384;
account5.depositOperation(100);

console.log("conta5: ",account5);
console.log("cliente da conta 5:", account5._client);
console.log("saldo da conta 5:", account5._balance);

