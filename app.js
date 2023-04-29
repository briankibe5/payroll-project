function calculate() {
    

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

        const personalRelief = 2400;
        const taxableIncome = grossPay - personalRelief

        let paye = 0;
      
        if (taxableIncome <= 24001) {
          paye = 0
        }
        else if (taxableIncome > 24001 && taxableIncome <= 32333) {
          paye = 2400 + (taxableIncome - 24000) * 0.25;
        }

        else if (taxableIncome > 32333) {
          paye = 2400 + (taxableIncome - 32333) * 0.3;
        }
      
        return paye;
        
    }


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
    
    return nhifRate
}

function calculateNetPay(grossSalary, nhif, nssf, paye) {

    let netPay = grossSalary - nhif - nssf - paye;
  
    return netPay;
  }
  

  