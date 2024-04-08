var myName = 'Quang Duong';
var a = 1;
var b = null;
b = 'ahihi';
// arrays 
var items = ['a', 'b'];
var account = {
    name: 'Luis',
    balance: 10
};
var x = {
    name: 'Luis',
    balance: 10,
    status: 1
};
var accounts;
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
