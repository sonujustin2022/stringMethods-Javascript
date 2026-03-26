// find out how time 'a' is present in 'abracadabra'

// let str = 'abracadabra';

// let aCount = 0;

// for(let chr of str){
//     if(chr=="a"){
//         aCount++;
//     }
// }

// console.log(aCount);


// splitmethod

let word = 'abracadabra';

let count = word.split('').reduce((accu,chr)=>chr=="a"?accu+1:accu,0);

console.log(count);