import { v4 as uuidv4 } from "uuid";
import { fs } from "file-system";

enum CurrencyEnum {
  USD = " USD",
  UAH = "UAH",
}

// console.log(CurrencyEnum.USD);

// console.log(uuidv4());

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

// console.log(
//   `Transaction ID: ${transaction1.id} \n Transaction Amount: ${transaction1.amount} \n Transaction Currency: ${transaction1.currency}`
// );

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
    const balance = this.transactions
      .filter((transaction) => transaction.currency === currency)
      .reduce((total, transaction) => total + transaction.amount, 0);
    return balance;
  }

  writeTransactionsToFile() {
    fs.writeFileSync("transactions.json", JSON.stringify(this.transactions));
  }
}

export { Transaction, Card, CurrencyEnum };
