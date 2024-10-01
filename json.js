// let student = {
//   name: "Rahim",
//   age: 34,
//   hometown: "Dhaka",
// };

// let student_json = JSON.stringify(student);

// console.log(student_json);

// let person = {
//   name: "Rahim",
//   age: 25,
//   hometown: "Dhaka",
//   married: "false",
//   dob: 1995 - 5 - 12,
//   test_nul: null,
//   test_undefined: undefined,
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// let person_json = JSON.stringify(person);
// console.log(person_json);

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = this.responseText;
    // console.log(data);
    jsonData(data);
  }
};

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json__obj) {
  //   console.log(json__obj);

  var js_obj = JSON.parse(json__obj);
  //   console.log(js_obj);

  for (x in js_obj.persons) {
    // console.log(x);
    var persons = js_obj.persons;
    // console.log(persons[x]);

    for (y in persons[x]) {
      console.log(persons[x][y]);
    }
  }
}
