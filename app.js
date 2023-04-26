function calculate() {
    
    // const nssf_value = document.getElementById("nssf").value 
    // const nhif_value = document.getElementById("nhif").value 
    // const paye_value = document.getElementById("paye").value 


    const grossPay = document.getElementById("salary-input").value 
    document.getElementById("base_salary").innerHTML= grossPay

    const nssf = calculate_nssf(grossPay)
    document.getElementById("nssf").innerHTML= ""
    document.getElementById("nssf").innerHTML= nssf

    const nhif = calculate_nhif(grossPay)
    document.getElementById("nhif").innerHTML= ""
    document.getElementById("nhif").innerHTML= nhif

    const paye = calculate_PAYE(grossPay)
    document.getElementById("paye").innerHTML= ""
    document.getElementById("paye").innerHTML= paye

    const netPay = calculateNetPay(grossPay, nhif, nssf, paye);
    document.getElementById("net_pay").innerHTML= ""
    document.getElementById("net_pay").innerHTML= netPay
}

function calculate_nssf(grossPay){
    let nssf = 0

    if (grossPay >= 18000) {
    
        nssf= (grossPay * 0.06);
    } 
    else {
    
        nssf = 0
    }
    return nssf
}

// function calculate_PAYE(grossPay) {
// }
function calculate_PAYE(grossPay) {
    let paye = 0;
  
    // Taxable income after deducting personal relief of 2,400
    let taxableIncome = grossPay - 2400;
  
    if (taxableIncome <= 0) {
      paye = 0;
    } else if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 40667) {
        paye = 2400 + ((taxableIncome - 24000) * 0.15);
    } else if (taxableIncome <= 57333) {
        paye = 4800 + ((taxableIncome - 40667) * 0.20);
    } else if (taxableIncome <= 74000) {
        paye = 9300 + ((taxableIncome - 57333) * 0.25);
    } else if (taxableIncome <= 140000) {
        paye = 13800 + ((taxableIncome - 74000) * 0.3);
    } else if (taxableIncome <= 180000) {
        paye = 30600 + ((taxableIncome - 140000) * 0.32);
    } else {
        paye = 48600 + ((taxableIncome - 180000) * 0.34);
    }
  
    return paye;
  }
  
  // Example usage
  const kraPaye = calculateKRAPAYE(50000); // Returns 3260
  
function calculate_nhif(grossPay){

    let nhifRate = 0;
    
    if (grossPay <= 5999) {
      nhifRate = 150;
    } else if (grossPay <= 7999) {
      nhifRate = 300;
    } else if (grossPay <= 11999) {
      nhifRate = 400;
    } else if (grossPay <= 14999) {
      nhifRate = 500;
    } else if (grossPay <= 19999) {
      nhifRate = 600;
    } else if (grossPay <= 24999) {
      nhifRate = 750;
    } else if (grossPay <= 29999) {
      nhifRate = 850;
    } else if (grossPay <= 34999) {
      nhifRate = 900;
    } else if (grossPay <= 39999) {
      nhifRate = 950;
    } else if (grossPay <= 44999) {
      nhifRate = 1000;
    } else if (grossPay <= 49999) {
      nhifRate = 1100;
    } else if (grossPay <= 59999) {
      nhifRate = 1200;
    } else if (grossPay <= 69999) {
      nhifRate = 1300;
    } else if (grossPay <= 79999) {
      nhifRate = 1400;
    } else if (grossPay <= 89999) {
      nhifRate = 1500;
    } else if (grossPay <= 99999) {
      nhifRate = 1600;
    } else {
      nhifRate = 1700;
    }
    
    // console.log(`The NHIF rate for a gross pay of ${grossPay} is ${nhifRate}`);
    return nhifRate
}

function calculateNetPay(grossSalary, nhif, nssf, paye) {

    let netPay = grossSalary - nhif - nssf - paye;
  
    return netPay;
  }
  

  