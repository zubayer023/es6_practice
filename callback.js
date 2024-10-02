// setTimeout(function () {
//   console.log("hello world");
// }, 2000);

// let person = [
//   {
//     firstName: "Abul",
//     lastName: "Hosin",
//     age: 25,
//   },
//   {
//     firstName: "Rahim",
//     lastName: "Mondol",
//     age: 45,
//   },
//   {
//     firstName: "Karin",
//     lastName: "khan",
//     age: 30,
//   },
// ];

// function createPerson(person) {
//   setTimeout(function () {
//     person.push(person);
//   }, 4000);
// }

// function getPerson() {
//   setTimeout(function () {
//     let output = "";

//     person.forEach(function (person) {
//       output += `<li>${person.firstName} ${person.lastName}</li>`;
//     });
//     document.getElementById("output").innerHTML = output;
//   }, 1000);
// }

// createPerson({ firstName: "Roni", lastName: "chy" });
// getPerson();

let person = [
  {
    firstName: "Abul",
    lastName: "Hosin",
    age: 25,
  },
  {
    firstName: "Rahim",
    lastName: "Mondol",
    age: 45,
  },
  {
    firstName: "Karin",
    lastName: "khan",
    age: 30,
  },
];

function createPerson(person, callback) {
  setTimeout(function () {
    person.push(person);
    callback();
  }, 2000);
}

function getPerson() {
  setTimeout(function () {
    let output = "";

    person.forEach(function (person) {
      output += `<li>${person.firstName} ${person.lastName}</li>`;
    });
    document.getElementById("output").innerHTML = output;
  }, 500);
}

createPerson({ fastName: "Rony" }, getPerson);
