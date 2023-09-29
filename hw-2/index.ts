import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";

enum CurrencyEnum {
  USD = " USD",
  UAH = "UAH",
}

class Transaction {
  id: string;
  amount: number;
  currency: CurrencyEnum;
  constructor(amount: number, currency: CurrencyEnum) {
    this.id = uuidv4();
    this.amount = amount;
    this.currency = currency;
  }
}

class Card {
  transactions: Transaction[];

  constructor() {
    const data = fs.readFileSync("transactions.json", "utf8");
    this.transactions = JSON.parse(data) || [];
  }

  AddTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.writeTransactionsToFile();
    return transaction.id;
  }

  AddTransactionAdvanced(amount: number, currency: CurrencyEnum) {
    const createdTransaction: Transaction = new Transaction(amount, currency);
    this.transactions.push(createdTransaction);
    this.writeTransactionsToFile();
    return createdTransaction.id;
  }
  GetTransaction(id: string): Transaction | null {
    const specifiedTransaction = this.transactions.find(
      (transaction) => transaction.id === id
    );
    return specifiedTransaction || null;
  }

  GetBalance(currency: CurrencyEnum): number {
    let balance = 0;
    for (const transaction of this.transactions) {
      if (transaction.currency === currency) {
        balance += transaction.amount;
      }
    }
    return balance;
  }

  writeTransactionsToFile() {
    fs.writeFileSync("transactions.json", JSON.stringify(this.transactions));
  }
}

//////////////////////////////////////////////////////////// TEST PART

const myCard = new Card();

// CREATED NEW CARD

const myTransaction = new Transaction(200, CurrencyEnum.UAH);
myCard.AddTransaction(myTransaction);
// CREATED NEW TRANSACTION, AND ADD IT WITH ITS OBJECT

myCard.AddTransactionAdvanced(500, CurrencyEnum.USD);
// CREATED NEW TRANSACTION WITH AMOUNT AND CURRENCY

// export { Transaction, Card, CurrencyEnum };

console.log(myCard.GetTransaction("3975a9f8-e625-4409-8a5d-fe92437e059b"););
// FIND THE TRANSACTION WITH AN ID

console.log(myCard.GetBalance(CurrencyEnum.UAH));

// GET BALANCE WITH CURRENCY
