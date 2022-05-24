function openBank(name) {
  let nextAccountNumber = 721710;
  const BankName = name;
  const accounts = {};

  return {
    getAccount,
    openAccount,
  };

  function getAccount(accountNumber) {
    const account = accounts[accountNumber];
    return account ? account : "No account exists with that number";
  }

  function createNewAccount(accountHolderName) {
    const accountNo = (nextAccountNumber += 1);
    const accountInfo = {
      accountHolderName: accountHolderName,
      transactionHistory: [],
      bank: name,
      balance: 0,
      accountNo,
    };

    console.log("Account Created: ", accountInfo);

    return (accounts[accountNo] = accountInfo);
  }

  function openAccount(name, initialDeposit = 0) {
    const accountRef = createNewAccount(name);

    if (initialDeposit) {
      deposit(initialDeposit);
    }

    return {
      deposit,
      withdraw,
      checkBalance,
      printStatement,
    };

    function deposit(depositAmount) {
      accountRef.balance += depositAmount;
      return !!recordTransaction("Deposit", depositAmount);
    }

    function withdraw(withdrawAmount) {
      accountRef.balance -= withdrawAmount;
      return !!recordTransaction("Withdraw", withdrawAmount);
    }

    function checkBalance() {
      console.log(accountRef);
    }

    function recordTransaction(type, amount) {
      const transaction = {
        accountHolderName: accountRef.accountHolderName,
        newBalance: accountRef.balance,
        bankName: BankName,
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



const USAA = openBank('USAA');
const Chase = openBank('Chase');

const myUSAAAcount = USAA.openAccount('Marc Garza', 100);
const myChaseAccount = Chase.openAccount('Marc Garza', 400);

myUSAAAcount.deposit(20000);


myUSAAAcount.checkBalance();
myChaseAccount.checkBalance();



