let a = 5;
let b = 5.6;
let c = true;
let d = 'ali';
let f = 'F';
let arr = ['Ali','Ayşe'];
let r;
let j = null; // object'tir

let arrObject = [{name:'Ali'},{name:'Ayşe'}];


// var değişten tanımlaması sadece global scope da tercih edilir.


// a = false;
//backtick

// JS de toplama işlemi yaparken string birleşmeden ötürü sıkıntı yaşayabiliriz. dikkatli olalım.

console.log(`a değeri ${typeof(a)}`)
console.log(`b değeri ${typeof(b)}`)
console.log(`c değeri ${typeof(c)}`)
console.log(`d değeri ${typeof(d)}`)
console.log(`f değeri ${typeof(f)}`)
console.log(`Arr değeri ${typeof(arr)}`)
console.log(`r değeri ${typeof(r)}`)
console.log(`j değeri ${typeof(j)}`)


document.getElementById("names").innerText = arrObject.map(a =>  {return a.name})  


