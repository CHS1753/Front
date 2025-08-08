

// 두개의 값과 한개의 함수를 가지는 객체

const human = {
    name: '홍길동',
    age: 30,
    insa() {
        console.log(this.name,this.age);
    }
};


human.insa();
//  true는 1 false는 0 , !, 0는 false로 됨, 1은 true
console.log(true+true);
console.log(true+true+true);
console.log(false+true);

console.log(10);        // number
console.log(!10);       // false
console.log(!!10);      // true
