// TODO : Ajouter un écouteur d'événement sur le formulaire
document.getElementById('form-examen').addEventListener('submit', function(e)
{
e.preventDefault();
// TODO : Récupérer les valeurs du formulaire
const examen = {
nom: document.getElementById('nom').value,
duree: parseInt(document.getElementById('duree').value),
description: document.getElementById('description').value,
proprietaire: document.getElementById('proprietaire').value,
questions: []
};
/* TODO : Sauvegarder l'examen dans le localStorage sous une clé basée sur
le nom du propriétaire*/ 
const examsKey = 'examens_' + examen.proprietaire;

const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
if (exams.find(e => e.nom === examen.nom)) {
  alert("Un examen avec ce nom existe déjà !");
  return;
}

exams.push(examen);
localStorage.setItem(examsKey, JSON.stringify(exams));
alert('Examen ajouté avec succès !');
this.reset();

// verification que l'examen n'existe pas déja


  
});