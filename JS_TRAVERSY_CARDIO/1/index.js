function reverseString(str){
    const strArr = str.split('');
    strArr.reverse();
    return strArr.join('');
}

function isPalindrome(str){
    const revString = str.split('').reverse().join('');
    return revString === str;
}

function reverseInt(int){
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString)
}

function capitalizeLetters(str){
     const strArr = str.toLowerCase().split('');
     for(let i = 0; i < strArr.length; i++){
         strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
         strArr[i].substring(1);
     }
     return strArr.join(' ');
}

function maxCharacter(str){
     const charMap = {};
     let maxNum = 0;
     let maxChar = '';
     str.split('').forEach(function(char) {
         if(charMap[char]){
             charMap[char]++;
         }else {
             charMap[char] = 1;
         }
     });
     for(let char in charMap){
         if(charMap[char] > maxNum){
           maxNum = charMap[char];
           maxChar = char;
         }
     }
     return maxChar;
}

function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
}