/** Bank BytBank */
/** Created class the Client and current account */

class Client{
    name;
    cpf;
}

class CurrentAccount{
    agency;
    numberAccount;
    _balance;      // is one convention for representing private attributes 

    withdrawalOperation(value){
        if(this._balance >= value){
            this._balance -= value;
            console.log('***Successful withdrawal***')
        }else{
            console.log('***Insuficcient _balance***')
        }
    }

    depositOperation(value){
        if(value > 0){
            this._balance += value;
        console.log('***Successful deposit***')
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
account1._balance = 0;

const account2 = new CurrentAccount();
account2.agency = 123;
account2.numberAccount = 2584679;
account2._balance = 0;

/**call methods */

console.log("befor: ",account1);
account1.depositOperation(200);
console.log("after: ",account1);
account1.withdrawalOperation(65);
console.log("after: ",account1);

console.log(client1);
console.log("after: ",account1);

console.log(client2);
console.log(account2); 

console.log(account2)
account2.depositOperation(2500);
console.log(account2)
