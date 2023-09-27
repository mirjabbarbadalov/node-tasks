"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyEnum = exports.Card = exports.Transaction = void 0;
var uuid_1 = require("uuid");
var file_system_1 = require("file-system");
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum["USD"] = " USD";
    CurrencyEnum["UAH"] = "UAH";
})(CurrencyEnum || (exports.CurrencyEnum = CurrencyEnum = {}));
// console.log(CurrencyEnum.USD);
// console.log(uuidv4());
var Transaction = /** @class */ (function () {
    function Transaction(amount, currency) {
        this.id = (0, uuid_1.v4)();
        this.amount = amount;
        this.currency = currency;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
// console.log(
//   `Transaction ID: ${transaction1.id} \n Transaction Amount: ${transaction1.amount} \n Transaction Currency: ${transaction1.currency}`
// );
var Card = /** @class */ (function () {
    function Card() {
        var data = file_system_1.fs.readFileSync("transactions.json", "utf8");
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
        var specifiedTransaction = this.transactions.find(function (transaction) { return transaction.id === id; });
        return specifiedTransaction || null;
    };
    Card.prototype.GetBalance = function (currency) {
        var balance = this.transactions
            .filter(function (transaction) { return transaction.currency === currency; })
            .reduce(function (total, transaction) { return total + transaction.amount; }, 0);
        return balance;
    };
    Card.prototype.writeTransactionsToFile = function () {
        file_system_1.fs.writeFileSync("transactions.json", JSON.stringify(this.transactions));
    };
    return Card;
}());
exports.Card = Card;
