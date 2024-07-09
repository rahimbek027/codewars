// masala 1
// raqamlar berilgan agar raqam 5 dan katta bo'lsa uni 1 ga  va 5 dan kichik bo'lsa 0 ga o'zgartir


/*


function fakeBin(x) {
    let natija = [];
    for (let i = 0; i < x.length; i++) {
        if (parseInt(x[i]) < 5) {
            natija.push('0');
        } else {
            natija.push('1');
        }
    }
    return natija.join(''); 
}
let x = ['2', '7', '3', '6', '4', '1', '5', '8', '9'];
let almashtirish = fakeBin(x);
console.log(almashtirish); 


*/


// masala 2
// Pin kod . pin kod 4 yoki 6 xonali bo'lishi va faqat raqamlardan iborat bo'lishi kerak


/*


function validatePIN(pin) {
   
    let raqamlar = /^\d+$/;
    if (pin.match(raqamlar) && (pin.length === 4 || pin.length === 6)) {
        return true;
    } else {
        return false;
    }
}


console.log(validatePIN("1234")); 
console.log(validatePIN("123456"));
console.log(validatePIN("12345")); 
console.log(validatePIN("1234a")); 
console.log(validatePIN("1234567")); 

*/

