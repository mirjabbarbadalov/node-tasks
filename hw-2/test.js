"use strict";

import { Card, Transaction, CurrencyEnum } from ".";
var myCard = new Card();
var myTransaction = new Transaction(330, CurrencyEnum.UAH);
myCard.AddTransaction(myTransaction);
myCard.AddTransactionAdvanced(400, CurrencyEnum.USD);
