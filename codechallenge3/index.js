const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function NHIF (gross_pay){
    if (gross_pay < 6000){
        return 150;
    }else if(gross_pay < 8000){
        return 300;
    }else if(gross_pay < 12000){
        return 400;
    }else if(gross_pay < 15000){
        return 500;
    }else if(gross_pay < 20000){
        return  600;
    }else if(gross_pay < 2500){
        return 700;
    }else if(gross_pay < 30000){
        return 850;
    }
    else if(gross_pay > 35000){
        return 900;
    } else {
        return  950
    }
    

}
input.question("What is your Gross Salary?\n Note: The gross salary is a total of your basic pay and all benefits\n", function (gross_pay){
    // console.log(`your gross salry is: ${gross_pay}`);
    let paye;
    let extra_taxable_pay;
    let nssf= 200;
    let total_deductions;
    let net_salary;
    if (gross_pay < 24001){
        paye = gross_pay * 0.1;
    }else if (gross_pay < 32334){
        paye = 2400;
        extra_taxable_pay = gross_pay - 24000
        paye = (extra_taxable_pay * 0.25) + paye;
    }else {
        paye = 4483;
        extra_taxable_pay = gross_pay - 32333;
        paye = (extra_taxable_pay * 0.30) + paye;       
    }
    let nhif = NHIF(gross_pay)

    total_deductions = nhif + paye + nssf;
    net_salary = gross_pay - total_deductions;
    printOutput(gross_pay, paye, nhif, nssf, total_deductions, net_salary)
    input.close();
});

function printOutput(gross_pay, paye, nhif, nssf, total_deductions, net_salary){
    process.stdout.write(`Your gross pay is Ksh: ${gross_pay}\n`);
    process.stdout.write(`Your P.A.Y.E is Ksh: ${paye}\n`);
    process.stdout.write(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
    process.stdout.write(`Your standard NSSF deduction is Ksh: ${nssf}\n`);    
    process.stdout.write(`Your Total deduction amount to Ksh: ${total_deductions}\n`);
    process.stdout.write(`Your Net Salary is Ksh: ${net_salary}\n`);    
}