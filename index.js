import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase,
        ref,
        push } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = { databaseURL: "https://birthday-tracker-53ca3-default-rtdb.firebaseio.com/"}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDb = ref(database, "birthdays")


const birthdayInput = document.getElementById("birthday-input")
const submitBtn =  document.getElementById("submit-button")

submitBtn.addEventListener("click", function(){
  push(referenceInDb, birthdayInput.value)
  birthdayInput.value=""
})
