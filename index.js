/** Bank BytBank */
/** Created class the Client and current account */

class Client{
    name;
    cpf;
}

class CurrentAccount{
    agency;
    numberAccount;
    balance;

    withdrawalOperation(value){
        if(this.balance >= value){
            this.balance -= value;
            console.log('Successful withdrawal')
        }else{
            console.log('Insuficcient Balance ')
        }
    }

    depositOperation(value){
        if(value > 0){
            this.balance += value;
        console.log('Successful deposit')
        } 
    }
}



/** Instantiating classes and assigning values to objects*/

const client1 = new Client();
client1.name = 'Frederico Azevedo';
client1.cpf = '1234565632';

const client2 = new Client();
client2.name = 'João de Lucca';
client2.cpf = '1457898963';

const account1 = new CurrentAccount();
account1.agency = 123;
account1.numberAccount = 1548762;
account1.balance = 3500;

const account2 = new CurrentAccount();
account2.agency = 123;
account2.numberAccount = 2584679;
account2.balance = 9456;

/**call methods */

console.log("befor: ",account1);
account1.withdrawalOperation(65);

console.log(client1);
console.log("after: ",account1);

console.log(client2);
console.log(account2);
