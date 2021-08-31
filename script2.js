function total()
{
    //récupération du nombre de photocopies
    let nbr = document.getElementById("nbr").value;
    
    //récupération de la variable qui va contenir le total TTC (id="resultat")
    let resultat = document.getElementById("resultat");
    //récupération de la variable qui va contenir les erreurs (id="error") 
    let error = document.getElementById("error");
    //variable prixTotal
    let prixTotal;
    //test si le champ nbr n'est pas vide
    if(nbr != ""){
        //parsing de nbr
        nbr = parseInt(nbr);
        //on vide les erreurs
        error.innerHTML = "";
        //test si nbr est égal à 0 ou négatif
        if(nbr <= 0){
            //on vide le résultat
            resultat.innerHTML = "";
            //affichage du message d'erreur
            error.innerHTML = "Veuillez saisir un nombre de photocopies supérieur à 0";
        }
        //test si nbr est <= à 10
        else if(nbr <=10){
            //stockage du calcul dans prixTotal
            prixTotal = nbr *1.20;
            //arrondi a 2 chiffres après la virgule
            prixTotal = Math.round(prixTotal * 100) / 100; //pour solutionner la multiplication de 1.2 par 3, 6 et 9
            //affichage du prix dans resultat
            resultat.innerHTML = "Le prix total est égal à : "+ "<span>"+ prixTotal + " €</span>";
        }
        //test si nbr est > 10 et nbr <= 20
        else if(nbr > 10 && nbr <= 20){
            //stockage du calcul dans prixTotal
            prixTotal = 12 + ((nbr -10) * 1.10);
            //affichage du prix dans resultat
            resultat.innerHTML = "Le prix total est égal à : "+ "<span>"+ prixTotal + " €</span>";
        }
        //sinon
        else{
            //stockage du calcul dans prixTotal
            prixTotal = 23 + ((nbr -20) * 1); //12 + 11 + (nbr- 20 * 1)
            //affichage du prix dans resultat
            resultat.innerHTML = "Le prix total est égal à : "+ "<span>"+ prixTotal + " €</span>";
        }
    }
    else{
        //on vide le resultat
        resultat.innerHTML = "";
        //affichage du message d'erreur
        error.innerHTML = "Veuillez remplir le nbr de photocopies";
    }
}