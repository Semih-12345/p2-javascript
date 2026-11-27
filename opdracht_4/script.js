let outputText = document.getElementById("leeftijd");

let geboortejaar = prompt("Voer hier in welke jaar jij bent geboren");

outputText.textContent = "jij bent ongeveer "  +(2026 - (geboortejaar))+ "  jaar oud";