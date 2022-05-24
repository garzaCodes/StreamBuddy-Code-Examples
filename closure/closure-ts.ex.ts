export default class Bank {
  private nextAccountNumber: number;
  protected accounts: any;
  bankName: string;

  constructor(bankName: string) {
    this.nextAccountNumber = 721710;
    this.bankName = bankName;
    this.accounts = {};
  }

  getAccount(accountNumber: number) {
    const account = this.accounts[accountNumber];
    return account ? account : "No account exists with that number";
  }

  createNewAccount(accountHolderName: string) {
    const accountNo: number = (this.nextAccountNumber += 1);
    const accountInfo = {
      accountHolderName: accountHolderName,
      transactionHistory: [],
      bank: this.bankName,
      balance: 0,
      accountNo,
    };

    console.log("Account Created: ", accountInfo);

    return (this.accounts[accountNo] = accountInfo);
  }

  openAccount(accountHolderName: string, initialDeposit: number = 0) {
    const accountRef = this.createNewAccount(accountHolderName);
    const bankName = this.bankName;

    if (initialDeposit) {
      deposit(initialDeposit);
    }

    return {
      printStatement,
      checkBalance,
      withdraw,
      deposit,
    };

    function deposit(depositAmount: number) {
      accountRef.balance += depositAmount;
      return !!recordTransaction("Deposit", depositAmount);
    }

    function withdraw(withdrawAmount: number) {
      accountRef.balance -= withdrawAmount;
      return !!recordTransaction("Withdraw", withdrawAmount);
    }

    function checkBalance() {
      console.log(accountRef);
    }

    function recordTransaction(type: string, amount: number) {
      const transaction = {
        accountHolderName: accountRef.accountHolderName,
        newBalance: accountRef.balance,
        bankName: bankName,
        date: new Date(),
        amount,
        type,
      };

      accountRef.transactionHistory = [
        ...accountRef.transactionHistory,
        transaction,
      ];

      return true;
    }

    function printStatement() {
      console.log("Transaction History: ", accountRef.transactionHistory);
    }
  }
}

const USAA = new Bank("USAA");

USAA.openAccount("Marc Garza", 1200);
