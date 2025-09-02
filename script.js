const firebaseConfig = {
  apiKey: "AIzaSyD2fZbAKmL1Cti7NIDcadAh4WqVv5KzbPI",
  authDomain: "career-guidance-e1462.firebaseapp.com",
  projectId: "career-guidance-e1462",
  storageBucket: "career-guidance-e1462.appspot.com",
  messagingSenderId: "566009292247",
  appId: "1:566009292247:web:67720ba8c8030ef7f95792",
  measurementId: "G-4TWBG640XT"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const indiaRadio = document.getElementById("india");
const abroadRadio = document.getElementById("abroad");
const stateSelect = document.getElementById("stateSelect");
const submitBtn = document.getElementById("submitBtn");
const formContainer = document.getElementById("formContainer");
const listingContainer = document.getElementById("listingContainer");

function updateUI() {
  if (indiaRadio.checked) {
    stateSelect.style.display = "block";
    submitBtn.style.display = "block";
  } else {
    stateSelect.style.display = "none";
    submitBtn.style.display = "block";
  }
}
indiaRadio.addEventListener("change", updateUI);
abroadRadio.addEventListener("change", updateUI);
window.onload = updateUI;

submitBtn.addEventListener("click", () => {
  const region = indiaRadio.checked ? "india" : "abroad";
  const state = region === "india" ? stateSelect.value : "global";
  formContainer.innerHTML = `<p class='text-muted'>Form ready for: <strong>${state}</strong></p>`;
  listingContainer.innerHTML = "";
  loadColleges(state);
});

function loadColleges(state) {
  db.collection("colleges").where("state", "==", state).onSnapshot(snapshot => {
    listingContainer.innerHTML = "<h5>Submitted Colleges:</h5>";
    snapshot.forEach(doc => {
      const data = doc.data();
      const div = document.createElement("div");
      div.className = "card mb-2 p-2";
      div.innerHTML = `<strong>${data.name}</strong> - ${data.location}`;
      listingContainer.appendChild(div);
    });
  });
}
