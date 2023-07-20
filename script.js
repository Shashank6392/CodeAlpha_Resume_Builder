function addAQField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}
function addWEField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}
function addSKField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.classList.add("mt-2");

  let skOb = document.getElementById("sk");
  let skAddButtonOb = document.getElementById("skAddButton");

  skOb.insertBefore(newNode, skAddButtonOb);
}
function addCFField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add("form-control");
  newNode.classList.add("cfField");
  newNode.classList.add("mt-2");

  let cfOb = document.getElementById("cf");
  let cfAddButtonOb = document.getElementById("cfAddButton");

  cfOb.insertBefore(newNode, cfAddButtonOb);
}
function generateResume() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;
  document.getElementById("contactT").innerHTML = document.getElementById(
    "contactField"
  ).value;
  document.getElementById("gmailT").innerHTML = document.getElementById(
    "gmailField"
  ).value;
  document.getElementById("addressT").innerHTML = document.getElementById(
    "addressField"
  ).value;
  document.getElementById("ldT").innerHTML = document.getElementById(
    "ldField"
  ).value;
  document.getElementById("instaT").innerHTML = document.getElementById(
    "instaField"
  ).value;
  document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
  ).value;
  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;
  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";
  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str1;
  let sks = document.getElementsByClassName("skField");
  let str2 = "";
  for (let e of sks) {
    str2 += `<li> ${e.value} </li>`;
  }
  document.getElementById("skT").innerHTML = str2;
  let cfs = document.getElementsByClassName("cfField");
  let str3 = "";
  for (let e of cfs) {
    str3 += `<li> ${e.value} </li>`;
  }
  document.getElementById("cfT").innerHTML = str3;
  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend=function(){
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-template").style.display = "block";

}
function printResume() {
  window.print();
}
