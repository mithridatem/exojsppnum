function prixttc()
{
    //récupération du contenu des champs de formulaire
    let prixht = document.getElementById("prixht").value;
    let qtx = document.getElementById("qtx").value;
    let tva = document.getElementById("tva").value;
    //récupération de la variable qui va contenir le total TTC (id="resultat")
    let resultat = document.getElementById("resultat");
    //récupération de la variable qui va contenir les erreurs (id="error") 
    let error = document.getElementById("error");
    //test si les champs ne sont pas vides
    if(prixht != "" && qtx != "" && tva != ""){
        //on vide les erreurs
        error.innerHTML = "";
        //parsing (cast) des variables en int
        prixht = parseInt(prixht);
        qtx = parseInt(qtx);
        tva = parseInt(tva);
        //création de la variable totalTtc (qui va stocker le totalTtc)
        let totalTtc;
        //calucl
        totalTtc = prixht * qtx * (tva/100);
        //affichage du resultat
        resultat.innerHTML = "le prix total TTC est égal à : " +"<span>" +totalTtc + " €</span>";
    }
    //sinon
    else{
        //on vide le resultat
        resultat.innerHTML = "";
        //affichage du message d'erreur
        error.innerHTML = "Veuillez remplir tous les champs de formulaires";
    }
}