"use strict";

import { v4 } from "uuid";
import { readFileSync, writeFileSync } from "fs";
var CurrencyEnum;
(function (CurrencyEnum) {
  CurrencyEnum["USD"] = " USD";
  CurrencyEnum["UAH"] = "UAH";
})(CurrencyEnum || (CurrencyEnum = {}));
var Transaction = /** @class */ (function () {
  function Transaction(amount, currency) {
    this.id = (0, v4)();
    this.amount = amount;
    this.currency = currency;
  }
  return Transaction;
})();
var Card = /** @class */ (function () {
  function Card() {
    var data = readFileSync("transactions.json", "utf8");
    this.transactions = JSON.parse(data) || [];
  }
  Card.prototype.AddTransaction = function (transaction) {
    this.transactions.push(transaction);
    this.writeTransactionsToFile();
    return transaction.id;
  };
  Card.prototype.AddTransactionAdvanced = function (amount, currency) {
    var createdTransaction = new Transaction(amount, currency);
    this.transactions.push(createdTransaction);
    this.writeTransactionsToFile();
    return createdTransaction.id;
  };
  Card.prototype.GetTransaction = function (id) {
    var specifiedTransaction = this.transactions.find(function (transaction) {
      return transaction.id === id;
    });
    return specifiedTransaction || null;
  };
  Card.prototype.GetBalance = function (currency) {
    var balance = this.transactions
      .filter(function (transaction) {
        return transaction.currency === currency;
      })
      .reduce(function (total, transaction) {
        return total + transaction.amount;
      }, 0);
    return balance;
  };
  Card.prototype.writeTransactionsToFile = function () {
    writeFileSync("transactions.json", JSON.stringify(this.transactions));
  };
  return Card;
})();
/////////////// TEST PART:
var myCard = new Card();
// CREATED NEW CARD
var myTransaction = new Transaction(200, CurrencyEnum.UAH);
myCard.AddTransaction(myTransaction);
// CREATED NEW TRANSACTION, AND ADD IT WITH ITS OBJECT
myCard.AddTransactionAdvanced(500, CurrencyEnum.USD);
// CREATED NEW TRANSACTION WITH AMOUNT AND CURRENCY
// export { Transaction, Card, CurrencyEnum };
console.log(myCard.GetTransaction("3975a9f8-e625-4409-8a5d-fe92437e059b"));
// FIND THE TRANSACTION WITH AN ID
console.log(myCard.GetBalance(CurrencyEnum.UAH));
// GET BALANCE WITH CURRENCY
