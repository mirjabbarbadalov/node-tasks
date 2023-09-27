import { Transaction, Card, CurrencyEnum } from ".";

const myCard = new Card();

const myTransaction = new Transaction(330, CurrencyEnum.UAH);
myCard.AddTransaction(myTransaction);

myCard.AddTransactionAdvanced(400, CurrencyEnum.USD);
