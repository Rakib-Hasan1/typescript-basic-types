//* getter and setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // set balance using set
  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  //   get balance using get
  get getBalance() {
    return this._userBalance;
  }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

mezbaBhaiAccount.addBalance = 5000;
mezbaBhaiAccount.addBalance = 80;

console.log(mezbaBhaiAccount.getBalance);
