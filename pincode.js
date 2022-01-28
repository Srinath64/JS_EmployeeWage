console.log("***** Welcome To PinCode Validation *****");

const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid PinCode !!");
    else
        throw pincode + " : Pincode is Invalid !";
}

//UC1

try{
    validatePincode("400088");
    validatePincode("400");
}
catch(e){
    console.error(e);
}

//UC2

try{
    validatePincode("400088");
    validatePincode("A40000");
}
catch(e){
    console.error(e);
}

//UC3

try{
    validatePincode("400088");
    validatePincode("40088B");
}
catch(e){
    console.error(e);
}

//UC4

try{
    validatePincode("400088");
    validatePincode("400 088");
}
catch(e){
    console.error(e);
}
