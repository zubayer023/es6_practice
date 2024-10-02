const getData = document.getElementById("get_data");
const newGetdata = getData.addEventListener("click", loadJokes);

function loadJokes() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `https://official-joke-api.appspot.com/random_joke`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      let joke = data.setup;
      let newOutput = document.getElementById("output");
      newOutput.innerHTML = `<h6>${joke}</h6>`;
    }
  };
  xhr.send();
}
