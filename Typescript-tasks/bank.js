var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Client = /** @class */ (function () {
    function Client(bal, nameID, bank) {
        this.bal = bal;
        this.nameID = nameID;
        this.bank = bank;
    }
    Client.prototype.getBalance = function () {
        return this.bal;
    };
    return Client;
}());
var VPClient = /** @class */ (function (_super) {
    __extends(VPClient, _super);
    function VPClient(bal, nameID, bank, bonus) {
        var _this = _super.call(this, bal, nameID, bank) || this;
        _this.bonus = bonus;
        return _this;
    }
    VPClient.prototype.getBalance = function () {
        return this.bal + this.bonus;
    };
    return VPClient;
}(Client));
var Bank = /** @class */ (function () {
    function Bank(name) {
        this.name = name;
        this.clients = [];
    }
    Bank.prototype.getBankName = function () {
        return this.name;
    };
    return Bank;
}());
var bank = new Bank("PrivatBank");
var client1 = new VPClient(2300, 'vitaliid7', bank, 200);
var client2 = new Client(2100, 'andrewch2', bank);
var client3 = new Client(1900, 'alexg4', bank);
bank.clients.push(client1, client2, client3);
console.log(bank.clients.map(function (i) { return i.getBalance(); }));
