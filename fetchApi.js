const Data = document.getElementById("get_data");
const newData = Data.addEventListener("click", getData);

function getData() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.setup);
    });
}
