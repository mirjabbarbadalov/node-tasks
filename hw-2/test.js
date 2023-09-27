"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var myCard = new _1.Card();
var myTransaction = new _1.Transaction(330, _1.CurrencyEnum.UAH);
myCard.AddTransaction(myTransaction);
myCard.AddTransactionAdvanced(400, _1.CurrencyEnum.USD);
