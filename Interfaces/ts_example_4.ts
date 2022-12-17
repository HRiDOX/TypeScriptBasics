// like as alias but some differences is there alias is shape of object interface is also shape of objext but there is some differences present
interface Transaction {
   payerAccountNumber : number;
   payeeAccountNumber : number;


}

interface BankAccount {
    accountNumber: number;
    accountHolder:string;
    balance:number;
    isActive:boolean;
    transactions:Transaction[];
    //in this transactions it'll be array as it'll hold the all information of array and it'll hold the values of payerAccountNumber ,payeeAccountNumber 

}

const transaction1:Transaction={
    payerAccountNumber:123,
    payeeAccountNumber:456
};
const transaction2:Transaction={
    payerAccountNumber:123,
    payeeAccountNumber:457,
};

const bankAccount:BankAccount = {
    accountNumber:123,
    accountHolder: 'Hridoy',
    balance:40000,
    isActive:true,
    transactions:[transaction1,transaction2]


}