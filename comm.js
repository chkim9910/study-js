// - 생성자 함수
// new 연산자를 통해 객체를 생성하는 함수
// 일반함수와 구분하기 위해 첫 글자를 대문자로 표기

// -- 생성자 함수로 객체 생성하기
const animals = new Array("dog", "cat", "bird", "rabbit");

console.log(animals); /* ['dog', 'cat', 'bird', 'rabbit'] */
console.log(animals.length); /* 4 */
console.log(animals.includes("bird")); /* true */
console.log(animals.includes("bear")); /* false */

// lenth, includes와 같은 프로퍼티를 '프로토타입 속성'이라고 함

// - 프로토타입(prototype)
// 객체 지향의 상속 개념은 부모 객체의 프로퍼티(속성, 메소드)를 자신의 것처럼 쓸 수 있는 것을 의미
// 여기서 부모 객체를 prototype 객체 or 줄여서 prototype이라고 함
// prototype의 속성과 메소드는 사용자가 직접 만들어 사용 가능

// -- prototype의 메소드 만들어 사용하기
Array.prototype.This = function () {
  console.log(this);
};

animals.This(); /* ['dog', 'cat', 'bird', 'rabbit'] */

const drink = ["americano", "latte", "tea"];
drink.This(); /* ['americano', 'latte', 'tea'] */

// -- call 메소드로 메소드 재활용하기
const Fall = {
  firstName: "Fall",
  lastName: "Kim",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(Fall.getFullName()); /* Fall Kim */

const Winter = {
  firstName: "Winter",
  lastName: "Choi",
};

console.log(Fall.getFullName.call(Winter)); /* Winter Choi */

// -- prototype 메소드로 메소드 재활용하기
// 1) 생성자 함수 만들기
function User(first, last) {
  this.firstName = first; /* this.firstName 속성에 first 매개변수를 할당 */
  this.lastName = last;
}

// 2) User 함수의 prototype에 getFullName() 메소드 생성하기
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// 3) 생성자 함수로 객체 생성하기
const winter = new User("winter", "Kim");
const fall = new User("fall", "Choi");

console.log(winter); /* User {firstName: 'winter', lastName: 'Kim'} */
console.log(fall); /* User {firstName: 'fall', lastName: 'Choi'} */
console.log(winter.getFullName()); /* winter Kim */
console.log(fall.getFullName()); /* fall Choi */

// -- class문법으로 메소드 재활용하기
// class 문법을 사용하면 생성자 함수를 사용하지 않고도 객체를 생성할 수 있음
// constructor() 메소드를 사용하여 객체를 생성하고, prototype에 메소드 생성 가능
// 1) class 생성하기
class UserName {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  //  따옴표로 구분하지 않음
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 2) 객체 생성하기
const winTer = new UserName("winter", "Kim");
const fAll = new UserName("fall", "Choi");

console.log(winTer); /* UserName {firstName: 'winter', lastName: 'Kim'} */
console.log(fAll); /* UserName {firstName: 'fall', lastName: 'Choi'} */
console.log(winTer.getFullName()); /* winter Kim */
console.log(fAll.getFullName()); /* fall Choi */
