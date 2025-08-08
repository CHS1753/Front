// 17 홍길동 010-1111-2222 인천시 미추홀구 학익동 663-1
// 왜 객체 만듬? 보기 편하게 모아놓으려고 (맴버)

let age;
let name;
let phoneNumber;
let adress;
let humanH = {name: '홍길동', age: 17, phoneNumber: '010-1111-2222', adress: '인천시 미추홀구 학익동 663-1'};
console.log(humanH);



// const 값을 바꿀 수 없는 함수 -> 상수
// 얘는 값지정 따로 안해도 되네
const saram ={
    age:17,
    name:'홍길동',
    tel:'010-1111-2222',
    address: '인천시 미추홀구 학익동 663-1'
    ,insa () {
        console.log(saram.age, saram.name, saram['address']);
    }

};
saram.insa ()
console.log(saram.age, saram.name, saram['tel'], saram['address']);
console.log(typeof saram);
console.log(typeof humanH);
