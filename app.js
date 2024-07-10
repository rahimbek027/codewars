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


// masala 3 
// berilgan so'zda unli harflarni olib tashlab natija qaytarish

/*

function disemvowel(str) {
    const vowelRegex = /[aeiouAEIOU]/g;
    
   
    const removedVowels = str.replace(vowelRegex, '');

    return removedVowels;
}


let comment1 = "Rahimbek";
let comment2 = "Xabibullayev";

console.log(disemvowel(comment1)); 
console.log(disemvowel(comment2)); 

*/

// masala 4
//kiritilgan sonni ildizdan chiqarib undan keyingi keladigan sonning kvadratini qaytarish . aagar kiritilgan son kvadrat ildizdan chiqmasa natijaga -1 qaytarilsin
/*
function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    if (Number.isInteger(sqrt)) {
        let nextSquare = (sqrt + 1) ** 2;
        return nextSquare;
    } else {
  
        return -1;
    }
}


console.log(findNextSquare(121)); 
console.log(findNextSquare(625)); 
console.log(findNextSquare(114)); 
*/


// masala 5
// harflar ketma ket tarzda yoziladi va orasidan bittasi tashlab ketiladi dastur tashlab ketilgan harfni aniqlaydi
/*
function findMissingLetter(array) {
    let startCharCode = array[0].charCodeAt(0);
    let endCharCode = array[array.length - 1].charCodeAt(0);

    for (let i = startCharCode; i <= endCharCode; i++) {
        let expectedChar = String.fromCharCode(i);
        if (!array.includes(expectedChar)) {
            return expectedChar;
        }
    }

    return null; 
}


console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); 
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); 

*/

// masala 6 
// son berilgan bo'lsin shu soncha bo'lgan 3 ga yoki 5 ga bo'linadigan sonlarning yig'indisini hisoblash. agar kiritilgan son manfiy bolsa 0 ni qaytaradi

/*
function solution(number){
    if (number < 0) {
        return 0; 
    }

    let sum = 0;

    
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i; 
        }
    }

    return sum;
}


console.log(solution(10)); 
console.log(solution(20)); 
console.log(solution(-5)); 
*/

// masala 7 
// 1 dan N gacha bo'lgan sonlar ko'paytmasidan kelib chiqadigan natijasida nechta  0 soni bilan tugashi
/*
function zeros(n) {
    function trailingZerosInFactorial(N) {
        let count = 0;

        
        for (let i = 5; N / i >= 1; i *= 5) {
            
            count += Math.floor(N / i);
        }

        return count;
    }

    return trailingZerosInFactorial(n);
}


console.log(zeros(10));    
console.log(zeros(20));    
console.log(zeros(25)); 
*/