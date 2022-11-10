"use strict";
console.log("fetch.js");

//parsisiusti user.json

function getLocalUser() {
  fetch("data/user.json")
    .then((response) => response.json())
    .then((data) => console.log("data ===", data))
    .catch((err) => console.warn("klaida", err));
}
// getLocalUser();

function getLocalText() {
  fetch("data/colors.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log("data ===", data);
      const arr = data.split(", ");
      console.log("arr ===", arr);
    })
    .catch((err) => console.warn("klaida", err));
}

getLocalText();

const initHtml = () =>
  fetch("data/footer.html")
    .then((response) => response.text())
    .then((data) => document.body.insertAdjacentHTML("beforeend", data))
    .catch((err) => console.warn("klaida", err));

initHtml();

// # FETCH

// ## reqres.in

// 1. su funkcija pasissiusti vartotoju masyva is https://reqres.in/api/users?page=1. iskonsolinti rezultata
// 2. su pagalbine funkcija sugeneruoti korteliu sarasa is gautu duomenu. Pridedi siek tiek stiliaus is css.
//    1. paveiklsleliai turi matytis
function fetchMeData() {
  fetch("https://reqres.in/api/users?page=1")
    .then((response) => response.json())
    .then((json) => {
      let dataData = json.data;
      dataData.forEach((element) => {
        makeOneCard(element);
      });
    })
    .catch((err) => console.warn("klaida", err));
}

let peopleEl = document.getElementById("usersData");

// one card
function makeOneCard(element) {
  let oneCard = `  <div class="card">
    <img
      src="${element.avatar}"
      alt="profile picture"
    />
    <h3>${element.first_name}   ${element.last_name}</h3>

    <p>${element.email}</p>
  </div>`;

  peopleEl.insertAdjacentHTML("afterbegin", oneCard);
}
// fetchMeData();
// 3. padaryti kad duomenys butu parsiusti mygtuko paspaudimu. Ir pakartotinai paspaudus nesidubliuotu.
let loadPeopleBtn = document.getElementById("get1");

loadPeopleBtn.addEventListener("click", () => {
  clearPeopleHTML();
  fetchMeData();
});

function clearPeopleHTML() {
  peopleEl.innerHTML = "";
}

// 4. html virsuje saraso prideti mygtuka sortByfirstName. paspaudus isrikiuoti duomenis pagal varda. (hint: gal padetu globalus masyvas kuriame talpiname duomenis kai atsisiunciame.)
