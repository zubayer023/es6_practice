const getData = document.getElementById("get_data");
const newgetData = getData.addEventListener("click", loadData);

function loadData() {
  //Creat XHR object (XML HTTP Request)
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "./data.txt", true);
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      let displayOutput = document.getElementById("output");
      displayOutput.innerHTML = `<h4> ${this.responseText}</h4>`;
    }
  };
}
