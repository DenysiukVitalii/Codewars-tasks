class Client {
    protected bal: number;
    protected nameID: string;
    bank: Bank;

    constructor(bal: number, nameID: string, bank: Bank) {
        this.bal = bal;
        this.nameID = nameID;
        this.bank = bank;
    }

    getBalance(): number {
        return this.bal;
    }
}

class VPClient extends Client {
    private bonus: number;
    
    constructor(bal: number, nameID: string, bank: Bank, bonus: number) {
        super(bal, nameID, bank);
        this.bonus = bonus;
    }

    getBalance(): number {
        return this.bal + this.bonus;
    }
}

class Bank {
    private name: string;
    clients: Client[];
    
    constructor(name: string) {
        this.name = name;
        this.clients = [];
    }

    getBankName(): string {
        return this.name;
    }
}

let bank = new Bank("PrivatBank");

let client1 = new VPClient(2300, 'vitaliid7', bank, 200);
let client2 = new Client(2100, 'andrewch2', bank);
let client3 = new Client(1900, 'alexg4', bank);
bank.clients.push(client1,client2,client3);
console.log(bank.clients.map(i => i.getBalance()));