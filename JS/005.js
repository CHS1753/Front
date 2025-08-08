// type : number, string, boolean, undefined, null, bigint(큰 돈계산 할 때 쓰는 타입, 아주 큰 값을 계산할 때 이용), object, symbol

let name;
let age;
let hobby;
// 여러 개의 변수를 하나로 통합하여 만드는 것 -> object(객체) 객체지향?
// object는 key:value로 구성되어 있다. 
let human = {name: '홍길동', age: 20, hobby: 'programming'};

console.log(human);
console.log(human.name);
console.log(human['name']);
let choice = 'age'
console.log(human[choice]);
// console.log(name,age,hobby);                // 이건 let에 지정된 값이 없어 undefine로 나온다.


