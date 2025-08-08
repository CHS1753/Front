// 2. Type 언어가 처리 할 수 있는 데이터의 종류
console.log(typeof 100);                  // number
console.log(typeof "100");                // string
console.log(typeof true);                 // boolean
console.log(typeof 5>3);                 // boolean가 나와야하는데 false 나오네
console.log(5>3);                        // true

// 변수 어떤 값을 저장(선언)
let a = 10;
let b = 20;
let c = a+b;
console.log("합계는" , c , "입니다.");


//  올해의 연도를 저장, 출생년도 저장, 나이를 출력
let 올해년도 = 2025; // thisYear
let 출생년도 = 2000; // birthYear
let 나이 = 올해년도 - 출생년도; // age = thisYear - birthYear

console.log("당신의 나이는", 나이 , "입니다.");

