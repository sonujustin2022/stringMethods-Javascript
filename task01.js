// w.a.p to convert 'javascript developer' to 'Javascript Developer'

// let str = 'javscript developer';

// let strArr = str.split(' ');

// newArr = strArr.map(eachWord=>eachWord[0].toUpperCase()+eachWord.slice(1));


// console.log(newArr.join(' '));


let str = "hello world";

let newstr = str.split(' ').map(eachWord=>eachWord[0].toUpperCase()+eachWord.slice(1)).join(' ');
console.log(newstr);