import { Client } from "./Client.js";
export class CurrentAccount{
    agency;
    numberAccount;
     // is one convention for representing private attributes 
    _client;
    _balance = 0; 

    set client(newValue){
        if(newValue instanceof Client){
            this._client = newValue;
        } 
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }

    withdrawalOperation(value){
        if(this._balance >= value){
            this._balance -= value;
            console.log('***Successful withdrawal***')
            return value;
        }else{
            console.log('***Insuficcient balance***')
            return this._balance;
        }
    }

    depositOperation(value){
        if(value > 0){
            this._balance += value;
            console.log('***Successful deposit***')
            return value;
        } 
    }

    transferOperation(value,account){
        const valueTransfer = this.withdrawalOperation(value);
        account.depositOperation(valueTransfer);
        return valueTransfer;
    }
}