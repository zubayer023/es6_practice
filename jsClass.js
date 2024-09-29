// let person = {
//   firstName: "Abul",
//   lastName: "Hosin",
//   age: 26,

//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.fullName());

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// const myCar = new Car("Valvo", 2014);
// const myCar2 = new Car("BMW", 2001);

// console.log(myCar.age());
// console.log(myCar2.age());

class Person {
  constructor(fname, lname, birthday) {
    this.fname = fname;
    this.lname = lname;
    this.birthday = birthday;
  }
  calculateAge() {
    const bod = new Date(this.birthday);
    const diff = Date.now() - bod.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const Person1 = new Person("Abul", "Hosin", "10-15-1998");
console.log(Person1.calculateAge());
