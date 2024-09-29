let person = {
  firstName: "Zubayer",
  lastName: "Ahamed",
  age: 26,

  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());
