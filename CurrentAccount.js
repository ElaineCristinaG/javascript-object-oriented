export class CurrentAccount{
    agency;
    numberAccount;
    _balance;      // is one convention for representing private attributes 

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
}