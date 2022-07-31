"use strict";

//Buttons
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

//HTML
const pScoreHTML = document.getElementById("pscore");
const cScoreHTML = document.getElementById("cscore");
const prevResultHTML = document.getElementById("prev-result");
const playerScoreHTML = document.getElementById("playscore");
const computerScoreHTML = document.getElementById("compscore");

let pPoints, cPoints;

//Αρχικοποίηση μεταβλητών
if (pPoints === undefined && cPoints === undefined) {
  pPoints = 0;
  cPoints = 0;
  prevResultHTML.innerHTML = "Ξεκινήστε να παίζετε.";
}

if (pPoints === 0 || cPoints === 0) {
  playerScoreHTML.innerHTML = `Το σκορ σας είναι: <span id="pscore">${pPoints}</span>`;
  computerScoreHTML.innerHTML = `Το σκορ του υπολογιστή είναι: <span id="cscore">${cPoints}</span>`;
}

const cChoice = function () {
  const computerChoice = ["Πέτρα", "Ψαλίδι", "Χαρτί"];
  const random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
};

btnRock.addEventListener("click", () => {
  const res = cChoice();
  if (res === "Πέτρα") {
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε πέτρα. Ισοπαλία.";
  } else if (res === "Χαρτί") {
    cPoints += 1;
    computerScoreHTML.innerHTML = `Το σκορ του υπολογιστή είναι: <span id="cscore"> ${cPoints}</span>`;
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε χαρτί. Δυστυχώς χάσατε.";
  } else if (res === "Ψαλίδι") {
    pPoints += 1;
    playerScoreHTML.innerHTML = `Το σκορ σας είναι: <span id="pscore"> ${pPoints}</span>`;
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε ψαλίδι. Κερδίσατε!";
  }
});

btnPaper.addEventListener("click", () => {
  const res = cChoice();
  if (res === "Πέτρα") {
    pPoints += 1;
    playerScoreHTML.innerHTML = `Το σκορ σας είναι: <span id="pscore"> ${pPoints}</span>`;
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε πέτρα. Κερδίσατε!";
  } else if (res === "Χαρτί") {
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε χαρτί. Ισοπαλία";
  } else if (res === "Ψαλίδι") {
    cPoints += 1;
    computerScoreHTML.innerHTML = `Το σκορ του υπολογιστή είναι: <span id="cscore"> ${cPoints}</span>`;
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε ψαλίδι. Δυστυχώς χάσατε.";
  }
});

btnScissors.addEventListener("click", () => {
  const res = cChoice();
  if (res === "Πέτρα") {
    cPoints += 1;
    computerScoreHTML.innerHTML = `Το σκορ του υπολογιστή είναι: <span id="cscore"> ${cPoints}</span>`;
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε πέτρα. Δυστυχώς χάσατε.";
  } else if (res === "Χαρτί") {
    pPoints += 1;
    playerScoreHTML.innerHTML = `Το σκορ σας είναι: <span id="pscore"> ${pPoints}</span>`;
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε χαρτί. Κερδίσατε!";
  } else if (res === "Ψαλίδι") {
    prevResultHTML.innerHTML = "Ο υπολογιστής επέλεξε ψαλίδι. Ισοπαλία";
  }
});
