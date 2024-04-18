import inquirer from "inquirer";

let pinAtm = '9251';
let currentSavingBalance = 500000; // Changed to number
let currentCurrentBalance = 290000; // Changed to number

async function ATM() 
{
    console.log("\n");
    console.log("********************************");
    console.log("********************************");
    console.log("WELCOME TO ATM ");
    console.log("********************************");
    console.log("********************************");
    console.log("\n");

    let pin = await inquirer.prompt([
        {
            name: 'pp',
            message: 'What is your pin?',
            type: "password",
        },
    ]);

    let x = pin.pp;
    if (x === pinAtm) {
        let option = await inquirer.prompt([
            {
                name: 'value0',
                message: 'Press C for Current Account \n  Press S for Saving Account \n',
                type: 'string',
            }
        ]);

        if (option.value0.toLowerCase() === 'c') {
            currentAccount();
        } else if (option.value0.toLowerCase() === 's') {
            savingAccount();
        }

    } else {
        console.log(" ATM Pin is not correct. ");
        console.log("############################ TRY AGAIN ############################ ")
        console.log("############################ $$ ############################ ")
        ATM();
    }

    async function currentAccount()
     {
        console.log("\n");
        console.log("----- CURRENT ACCOUNT -----")
        console.log("\n");
        let CA = await inquirer.prompt([
            {
                name: 'cav',
                message: 'Press W for Amount Withdrawal \n  Press B for Balance Checking \n',
                type: 'string',
            }
        ]);
        if (CA.cav.toLowerCase() === 'b') {
            console.log(" Your current account balance is  ", currentCurrentBalance);
        } else if (CA.cav.toLowerCase() === 'w') {
            let drawMoney = await inquirer.prompt([
                {
                    name: 'withdraw',
                    message: 'How much money you want to withdraw? ',
                    type: 'number',
                }
            ]);
            let dd = currentCurrentBalance - drawMoney.withdraw;
            if (dd < 0) {
                console.log("Insufficient funds.");
            } else {
                currentCurrentBalance = dd; // Update balance
                console.log("Withdrawal successful. Your current balance is ", currentCurrentBalance);
            }
        } else {
            console.log("Enter a valid choice ");
            currentAccount();
        }
        anotherTransaction();
    }

    async function savingAccount()
     {
        console.log("\n");
        console.log("----- SAVING  ACCOUNT -----")
        console.log("\n");
        let SA = await inquirer.prompt([
            {
                name: 'sav',
                message: 'Press W for Amount Withdrawal \n  Press B for Balance Checking',
                type: 'string',
            }
        ]);

        if (SA.sav.toLowerCase() === 'b') {
            console.log(" Your current account balance is  ", currentSavingBalance);
        }
         else if (SA.sav.toLowerCase() === 'w') {
            let drawMoney1 = await inquirer.prompt([
                {
                    name: 'withdraw1',
                    message: 'How much money you want to withdraw? ',
                    type: 'number',
                }
            ]);
            let dd1 = currentSavingBalance - drawMoney1.withdraw1;
            if (dd1 < 0) {
                console.log("Insufficient funds.");
            } else {
                currentSavingBalance = dd1; // Update balance
                console.log("Withdrawal successful. Your current balance is ", currentSavingBalance);
            }
        }  
        else
         {
            console.log("Enter a valid choice ");
            savingAccount();
        }

        anotherTransaction();
    }

   async function anotherTransaction()
   {
    
    console.log('Do you want another transaction?')
            let anotherTrans = await inquirer.prompt([{
                name: 'moneyanother',
                message: 'Press YC for current account \n SC for Saving account \n  press N for leaving ',
                type: 'string',
            }]);

            console.log("\n");
           
            if(anotherTrans.moneyanother=='YC'|| anotherTrans.moneyanother=='yc'){
                currentAccount();
            }
            else if (anotherTrans.moneyanother=='SC'|| anotherTrans.moneyanother=='sc')
                {
                    savingAccount();
                }
                else if (anotherTrans.moneyanother=='N'|| anotherTrans.moneyanother=='n')
                    {
                       console.log(" Thank you for using our ATM ")
                    
                    }
        }
  
   }
ATM();

