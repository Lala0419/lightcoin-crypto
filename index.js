class Account {
	constructor(username) {
		this.username = username;
		this.balance = 0;
	}
}

class Transaction {
	constructor(amount, account) {
		this.amount = amount;
		this.account = account;
	}

	commit() {
		this.account.balance += this.value;
	}
}
class Deposit extends Transaction {
	get value() {
		return this.amount;
	}
}

class Withdrawal extends Transaction {
	get value() {
		return -this.amount;
	}
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("Nanaya Miki");
// console.log("Starting Balance:", myAccount.balance);

// const t1 = new Deposit(120.0, myAccount);
// t1.commit();
// console.log("Deposited $120", t1);

// const t2 = new Withdrawal(50.0, myAccount);
// t2.commit();
// console.log("withdrawal $50", t2);

// console.log("Ending Balance:", myAccount.balance);

t1 = new Deposit(50.25, myAccount);
t1.commit();
console.log("Transaction 1:", t1);

t2 = new Deposit(9.99, myAccount);
t2.commit();
console.log("Transaction 2:", t2);

console.log("Balance1:", myAccount.balance);

t3 = new Withdrawal(10.0, myAccount);
t3.commit();
console.log("Transaction 3:", t3);

console.log("Balance2:", myAccount.balance);
