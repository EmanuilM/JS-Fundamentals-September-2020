function solve(pass) {


    let errorsInfo = []
    function isValidLength(pass) {
        if (!(pass.length >= 6 && pass.length <= 10))
            errorsInfo.push("Password must be between 6 and 10 characters")
        return pass;
    }

    function isOnlyLettersDigits(pass) {
        if (!pass.match(/^[a-zA-Z0-9]+$/g)) 
        errorsInfo.push("Password must consist only of letters and digits")
        return pass;
    }

    function atleastTwoDigis(pass) {
        if (!pass.match(/[0-9]{2,}/g)) 
        errorsInfo.push("Password must have at least 2 digits")
        return pass;
    }

    isOnlyLettersDigits(isValidLength(atleastTwoDigis(pass)))

  if( errorsInfo.length === 0 ) { 
    console.log("Password is valid") 
  }else { 
      for (const el of errorsInfo) {
          console.log(el);
      }
  }
    
}
