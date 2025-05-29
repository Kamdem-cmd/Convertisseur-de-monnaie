const devise1 = document.getElementById("devise1");
const devise2 = document.getElementById("devise2");
const valeur = document.getElementById("valeur");
const convertir = document.getElementById("convertir");
let monnaie = document.getElementById("monnaie");

let devises = [
    {
        nom:"FCFA",
        code:"XAF",
        base:600
    },
    {
        nom:"DOLLAR",
        code:"$",
        base:1
    },
    {
        nom:"EURO",
        code:"€",
        base:0.89
    }
];

function convertirMonnaie(){
    const montant = parseFloat(valeur.value);
    const deviseSource = devises.find(d => d.nom === devise1.value);
    const deviseCible = devises.find(d => d.nom === devise2.value);


    if(deviseSource && deviseCible && !isNaN(montant)) {
        const resultat = montant * deviseCible.base / deviseSource.base;
        monnaie.innerHTML = resultat.toFixed(2) + deviseCible.code;
        console.log(resultat.toFixed(2) + deviseCible.code);
    } else {
        alert("Veuillez vérifier vos sélections.");
    }
}



convertir.addEventListener("click", convertirMonnaie);