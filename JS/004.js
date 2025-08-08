//  변수는 값 한개만 저장
//  자바 스크립트는 타입이 값에 따라 변화 하지만 자바는 타입이 정해져 있다.
let a =10;
console.log(typeof a);          // number

let b = 3.14;
console.log(typeof b);          // number

let x = "사과";
console.log(typeof x)           // string

// x = 100;
console.log(typeof x)           // number

c = 10;                         // 애도 되네
console.log(c)

let z;
console.log(z)                  //undefined
console.log(x+z)                //사과undefined
console.log(z+a)                //NaN
let i = null;
console.log(i);                 //object가 나오지만 type은 null이다.
// undefined는 언어에서 값이 없다고 지정, null은 개발자가 값이 없다고 지정