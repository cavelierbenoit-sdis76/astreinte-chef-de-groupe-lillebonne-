const agents = [
{nom:"Agent 1",profil:"Min 7 semaines"},
{nom:"Agent 2",profil:"Min 7 semaines"},
{nom:"Agent 3",profil:"Min 7 semaines"},
{nom:"Agent 4",profil:"Min 4 semaines"},
{nom:"Agent 5",profil:"Nuit / WE / Férié"},
{nom:"Agent 6",profil:"Nuit / WE / Férié"},
{nom:"Agent 7",profil:"Nuit / WE / Férié"},
{nom:"Agent 8",profil:"Nuit / WE / Férié"},
{nom:"Agent 9",profil:"Nuit / WE / Férié"},
{nom:"Agent 10",profil:"Nuit / WE / Férié"},
{nom:"Agent 11",profil:"Nuit / WE / Férié"}
];

let astreintes =
JSON.parse(
localStorage.getItem("astreintes")
) || [];

function showPage(page){

document
.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document
.getElementById(page)
.classList.add("active");

}

function loadAgents(){

const liste =
document.getElementById("listeAgents");

const select =
document.getElementById("agent");

agents.forEach(a=>{

liste.innerHTML +=
`<div class="aff">
<b>${a.nom}</b><br>
${a.profil}
</div>`;

select.innerHTML +=
`<option>${a.nom}</option>`;

});

}

function majType(){

const type =
document.getElementById("type").value;

document
.getElementById("blocHoraire")
.style.display =
type === "Personnalisée"
? "block"
: "none";

}

function openForm(date){

document.getElementById("dateDebut").value=date;
document.getElementById("dateFin").value=date;

showPage("planning");

}

function saveAstreinte(){

const a = {

agent:
document.getElementById("agent").value,

type:
document.getElementById("type").value,

dateDebut:
document.getElementById("dateDebut").value,

dateFin:
document.getElementById("dateFin").value,

heureDebut:
document.getElementById("heureDebut").value,

heureFin:
document.getElementById("heureFin").value,

commentaire:
document.getElementById("commentaire").value

};

astreintes.push(a);

localStorage.setItem(
"astreintes",
JSON.stringify(astreintes)
);

renderAstreintes();

alert("Astreinte enregistrée");

}

function renderAstreintes(){

const div =
document.getElementById("affectations");

div.innerHTML="";

astreintes.forEach(a=>{

div.innerHTML +=
`
<div class="aff">
<b>${a.agent}</b><br>
${a.type}<br>
${a.dateDebut} → ${a.dateFin}
</div>
`;

});

document.getElementById(
"statsContent"
).innerHTML =
`Astreintes enregistrées : <b>${astreintes.length}</b>`;

}

loadAgents();
majType();
renderAstreintes();
