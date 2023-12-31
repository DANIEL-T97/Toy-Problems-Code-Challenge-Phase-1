function calculatePayee(grossSalary){ //the Calculate payee function calculates (PAYE) based on the gross salary
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;

    }else if (grossSalary <= 32333){
        payee =(grossSalary - 24000) * 0.25 + 2400;
    }else if  (grossSalary <= 500000){
        payee = ( grossSalary - 32333) * 0.3 + 4483;
    }else if (grossSalary <= 800000){
        payee = (grossSalary - 500000) * 0.325 + 140300.1;
    }else if ( grossSalary <= 9600000){
        payee =(grossSalary - 800000) * 0.35 + 237800;
    }
    return payee;
}

//function for NHIF deduction calculations
function calculateNHIF(grossSalary){ //It calculates NHIF based on the gross salary
    let nhif = 0;
    if(grossSalary <= 5999){            //the function uses javascript  conditionals to determine monthly amount to be paid for specific salary ranges
        nhif = 150;
    }else if (grossSalary <= 7999){
        nhif = 300;
    }else if (grossSalary <= 11999){
        nhif = 400;
    }else if (grossSalary <= 14999){
        nhif = 500;
    }else if (grossSalary <= 19999){
        nhif = 600;
    }else if (grossSalary <= 24999){
        nhif = 750;
    }else if (grossSalary <= 29999){
        nhif = 850;
    }else if (grossSalary <= 34999){
        nhif = 900;
    }else if (grossSalary <= 39999){
        nhif = 950;
    }else if (grossSalary <= 44999){
        nhif = 1000;
    }else if (grossSalary <= 49999){
        nhif = 1100;
    }else if (grossSalary <= 59999){
        nhif = 1200;
    }else if (grossSalary <= 59999){
        nhif = 1200;
    }else if (grossSalary <= 69999){
        nhif = 1300
    }else if (grossSalary <= 79999){
        nhif = 1400;
    }else if (grossSalary <= 89999){
        nhif = 1500;
    }else if (grossSalary <= 99999){
        nhif = 1600;
    }else {
        nhif = 1700;
    }
    return nhif;
}

//calculating NSSF deductions
function calculateNSSF(basicSalary){ //The calculateNSSF function calculates NSSF deductiona based on the basic salary
    return basicSalary * 0.06;
}

//Function to calculate net salary uses basic salary, benefits, payee and the deductions to calculate the net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);
    const netSalary = grossSalary - payee - nhif - nssf;
    return netSalary;
}
// Input values
const basicSalary = 30000;
const benefits = 5000;

//Calculating and displaying the net salary
const netSalary = calculateNetSalary(basicSalary, benefits);
console.log(`Basic Salary: ksh${basicSalary}`);
console.log(`Benefits: ksh${benefits}`);
console.log(`Net Salary: ksh${netSalary}`); 


